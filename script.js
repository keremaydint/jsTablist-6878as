const tab1 = document.getElementById("tab1-content");
const tab2 = document.getElementById("tab2-content");
const tab3 = document.getElementById("tab3-content");

const tab1btn = document.getElementById("tab1-button");
const tab2btn = document.getElementById("tab2-button");
const tab3btn = document.getElementById("tab3-button");

function london() {
  tab1.classList.remove("hide");
  tab2.classList.add("hide");
  tab3.classList.add("hide");
  tab1btn.classList.add("active");
  tab2btn.classList.remove("active");
  tab3btn.classList.remove("active");
}

function paris() {
  tab2.classList.remove("hide");
  tab1.classList.add("hide");
  tab3.classList.add("hide");
  tab1btn.classList.remove("active");
  tab2btn.classList.add("active");
  tab3btn.classList.remove("active");
}

function tokyo() {
  tab3.classList.remove("hide");
  tab1.classList.add("hide");
  tab2.classList.add("hide");
  tab1btn.classList.remove("active");
  tab2btn.classList.remove("active");
  tab3btn.classList.add("active");
}
