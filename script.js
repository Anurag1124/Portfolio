function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
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
        }, 20);
      },
    });
    tl.to(".line h2", {
      animationName: "loaderAnime",
      opacity: 1,
    });
    tl.to("#loader", {
      opacity: 0,
      duration: 0.2,
      delay: 1.3,
    });
    tl.from("#page1", {
      delay: 0.1,
      y: 1600,
      duration: 0.5,
      ease: Power4,
    });
    tl.to("#loader", {
      display: "none",
    });
    tl.from(".elems", {
      opacity: 0,
      delay: 0.1,
      y: 1600,
      duration: 0.5,
      ease: Power4,
      stagger: 0.3
    });
    tl.from(
      "#hero, #page2",
      {
        opacity: 0,
      },
      "-=1.2"
    );
  }
  function cursorAnimation() {
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    Shery.makeMagnet(".hero-content a,#nav-part2 h2,#lets-connect a");
  
    // var videoContainer = document.querySelector("#video-container");
    // var video = document.querySelector("#video-container video")
    // videoContainer.addEventListener("mouseenter", function () {
    //   videoContainer.addEventListener("mousemove", function (dets) {
    //     gsap.to(".mousefollower", {
    //       opacity: 0
    //     });
    //     gsap.to("#video-cursor", {
    //       left: dets.x - 570,
    //       y: dets.y - 300,
    //     });
    //   });
    // });
    // videoContainer.addEventListener("mouseleave", function () {
    //   gsap.to(".mousefollower", {
    //     opacity: 1
  
    //   });
    //   gsap.to("#video-cursor", {
    //     left: "70%",
    //     top: "-15%",
    //   });
    // });
  
  
  
    // var flag = 0
    // videoContainer.addEventListener("click", function () {
    //   if (flag == 0) {
    //     video.play()
    //     video.style.opacity = 1
    //     document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
    //     gsap.to("#video-cursor", {
    //       scale: 0.5
    //     })
    //     flag = 1
    //   } else {
    //     video.pause()
    //     video.style.opacity = 0
    //     document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
    //     gsap.to("#video-cursor", {
    //       scale: 1
    //     })
    //     flag = 0
    //   }
    // })
  }
  function sheryAnimation(){
    Shery.imageEffect(".square-in",{
        style:5,
        gooey:true,
        config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":0.95,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8354107648725212},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.15,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    })

    Shery.imageMasker("#lets-connect h1" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "With Anurag",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
  function video(){
    Shery.imageEffect("#project-in img", {
      style: 5,
      slideStyle: (setScroll) => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY / innerHeight); //Updating the scroll
        });
      },
    });
  }
  function footerAnimation() {
      var h1 = document.querySelector("#history h1");
      var h2 = document.querySelector("history h2");
      var content = h1.textContent;
      var splitted = content.split("");
      console.log(splitted);
      // var content2 = h2.textContent;
      // var splitted2 = content2.split("");
      // console.log(splitted2);
      var cluster = "";
      splitted.forEach(function(elem){
        cluster += `<span>${elem}</span>`
      })
      document.querySelector("#history h1").innerHTML = cluster

      document.querySelector("#history h1").addEventListener("mouseenter", function () {
      gsap.to("#history h1 span", {
        webkitTextStroke: "2px black",
        color:"transparent",
        stagger: 0.1,
        duration:0.5,
        scrub:true,
        fontStyle: "italic",
        textShadow:"none"
      })
    })
    document.querySelector("#history h1").addEventListener("mouseleave", function () {
      gsap.to("#history h1 span", {
        opacity: 1,
        color:"black",
        webkitTextStroke: "0px black",
        stagger: 0.1,
        delay: 0.35,
        fontStyle:"normal",
        textShadow: "2px 2px 4px #000, -1px -1px 2px rgba(255, 255, 255, 0.5)"
      })
    })
  }
  footerAnimation();
  video();
  locomotiveAnimation();
  loadingAnimation();
  cursorAnimation();
  sheryAnimation();