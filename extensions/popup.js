// 1.02445483e-8
chrome.storage.local.get(["visited"]).then((result) => {
  let visitedArrayData = JSON.parse(result.visited);
  let template = "";
  let count = 0;
  let totalData = 0;
  visitedArrayData.forEach(e => {
    if (e && e.value) {

      totalData += e.value;
    }
  });
  let totalCarbonValue = ((totalData * 1024.45483) * (10 ** -11)).toFixed(5);
  const totalElement = document.getElementsByClassName("total-usages-value")[0];
  totalElement.innerHTML = totalCarbonValue;
  for (let i = visitedArrayData.length - 1; i >= 0; i--) {
    if (visitedArrayData[i] && visitedArrayData[i] != "default"
      && visitedArrayData[i] != "undefined" && visitedArrayData[i] != undefined) {
      count++;
      template += `<li class="website">
      <p class="url-link"> ${visitedArrayData[i].url}</p>
      <div>
        <div class="data-usages">
          Data used by website :
          <span class="data-usages-value">
            ${((visitedArrayData[i].value) / 1024).toFixed(2)}
          </span><span>

            KB
          </span>
        </div>
        <div class="carbon-emisson">
          Carbon emission equivalent to :
          <span class="carbon-emisson-value">
          ${((visitedArrayData[i].value * 1024.45483) * (10 ** -11)).toFixed(5)}
          </span><span>
            gm
          </span>
        </div>
      </div>
    </li>`
      if (count == 3) break;
    }
  }
  template += `
  <li class="view-more">
  <div>Visit Website</div>
  </li>`
  const websites = document.getElementById("websites");
  websites.innerHTML = template;
  const viewMore = document.getElementsByClassName("view-more")[0];
  viewMore.addEventListener("click", () => {
    //open a url in new tab
    chrome.tabs.create({ url: "http://localhost:3000" });
    // enter url for the extension website
    // send all data to backend

  })
});