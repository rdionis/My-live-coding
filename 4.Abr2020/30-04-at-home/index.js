// Event Bubbling

// https://online-karrieretag.de/berlin/

const list = document.querySelector(".container ul");
list.addEventListener("click", function (e) {
  //this parameter "e" stands for "event" and refers to the user action
  if (e.target.className == "delete") {
    //"target" is a preserved word from JS
    let li = e.target.parentElement;
    console.log(li);
    list.removeChild(li);
  }
  // alert("Hi");
});

const hide = document.querySelector("#hide");
hide.addEventListener("change", function () {
  if (hide.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});
// const hide = document.querySelector(".delete");
// hide.addEventListener("click", function () {
//   event.stopPropagation();
//   //with this line, you stop the event from bubbling to the parent
//   console.log("Nice ");
// });

// classList.contains

// Dynamic Pills
// Description:
// There should be visual feedback while hovering over the list items. Example, the list item’s background color should change to blue on hover.
// On click, the title, image and move description should update on the left side of the list items.
// On click, the list item should also be displayed with a different background color, e.g. red.
// Instructions:
// Upload your favorite movie images and create your own design, write a function that adds and handles the dynamic pill behaviour.
// Deploy this page on  Github pages
// Hint: Refer to the representation below, for an idea of what your result should look like.
