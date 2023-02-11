chrome.storage.local.get(["visited"]).then((result) => {
  console.log("Value currently is " + result.visited);
  document.getElementById("mod").innerHTML = result.visited;
});