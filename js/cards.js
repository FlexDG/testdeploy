/**********card tilt hover effect***********/

VanillaTilt.init(document.querySelectorAll(".card-bottom, .card, .card-credit, .services-card"), {
    max: 25,
    speed: 1000
});


/**********card glass hover animation***********/
document.onmousemove = e => {
    const elements = document.querySelectorAll(".card, .card-bottom, .my-services-box, .glass-card, .left, .card-credit, .services-card");

    for (const element of elements) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);
    }
};