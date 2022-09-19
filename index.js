// # Extreme Travel Website!

// **Instructions**:
// * Select the `header` that is the closest to the first `h1` heading. Give the `header` a solid border of 5px. ![alt text](images/header.png "Header")

let heading = document.querySelector("h1");
let header = (heading.closest("header").style.border = " 5px solid #219ebc");

// * If the `.info` section contains an `.info-package`, select all `package-title`s and give the title's previous element a border. ![alt text](images/packages.png "Packages")

const section = document.querySelector(".info");

const sectEl = section.matches(".info-package");

const packTitle = document.querySelectorAll(".package-title");

packTitle.forEach((el) => {
  el.previousElementSibling.style.border = "10px solid red";
  el.previousElementSibling.alt = "Packages";
});

// * Check if the label's class matches "mild". If  so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. ![alt text](images/packages.png "Packages")

const label = document.querySelectorAll("label");

label.forEach((el) => {
  if (el.classList.contains("mild")) {
    el.style.border = "2px solid yellow";
  } else if (el.classList.contains("intense")) {
    el.style.border = "2px solid orange";
  } else {
    el.style.border = "2px solid red";
  }
});

// * Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. Note: the `.nav-list` should still contain its children. ![alt text](images/footer.png "Footer")

let navList = document.querySelector(".nav-list");
navList = navList.childNodes;

let siteMap = document.querySelector(".site-map");

console.log(navList);

navList.forEach((el) => {
  siteMap.appendChild(el.cloneNode(true));
});

/**
 * const array = [...navList];
array.forEach((el) => {
  const item = document.createElement("li");
  item.innerText = el.innerText;
  siteMap.appendChild(item);
  // el.remove();
  //navList[idx].remove();
});
 */
