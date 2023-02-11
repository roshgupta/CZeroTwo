let tot=0

// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     console.log(tabs[0].url);
//   });
// });
chrome.webRequest.onCompleted.addListener(
  function (details) {
    // console.log(details);

    for(let it of details.responseHeaders){
      if(it.name==='content-length'){
        console.log(it.value)
        tot=tot+parseInt(it.value);
      }
    }
    console.log("gozaaa ",tot)

  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);
