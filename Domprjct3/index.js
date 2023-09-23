const ele = document.querySelectorAll(".element");

ele.forEach((value) => {
    value.addEventListener("mouseenter", () => {
        value.childNodes[3].style.opacity = 1;
    })

    value.addEventListener("mouseleave", () => {
        value.childNodes[3].style.opacity = 0;
    })

    value.addEventListener("mousemove", (dets) => {
        value.childNodes[3].style.left = dets.x + "px";
        // value.childNodes[3].style.top = dets.y + "px" - 300;
    })


})













// // const head = document.querySelector("h1");
// // const pic = document.querySelector(" img");
// // ele.addEventListener("mousemove", (dets) => {
// //     pic.style.left = dets.x + "px";
// //     pic.style.top = dets.y + "px";
// // })

// // ele.addEventListener("mouseenter", function () {
// //     pic.style.opacity = 1;
// // })

// // ele.addEventListener("mouseleave", function () {
// //     pic.style.opacity = 0;
// // })