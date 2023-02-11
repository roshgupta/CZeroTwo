let total=0
let vis=[{url:"default",value:0}]
let curr_url;
let curr_value;

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  curr_url="default";
  curr_value=0;
  const url = new URL(tab.url);
  curr_url=url.hostname;
}
);


chrome.webRequest.onCompleted.addListener(
  function (details) {
    for(let it of details.responseHeaders){
      if(it.name==='content-length'){
        console.log(it.value)
        total=total+parseInt(it.value);
        curr_value=parseInt(it.value);
      }
    }

    let f=1;
    for(let ind of vis){
      if(ind.url===curr_url){
        f=0;
        ind.value=parseInt(ind.value)+parseInt(curr_value);
      }
    }
    if(f==1){
      vis.push({url:curr_url,value:curr_value})
    }

    console.log(vis)
    chrome.storage.local.set({ visited: JSON.stringify(vis) }).then(() => {
      console.log("Value is set to " + JSON.stringify(vis));
    });

  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);

chrome.windows.onRemoved.addListener((windowId) => {
  console.log("Closed window: " + windowId);
  
  // Make an API request here

});