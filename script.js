var page=gsap.timeline();

page.from("#nav h2",{
     y:"-100vw",
     duration:2,
     opacity:0,
     stagger:1,
     
})

page.from(".image1 img",{
    rotate:45,
    duration:1,
    opacity:0,
    stagger:1

})
page.from("#text h1",{
    x:"-100vw",
    duration:2,
   opacity:"0.6vw",

})
page.from("#text h2",{
    x:"-100vw",
    duration:2,
    opacity:"0.6vw",
})
page.from("#text h3",{
    x:"-100vw",
    duration:2,
    opacity:"0.6vw",
})
