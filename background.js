chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log("Hii");
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log(tabs);
  });
});
