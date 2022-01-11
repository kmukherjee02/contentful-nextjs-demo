import { gsap } from "gsap";

let homeAnimation = gsap.timeline({ defaults: { ease:"back" } });

export function initHomeAnimation() {
    //gsap.set(".splash-stage, .splash-title, .splash-description, .splash-buttons", { autoAlpha: 1 });
    gsap.set("[class^=splash-]", { autoAlpha: 1});
    homeAnimation.from(".splash-title",
        {
            opacity: 0,
            duration: 0.8,
            x:200,
        }
    )
        .from(".splash-description", { opacity: 0, duration: 0.8, x:200 }, "<")
        .from(".splash-buttons a", { opacity: 0, duration: 0.4, scale: 0.5, stagger: 0.2 }, "-=0.4")
        .from(".splash-image", {opacity: 0, duration: 1, scale: 0.5, transformOrigin: "50% 50%"}, "-=0.4");
    ;
}

// animation has everything coming in from scale:0 instead of sliding in from the side
// export function initHomeAnimation() {
//     gsap.set(".splash-stage, .splash-title, .splash-description, .splash-buttons", { autoAlpha: 1 });
//     homeAnimation.from(".splash-title",
//         {
//             opacity: 0,
//             duration: 0.8,
//             scale: 0,
//             transformOrigin: "50% 50%",
//             ease: "back"
//         }
//     )
//         .from(".splash-description", { opacity: 0, duration: 0.8, scale: 0.5, ease: "back" }, "-=0.4")
//         .from(".splash-buttons a", { opacity: 0, duration: 0.4, scale: 0.5, ease: "back", stagger: 0.2 }, "-=0.4")
//         .from(".splash-image", { opacity: 0, duration: 1, scale: 0.25, transformOrigin: "50% 50%", ease: "back" }, "-=0.4");
//     ;
// }
