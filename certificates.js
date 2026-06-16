// Scroll Reveal

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}

);

document
.querySelectorAll(".certificate-card")
.forEach((card)=>{

    card.classList.add("hidden");

    observer.observe(card);

});

// Vanta Background

window.addEventListener("load",()=>{

    if(typeof VANTA !== "undefined"){

        VANTA.NET({

            el:"#particles-js",

            mouseControls:true,
            touchControls:true,
            gyroControls:false,

            minHeight:200,
            minWidth:200,

            scale:1,
            scaleMobile:1,

            color:0x8b5cf6,

            backgroundColor:0x05010d,

            points:14,

            maxDistance:22,

            spacing:18

        });

    }

});