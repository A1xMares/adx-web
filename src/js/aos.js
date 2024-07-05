import AOS from "aos";

export function aosInit() {
    AOS.init({ duration: 300, easing: "ease-in-out-sine", once: true, offset: 10 });

}