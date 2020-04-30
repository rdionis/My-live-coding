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
