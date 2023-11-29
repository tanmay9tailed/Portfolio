const Dragger = document.querySelector(".dragme");
const on = document.querySelector(".on");
Draggable.create(".dragme", {
  type: "x",
  bounds: ".slider",
});

// setInterval(()=>{console.log(Dragger.getBoundingClientRect().x,on.getBoundingClientRect().x)},1000)

document.querySelector(".home").addEventListener("mousemove", () => {
  console.log(Dragger.getBoundingClientRect().x, on.getBoundingClientRect().x);
  if (
    Math.floor(Dragger.getBoundingClientRect().x) ===
    Math.floor(on.getBoundingClientRect().x)
  ) {
    document.querySelector("#video2").style.opacity = 1;
    document.querySelector(".on-text").innerHTML = "";
  } else {
    document.querySelector("#video2").style.opacity = 0;
    document.querySelector(".on-text").innerHTML = "Turn Me On";
  }
});

gsap.from(".left-nav,.right-nav li", {
  y: -250,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});

var typed = new Typed(".autotyped", {
  strings: ["TANMAY", "DEVELOPER", "DESIGNER"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const crsr = document.querySelector(".crsr");
window.addEventListener("mousemove", function (e) {
  crsr.style.left = e.x - (crsr.classList.contains("hovering") ? 25 : 0) + "px";
  crsr.style.top = e.y - (crsr.classList.contains("hovering") ? 25 : 0) + "px";
});
const bigcircle = document.querySelectorAll(".big-circle");
bigcircle.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    crsr.classList.add("hovering");
  });
});
bigcircle.forEach((element) => {
  element.addEventListener("mouseleave", () => {
    crsr.classList.remove("hovering");
  });
});

// part 2
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers:true,
    start: "41% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});
tl.to(
  ".text",
  {
    top: "-7%",
  },
  "a"
)
  .to(
    "#card-one",
    {
      top: "35%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "140%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "42%",
    },
    "b"
  )
  .to(
    "#card-one",
    {
      scale:0.9
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "160%",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "50%",
    },
    "c"
  )
  .to(
    "#card-one",
    {
      scale:0.8
    },
    "c"
 )
  .to(
    "#card-two",
    {
      scale:0.9
    },
    "c"
  );

var t1 = gsap.timeline({
  duration: 1,
  scrollTrigger: {
    trigger: "#home",
    start: "140% 90%",
    end: "170% 90%",
    scrub: 5,
    // markers:true
  },
});
t1.from("#main .heading h2", {
  opacity: 0,
  y: 100,
})
  .from("#main .text h1", {
    opacity: 0,
    y: 100,
  })
  .from("#main .text p", {
    opacity: 0,
    y: 100,
  });



VanillaTilt.init(document.querySelectorAll(".parallax-box"), {
  max: 15,
  speed: 200,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".parallax-box"));

document.querySelectorAll(".contact-link").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.textDecoration = "line-through";
  });
});
document.querySelectorAll(".contact-link").forEach((element) => {
  element.addEventListener("mouseleave", () => {
    element.style.textDecoration = "none";
  });
});

gsap.from(".contact-link", {
  scale: 0,
  delay:0.5 ,
  duration: 1.5,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".contact-link",
    // markers: true,
    start:'top 70%',
    end:'top 45%',
    scrub:2,
  },
});

gsap.from("#card-one img", {
        // opacity:0,
        y: "130%",
        // delay:3,
        duration: 2,
        scrollTrigger: {
          trigger: "#card-one",
          // markers:true,
          start: "-86% 60%",
          end: "-81% 60%",
          // start: "-270% 60%",
          // end: "-250% 60%",
          scrub:5,
        },
      });
      gsap.from("#card-one .left-cd1", {
        // opacity:0,
        y: "-125%",
        // delay:3,
        duration: 2,
        scrollTrigger: {
          trigger: "#card-one",
          // markers:true,
          start: "-86% 60%",
          end: "-81% 60%",
          scrub:5,
        },
      });
      gsap.from("#card-two img", {
        opacity: 0,
        y: "25",
        delay: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#card-two",
          // start: "-200% 70%",
          // end: "-160% 84%",
          start: "-230% 60%",
          end: "-220% 60%",
          // markers:true,
          scrub: 5,
        },
      });


// function handleViewportChange() {
//   if (window.innerWidth < 600) {
//     gsap.from("#card-one img", {
//       // opacity:0,
//       y: "130%",
//       // delay:1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#card-one img",
//         // markers:true,
//         start: "-950% 60%",
//         end: "-850% 60%",
//         // start: "-270% 60%",
//         // end: "-250% 60%",
//         scrub:5,
//       },
//     });
//     gsap.from("#card-one .left-cd1", {
//       // opacity:0,
//       y: "-115%",
//       // delay:1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#card-one img",
//         // markers:true,
//         // start: "-270% 60%",
//         // end: "-250% 60%",
//         start: "-910% 60%",
//         end: "-850% 60%",
//         scrub:5,
//       },
//     });
//     gsap.from("#card-two img", {
//       opacity: 0,
//       y: "25",
//       delay: 1,
//       duration: 1,
//       stagger: 0.3,
//       scrollTrigger: {
//         trigger: "#card-one img",
//         // start: "-200% 70%",
//         // end: "-160% 84%",
//         start: "-580% 70%",
//         end: "-520% 70%",
//         // markers:true,
//         scrub: 5,
//       },
//     });
//   }
//   else{
//     gsap.from("#card-one img", {
//       // opacity:0,
//       y: "130%",
//       // delay:1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#card-one img",
//         // markers:true,
//         // start: "-750% 60%",
//         // end: "-700% 60%",
//         start: "-270% 60%",
//         end: "-250% 60%",
//         scrub:5,
//       },
//     });
//     gsap.from("#card-one .left-cd1", {
//       // opacity:0,
//       y: "-110%",
//       // delay:1,
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#card-one img",
//         // markers:true,
//         start: "-270% 60%",
//         end: "-250% 60%",
//         // start: "-750% 60%",
//         // end: "-700% 60%",
//         scrub:5,
//       },
//     });
//     gsap.from("#card-two img", {
//       opacity: 0,
//       y: "25",
//       delay: 1,
//       duration: 1,
//       stagger: 0.3,
//       scrollTrigger: {
//         trigger: "#card-one img",
//         start: "-200% 70%",
//         end: "-160% 84%",
//         // start: "-500% 70%",
//         // end: "-420% 70%",
//         // markers:true,
//         scrub: 5,
//       },
//     });
//   }
// }

// // Attach the function to the resize event
// window.addEventListener('resize', handleViewportChange);

// // Call the function on page load
// handleViewportChange();