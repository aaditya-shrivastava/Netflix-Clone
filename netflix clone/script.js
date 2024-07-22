document.addEventListener("DOMContentLoaded", () => {
  //questions
  const Q1 = document.getElementById("Q1");
  const Q2 = document.getElementById("Q2");
  const Q3 = document.getElementById("Q3");
  const Q4 = document.getElementById("Q4");
  const Q5 = document.getElementById("Q5");
  const Q6 = document.getElementById("Q6");
  //Answers
  const ans1 = document.getElementById("answer1");
  const ans2 = document.getElementById("answer2");
  const ans3 = document.getElementById("answer3");
  const ans4 = document.getElementById("answer4");
  const ans5 = document.getElementById("answer5");
  const ans6 = document.getElementById("answer6");
  //svg
  const svg1 = document.getElementById("svg1");
  const svg2 = document.getElementById("svg2");
  const svg3 = document.getElementById("svg3");
  const svg4 = document.getElementById("svg4");
  const svg5 = document.getElementById("svg5");
  const svg6 = document.getElementById("svg6");
  // cross Svg
  const cross1 = document.getElementById("cross1");
  const cross2 = document.getElementById("cross2");
  const cross3 = document.getElementById("cross3");
  const cross4 = document.getElementById("cross4");
  const cross5 = document.getElementById("cross5");
  const cross6 = document.getElementById("cross6");

  let count = 0;

  // PROPERTY TO NONE
  Q1.addEventListener("click", () => {
    if (
      count === 0 ||
      count === 2 ||
      count === 3 ||
      count === 4 ||
      count === 5 ||
      count === 6
    ) {
      count = 1;
      ans1.style.display = "block";
      ans2.style.display = "none";
      ans3.style.display = "none";
      ans4.style.display = "none";
      ans5.style.display = "none";
      ans6.style.display = "none";
      cross1.style.display = "block";
      svg1.style.display = "none";
    } else if (ans1.style.display === "none") {
      ans1.style.display = "block";
      cross1.style.display = "block";
      svg1.style.display = "none";
    } else {
      count = 0;
      ans1.style.display = "none";
      cross1.style.display = "none";
      svg1.style.display = "block";
    }
  });
  Q2.addEventListener("click", () => {
    if (
      count === 0 ||
      count === 1 ||
      count === 3 ||
      count === 4 ||
      count === 5 ||
      count === 6
    ) {
      count = 2;
      ans1.style.display = "none";
      ans2.style.display = "block";
      ans3.style.display = "none";
      ans4.style.display = "none";
      ans5.style.display = "none";
      ans6.style.display = "none";
      cross2.style.display = "block";
      svg2.style.display = "none";
    } else if (ans2.style.display === "none") {
      ans2.style.display = "block";
      cross2.style.display = "block";
      svg2.style.display = "none";
    } else {
      ans2.style.display = "none";
      cross2.style.display = "none";
      svg2.style.display = "block";
    }
  });
  Q3.addEventListener("click", () => {
    if (
      count === 0 ||
      count === 1 ||
      count === 2 ||
      count === 4 ||
      count === 5 ||
      count === 6
    ) {
      count = 3;
      ans1.style.display = "none";
      ans2.style.display = "none";
      ans3.style.display = "block";
      ans4.style.display = "none";
      ans5.style.display = "none";
      ans6.style.display = "none";
      cross3.style.display = "block";
      svg3.style.display = "none";
    } else if (ans3.style.display === "none") {
      ans3.style.display = "block";
      cross3.style.display = "block";
      svg3.style.display = "none";
    } else {
      ans3.style.display = "none";
      cross3.style.display = "none";
      svg3.style.display = "block";
    }
  });
  Q4.addEventListener("click", () => {
    if (
      count === 0 ||
      count === 1 ||
      count === 2 ||
      count === 3 ||
      count === 5 ||
      count === 6
    ) {
      count = 4;
      ans1.style.display = "none";
      ans2.style.display = "none";
      ans3.style.display = "none";
      ans4.style.display = "block";
      ans5.style.display = "none";
      ans6.style.display = "none";
      cross4.style.display = "block";
      svg4.style.display = "none";
    } else if (ans4.style.display === "none") {
      ans4.style.display = "block";
      cross4.style.display = "block";
      svg4.style.display = "none";
    } else {
      ans4.style.display = "none";
      cross4.style.display = "none";
      svg4.style.display = "block";
    }
  });
  Q5.addEventListener("click", () => {
    if (
      count === 0 ||
      count === 1 ||
      count === 2 ||
      count === 3 ||
      count === 4 ||
      count === 6
    ) {
      count = 5;
      ans1.style.display = "none";
      ans2.style.display = "none";
      ans3.style.display = "none";
      ans4.style.display = "none";
      ans5.style.display = "block";
      ans6.style.display = "none";
      cross5.style.display = "block";
      svg5.style.display = "none";
    } else if (ans5.style.display === "none") {
      ans5.style.display = "block";
      cross5.style.display = "block";
      svg5.style.display = "none";
    } else {
      ans5.style.display = "none";
      cross5.style.display = "none";
      svg5.style.display = "block";
    }
  });
  Q6.addEventListener("click", () => {
    if (
      count === 0 ||
      count === 1 ||
      count === 2 ||
      count === 3 ||
      count === 4 ||
      count === 5
    ) {
      count = 6;
      ans1.style.display = "none";
      ans2.style.display = "none";
      ans3.style.display = "none";
      ans4.style.display = "none";
      ans5.style.display = "none";
      ans6.style.display = "block";
      cross6.style.display = "block";
      svg6.style.display = "none";
    } else if (ans6.style.display === "none") {
      ans6.style.display = "block";
      cross6.style.display = "block";
      svg6.style.display = "none";
    } else {
      ans6.style.display = "none";
      cross6.style.display = "none";
      svg6.style.display = "block";
    }
  });
});
function Translator() {
  const Selector = document.getElementById("navLang");
  const SelectedValue = Selector.value;
  if (SelectedValue === "English") {
    location.replace("indexEnglish.html");
    console.log("clicked");
  } else if (SelectedValue === "Hindi") {
    location.replace("indexHindi.html");
  }
};
function TranslateFromBottom() {
  const SelectedBottom = document.getElementById("language");
  const bottomValue = SelectedBottom.value;
  if(bottomValue === "English"){
    location.replace("indexEnglish.html");
    console.log("English");
  }else if (bottomValue === "Hindi") {
    location.replace("indexHindi.html");
    console.log("hindi");
  }
}