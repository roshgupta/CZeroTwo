let total = 0
let vis = [{ url: "default", value: 0 }]
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
      vis.push({ url: curr_url, value: curr_value })
    }

    let filtered = vis.filter(function (el) {
      return el != null && el.url != "default" && el.url != "undefined" && el.url != "newtab" && el.url != undefined;
    });
    chrome.storage.local.set({ visited: JSON.stringify(filtered) });

  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);

chrome.windows.onRemoved.addListener((windowId) => {
  console.log("Closed window: " + windowId);
  let visitedByUser=[]
  chrome.storage.local.get(["visited"]).then((result) => {
    visitedByUser=JSON.parse(result.visited);
    });
  
  // Make an API request here
  console.log(visitedByUser)
  fetch('http://localhost:5000/userlink/dum', {
  method: 'POST',
  body: {
    visited:visitedByUser
  },
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })

  // after that clear local storage
  chrome.storage.local.remove('visited')

});