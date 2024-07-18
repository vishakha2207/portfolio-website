
// document.querySelectorAll(".reveal")
//     .forEach(function (elem){
//         //create two spans 
//         // set content of spans
        
        
//         let parent = document.createElement("span");
//         let child = document.createElement("span");
//         //Prent and child both set their resoective classses
//         parent.classList.add("parent");
//         child.classList.add("child");
//         //output:- <span class ="parent"></spam>"
//         // span parent get child and child gets the elem details


//         child.textContent = elem.textContent;
//         parent.appendChild(spanChild);

//         //elem replaces its value with parent span
//         elem.innerHTML = "";
//         elem.appendChild(parent);
//     });

//     // It creates this type of structure...->
//     // <h1 class="reveal"><span class="parent"><span class="child">World</span></span></h1>
//     // from wherever h1 and class reveal created all effects will automatically aaplied..



function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function (elem){
        //create two spans 
        // set content of spans
        
        
        let parent = document.createElement("span");
        let child = document.createElement("span");
        //Prent and child both set their resoective classses
        parent.classList.add("parent");
        child.classList.add("child");
        //output:- <span class ="parent"></spam>"
        // span parent get child and child gets the elem details


        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        //elem replaces its value with parent span
        elem.innerHTML = "";
        elem.appendChild(parent);
    });
}


function loaderAnimation(){
var tl = gsap.timeline();

tl
    .from("#loader .child span", {
        x:200,
        stagger:.2,
        delay:1,
        duration:1,
        ease:Power3.easeInOut,
    })
    .to("#loader .parent .child",{
        y:"-105%",
        duration:1,
        delay:0.2,
        ease:Circ.easeInOut,
    })
    .to("#loader",{
        height:0,
        duration:2,
        delay:0.5,
        ease: Expo.easeInOut,
    })
    .to("#green",{
        delay: 0 ,
        y:100,
        height:"50%",
        // duration:0.2,
        top:100,
        ease: Circ.easeInOut,
        onComplete: function(){
            animationHomepage();
        }
    })
}

function animationHomepage(){
    gsap.set("#nav",{y:"-100%",opacity:1});
    gsap.set("#home span .child", {y:"100%"})

    var tl = gsap.timeline();

    tl.to("#nav a",{
        // delay:0.2,
        // y:10,
        
        // duration:1.5,
        // // opacity:1 ,
        // // stagger: .05,
        // ease: Expo.easeInOut
        y:"105%",
        duration:1,
        delay:0.2,
        ease:Circ.easeInOut,
    })
   .to("#home .parent .child",{
    y:0,
    // delay:0.2,
    stagger:.1,
    duration:1.5,
    ease :Circ.easeInOut,
   }) 

 }


 function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el:document.querySelector('#main'),
        smooth:true
    });
 }


revealToSpan();
loaderAnimation();
locoInitialize();
// animationHomepage();