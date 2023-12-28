import { FRUITS } from "./data.js";

export function getResults(keyword) {
  const result = FRUITS.filter((ele) => {
    return (
      ele.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
    );
  });

  return new Promise((res) => {
    setTimeout(() => {
      res(result);
    }, 1000);
  });
}

export function debounce(fn, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
