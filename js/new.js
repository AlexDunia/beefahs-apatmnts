//  The remaining javascript is for the script tag

 const head = document.querySelector(".header");
 const headmq = document.querySelector(".headericon");

 
 const fixedhead = document.querySelector(".fixednav");


window.addEventListener ("scroll", function () {
const headheight = head.getBoundingClientRect().height;
const headheightmq = headmq.getBoundingClientRect().height;
const display = document.querySelector("#menuItemm")
  const scrollHeight = window.pageYOffset;


if (scrollHeight > headheight){
   head.classList.add("fixed-nav");
   headmq.classList.add("fixed-nav");
   display.style.visibility = "hidden";
}
else{
 head.classList.remove("fixed-nav"); 
 headmq.classList.remove("fixed-nav"); 
}
})

// menu toggle

function menutoggle(){
	const display = document.querySelector("#menuItemm")
	display.style.visibility = "visible"
	display.style.animation = "slideInFromLeft 0.7s ease-in-out";
	 
	// let rotation = 0;
    // function rotateImg() {
    //   rotation += 90; // add 90 degrees, you can change this as you want
    //   if (rotation === 360) { 
        // 360 means rotate back to 0
    //     rotation = 0;
    //   }
    //   document.querySelector("#img").style.transform = `rotate(${rotation}deg)`;
    // }
}


var iconn = document.getElementById("tryicon");
iconn.addEventListener("click", function() {
	const display = document.querySelector("#menuItemm")
	display.style.animation = "slideOutFromRight 3s ease-in-out";
	display.style.visibility = "hidden"
});
