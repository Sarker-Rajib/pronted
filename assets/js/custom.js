const landmarkYear2017 = document.getElementById("landmark-year-2017");
const detail2017 = document.getElementById("detail-2017");

const landmarkYear2018 = document.getElementById("landmark-year-2018");
const detail2018 = document.getElementById("detail-2018");

const landmarkYear2019 = document.getElementById("landmark-year-2019");
const detail2019 = document.getElementById("detail-2019");

const landmarkYear2020 = document.getElementById("landmark-year-2020");
const detail2020 = document.getElementById("detail-2020");

const landmarkYear2021 = document.getElementById("landmark-year-2021");
const detail2021 = document.getElementById("detail-2021");

const landmarkYear2022 = document.getElementById("landmark-year-2022");
const detail2022 = document.getElementById("detail-2022");

const landmarkYears = document.querySelectorAll(".landmark-year-block");
// console.log(landmarkYears);


// Show hidden DIV on hover
landmarkYear2017.addEventListener(
  "mouseover", function handleMouseOver() {
    detail2017.style.visibility = "visible";
    detail2018.style.visibility = "hidden";
    detail2019.style.visibility = "hidden";
    detail2020.style.visibility = "hidden";
    detail2021.style.visibility = "hidden";
    detail2022.style.visibility = "hidden";
  }
);


// Show hidden DIV on hover
landmarkYear2018.addEventListener(
  "mouseover",
  function handleMouseOver() {
    detail2017.style.visibility = "hidden";
    detail2018.style.visibility = "visible";
    detail2019.style.visibility = "hidden";
    detail2020.style.visibility = "hidden";
    detail2021.style.visibility = "hidden";
    detail2022.style.visibility = "hidden";
  }
);


// Show hidden DIV on hover
landmarkYear2019.addEventListener(
  "mouseover",
  function handleMouseOver() {
    detail2017.style.visibility = "hidden";
    detail2018.style.visibility = "hidden";
    detail2019.style.visibility = "visible";
    detail2020.style.visibility = "hidden";
    detail2021.style.visibility = "hidden";
    detail2022.style.visibility = "hidden";
  }
);

// Show hidden DIV on hover
landmarkYear2020.addEventListener(
  "mouseover",
  function handleMouseOver() {
    detail2017.style.visibility = "hidden";
    detail2018.style.visibility = "hidden";
    detail2019.style.visibility = "hidden";
    detail2020.style.visibility = "visible";
    detail2021.style.visibility = "hidden";
    detail2022.style.visibility = "hidden";
  }
);


// Show hidden DIV on hover
landmarkYear2021.addEventListener(
  "mouseover",
  function handleMouseOver() {
    detail2017.style.visibility = "hidden";
    detail2018.style.visibility = "hidden";
    detail2019.style.visibility = "hidden";
    detail2020.style.visibility = "hidden";
    detail2021.style.visibility = "visible";
    detail2022.style.visibility = "hidden";
  }
);
// Hide DIV on mouse out
// landmarkYear2021.addEventListener("mouseout", function handleMouseOut() {
//   detail2021.style.visibility = "hidden";
// });

// Show hidden DIV on hover
landmarkYear2022.addEventListener(
  "mouseover",
  function handleMouseOver() {
    detail2017.style.visibility = "hidden";
    detail2018.style.visibility = "hidden";
    detail2019.style.visibility = "hidden";
    detail2020.style.visibility = "hidden";
    detail2021.style.visibility = "hidden";
    detail2022.style.visibility = "visible";
  }
);
