// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     console.log(tabs[0].url);
//   });
// });
chrome.webRequest.onCompleted.addListener(
  function (details) {
    console.log(details);
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);
