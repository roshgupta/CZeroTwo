let total = 0
let vis = [{ url: "default", value: 0 ,carbon:0}]
let uservisit = [{ url: "default", value: 0 ,carbon:0}]
let curr_url;
let curr_value;

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  curr_url = "default";
  curr_value = 0;
  const url = new URL(tab.url);
  curr_url = url.hostname;
}
);


chrome.webRequest.onCompleted.addListener(
  function (details) {
    for (let it of details.responseHeaders) {
      if (it.name === 'content-length') {
        console.log(it.value)
        total = total + parseInt(it.value);
        curr_value = parseInt(it.value);
      }
    }

    let f = 1;
    for (let ind of vis) {
      if (ind.url === curr_url) {
        f = 0;
        ind.value = parseInt(ind.value) + parseInt(curr_value);
      }
    }
    if (f == 1) {
      vis.push({ url: curr_url, value: curr_value,carbon: ((curr_value  * 1024.45483) * (10 ** -11)).toFixed(5)})
    }

    let filtered = vis.filter(function (el) {
      return el != null && el.url != "default" && el.url != "undefined" && el.url != "newtab" && el.url != undefined;

    });
  
    chrome.storage.local.set({ visited: JSON.stringify(filtered) });
    uservisit=filtered;

  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);


chrome.windows.onRemoved.addListener((windowId) => {
  console.log("Closed window: " + windowId);
  
  // let visitedByUser=[]
  // chrome.storage.local.get(["visited"]).then((result) => {
  //   visitedByUser=JSON.parse(result.visited);
  //   });
  
  // Make an API request here
  console.log(uservisit)
  const token=chrome.storage.local.get("access_token")
  console.log(token)

  fetch("http://localhost:5000/userlink/", {
    method: "POST",
     
    body: JSON.stringify({
        visited:uservisit
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch((err)=>{
  console.log(err)
})

  chrome.storage.local.remove('visited')

});