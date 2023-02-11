let visitedArrayData;
chrome.storage.local.get(["visited"]).then((result) => {
  visitedArrayData = result.visited;
  console.log("Value currently is " + result.visited);
});