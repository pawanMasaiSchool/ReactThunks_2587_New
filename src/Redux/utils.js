function loadData(key) {
  let data = localStorage.getItem(key);

  console.log("getting data from local storage");
  return data;
}

function savData(key, val) {
  console.log("saving data in local storage");
  localStorage.setItem(key, val);
  return true;
}

export { loadData, savData };
