function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;

      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 33);
    },
  });
  tl.to(" .line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 0,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.6,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 140,
    stagger: 0.3,
  });
}


var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

loadingAnimation();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp:0.05,
});

function marqueeAnimation() {
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marquee", {
        transform: "translateX(-200%)",
        duration: 5,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marquee img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marquee", {
        transform: "translateX(0%)",
        duration: 5,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marquee img", {
        rotate: 0,
      });
    }
  });
}

var rightElem = document.querySelectorAll(".right-elem");

rightElem.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to(elem.childNodes[3], {
      opacity: 1,
      scale: 1,
      ease: "back.out",
    });
    // console.log(elem.childNodes[3])
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.childNodes[3], {
      opacity: 0,
      scale: 0,
      delay: 1,
      ease: "back.in",
    });
    // console.log("not child")
  });

  elem.addEventListener("mousemove", function (dets) {
    gsap.to(elem.childNodes[3], {
      x: dets.x - elem.getBoundingClientRect().x - 90,
      y: dets.y - elem.getBoundingClientRect().y - 215,
    });
  });
});

const videoContainer = document.querySelector("#video-container-center");
const video = document.querySelector(".clip");
const playButton = document.querySelector(".icon");

playButton.addEventListener("click", () => {
  video.play();
  playButton.style.display = "none";
  gsap.to(video, {
    transform: "scaleX(1) scaleY(1)",
    opacity: 1,
    borderRadius: 0,
  });
});

video.addEventListener("click", () => {
  video.pause();
  gsap.to(video, {
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius: "30px",
  });
  video.play();
  playButton.style.display = "block";
  gsap.to(video, {
    transform: "scaleX(0) scaleY(0)",
    opacity: 0,
    borderRadius: 0,
  });
});
