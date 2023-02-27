//1.
document.getElementById("container");

//2.
document.querySelector("#container");

//3.
document.getElementsByClassName("secod");

//4.
const result = document.querySelector("ol > .third");

// //5.
// document.getElementById("container").innerText = "Hello";

//6.
const footer = document.querySelector(".footer");
footer.classList.add("main");

//7.
footer.classList.remove("main");

//8.
const li = document.createElement("li");

//9.
li.innerText = "four";

//10.
const list = document.querySelector(" ul");
list.appendChild(li);

//11.
const allparts = document.querySelectorAll("ol > li");
for (let li of allparts) {
  li.getElementsByClassName.backgroundColor = "red";
}

//12.
const foot = document.querySelector(".footer");
foot.remove();
