const images = [];
const names = [];
const descs = [];
const quotes = [];

//images
images[0] = "images/image-tanya.jpg";
images[1] = "images/image-john.jpg";
//names
names[0] = "Tanya Sinclair";
names[1] = "John Tarkpor";
//descs

descs[0] = "UX Engineer";
descs[1] = "Junior Front-end Developer";

//quotes

quotes[0] =
  "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
quotes[1] =
  "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";

//get components
const quote = document.getElementById("quote");
const image = document.getElementById("student-img");
const name = document.querySelector(".student-name");
const desc = document.querySelector(".student-desc");
const rightbtn = document.getElementById("right");
const leftbtn = document.getElementById("left");

//button functions

let i = 0;

rightbtn.addEventListener("click", () => {
  image.setAttribute("src", images[i]);
  name.innerText = names[i];
  quote.innerText = quotes[i];
  desc.innerText = descs[i];
  if (
    i < images.length - 1 &&
    names.length - 1 &&
    quotes.length - 1 &&
    descs.length - 1
  ) {
    i++;
  } else {
    i = 0;
  }
});

leftbtn.addEventListener("click", () => {
  image.setAttribute("src", images[i]);
  name.innerText = names[i];
  quote.innerText = quotes[i];
  desc.innerText = descs[i];
  if (
    i < images.length - 1 &&
    names.length - 1 &&
    quotes.length - 1 &&
    descs.length - 1
  ) {
    i++;
  } else {
    i = 0;
  }
});
