import { getResults, debounce } from "./utils.js";

// getResults("ap").then((i) => {
//   console.log(i);
// });

const inputBox = document.querySelector(".inputBox");
const dropDownBox = document.querySelector(".dropdownBox");

function remmoveDropDown() {
  dropDownBox.classList.remove("dropdownBox-display");
}

function handleDropDownBox(list = []) {
  const searchBox = document.createDocumentFragment();
  list.forEach((item) => {
    const ele = document.createElement("div");
    ele.innerHTML = item;
    ele.setAttribute("data-key", item);
    ele.setAttribute("class", "item");
    searchBox.appendChild(ele);
  });
  dropDownBox.innerHTML = "";
  dropDownBox.appendChild(searchBox);
}

async function handleSearch(keyword) {
  const res = await getResults(keyword);
  if (res.length) {
    dropDownBox.classList.add("dropdownBox-display");
    handleDropDownBox(res);
  }
  console.log(res);
}

function handleInput() {
  const value = inputBox.value;
  if (value.length) {
    handleSearch(value);
  } else {
    remmoveDropDown();
  }
}

function handleClick(e) {
  const { key } = e.target.dataset;
  if (key) {
    inputBox.value = key;
    remmoveDropDown();
  }
}

inputBox.addEventListener("input", debounce(handleInput, 500));

dropDownBox.addEventListener("click", handleClick);
