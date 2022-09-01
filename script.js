const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// handle the dragstart
function dragStart(e) {
   this.className += " hold";
   setTimeout(() => (this.className = "invisible"), 0);
}

// handle the dragend
function dragEnd(e) {
   this.className = "fill";
}

empties.forEach((empty) => {
   empty.addEventListener("dragenter", dragEnter);
   empty.addEventListener("dragover", dragOver);
   empty.addEventListener("dragleave", dragLeave);
   empty.addEventListener("drop", drop);
});

// drop targets
function dragEnter(e) {
   e.preventDefault();
   this.className += " hovered";
}

function dragOver(e) {
   e.preventDefault();
}

function dragLeave(e) {
   this.className = "empty";
}

function drop(e) {
   this.className = "empty";
   this.append(fill);
}
