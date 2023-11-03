    /**********Page Loader***********/

    window.addEventListener("load", () => {
        document.querySelector(".main").classList.remove("hidden");
        
        document.querySelector(".home-section").classList.add("active"); 
        
        /**********Page Loader***********/

        document.querySelector(".page-loader").classList.add("fade-out");
        setTimeout(() => {
            document.querySelector(".page-loader").style.display = "none";
        }, 800);

    });

    /**********Custom Cursor***********/

    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a, .portfolio-item, .portfolio-item-2, .portfolio-item-3, .nav-toggler, .nav-logo, .tab-item, .accordion-panel, .pp-header, button');

    var storedX = localStorage.getItem('cursorX');
    var storedY = localStorage.getItem('cursorY');


    if (storedX && storedY) {
        cursor.style.transform = `translate3d(calc(${storedX}px - 50%), calc(${storedY}px - 50%), 0)`
    }

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function () {
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

    /**********Toggle Navbar***********/

    const navToggler = document.querySelector(".nav-toggler");
    navToggler.addEventListener("click", () => {
        hideSection();
        toggleNavbar();
        document.body.classList.toggle("hide-scrolling");
    });

    function hideSection() {
        document.querySelector("section.active").classList.toggle("fade-out");
        document.querySelector(".nav-logo-container").classList.toggle("fade-out");

    }

    function toggleNavbar() {
        document.querySelector(".header").classList.toggle("active");
    }

    /**********Active Section***********/

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("link-item") && e.target.hash !== "") {
            //activate the overlay to prevent multiple clicks
            document.querySelector(".overlay").classList.add("active");
            navToggler.classList.add("hide");
            if (e.target.classList.contains("nav-item")) {
                toggleNavbar();
            } else {
                hideSection();
                document.body.classList.add("hide-scrolling");
            }
            setTimeout(() => {
                document.querySelector("section.active").classList.remove("active", "fade-out");
                document.querySelector(".nav-logo-container").classList.remove("fade-out");
                document.querySelector(e.target.hash).classList.add("active");

                /**********Gsap Section Animations***********/
                const gsapConfig = {
                    opacity: 0,
                    ease: "power4.out",
                };

                /**********Gsap Header Section Animations***********/

                const headerElements = document.querySelectorAll(".home-text, .header-sci, .circle-container, .glass-ball, .bg-pictures");

                headerElements.forEach((element, index) => {
                    gsap.from(element, {
                        ...gsapConfig,
                        delay: index * 0.3 + 0.6,
                        x: element.classList.contains("bg-pictures") ? 1 : (element.classList.contains("circle-container") ? 1 : 0),
                        y: element.classList.contains("home-text") ? 50 : (element.classList.contains("header-sci") ? -800 : 0),
                        x: element.classList.contains("glass-ball") ? 20 : 0,
                    });
                });

                /**********Gsap About Section Animations***********/

                const aboutElements = document.querySelectorAll(".section-title, .about-left, .about-text");

                aboutElements.forEach((element, index) => {
                    gsap.from(element, {
                        ...gsapConfig,
                        delay: index * 0.5 + 0.8,
                        y: element.classList.contains("section-title") ? -100 : 0,
                        x: element.classList.contains("about-left") ? -20 : (element.classList.contains("about-text") ? 20 : 0),
                    });
                });

                /**********Gsap Services Section Animations***********/

                const servicesElements = document.querySelectorAll(".services-section-title, .my-services-box, .container-cards, .services-card-container");

                servicesElements.forEach((element, index) => {
                    gsap.from(element, {
                        ...gsapConfig,
                        delay: index * 0.6 + 0.9,
                        y: element.classList.contains("services-section-title") ? -50 : (element.classList.contains("services-card-container") ? 30 : 0),
                        x: element.classList.contains("my-services-box") ? -30 : (element.classList.contains("container-cards") ? 30 : 0),
                    });
                });

                /**********Gsap Process Section Animations***********/

                const processElements = document.querySelectorAll(".first-article, .second-article, .third-article, .process-section-title");

                processElements.forEach((element, index) => {
                    gsap.from(element, {
                        ...gsapConfig,
                        delay: index * 0.6 + 0.9,
                        y: element.classList.contains("process-section-title") ? -50 : 0,
                        x: element.classList.contains("first-article") ? -120 : (element.classList.contains("second-article") ? 120 : 0),
                        x: element.classList.contains("third-article") ? -120 : 0,
                    });
                });

                /**********Gsap Projects Section Animations***********/

                const projectElements = document.querySelectorAll(".portfolio-section-title, .portfolio-column");

                projectElements.forEach((element, index) => {
                    gsap.from(element, {
                        ...gsapConfig,
                        delay: index * 0.6 + 0.9,
                        y: element.classList.contains("portfolio-section-title") ? -50 : 0,
                        x: element.classList.contains("portfolio-column") ? 50 : 0,
                    });
                });


                /**********Gsap Contact Section Animations***********/

                const contactElements = document.querySelectorAll(".contact-section-title, .contact-form, .card-credit");

                contactElements.forEach((element, index) => {
                    gsap.from(element, {
                        ...gsapConfig,
                        delay: index * 0.5 + 0.9,
                        y: element.classList.contains("contact-section-title") ? -20 : 0,
                        x: element.classList.contains("contact-form") ? -20 : (element.classList.contains("card-credit") ? 20 : 0),
                    });
                });

                window.scrollTo(0, 0);
                document.body.classList.remove("hide-scrolling");
                navToggler.classList.remove("hide");
                document.querySelector(".overlay").classList.remove("active");
            }, 500);
        }

    });

    /**********Header Multi-Text***********/

    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Developer', 'UI/UX Designer', 'Video Editor', 'Photo Editor'],
        typeSpeed: 100,
        backSpeed: 100,
        bacKDelay: 1000,
        loop: true
    });

    /**********About Tabs***********/

    const tabsContainer = document.querySelector(".about-tabs"),
        aboutSection = document.querySelector(".about-section");

    tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
            tabsContainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const target = e.target.getAttribute("data-target");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
            let portfolioItem;
            const classesToCheck = ["portfolio-item", "portfolio-item-2", "portfolio-item-3"];

            for (const className of classesToCheck) {
                portfolioItem = e.target.closest("." + className);
                if (portfolioItem) {
                    break;
                }
            }

            if (portfolioItem) {
                togglePortfolioPopup();
                document.querySelector(".portfolio-popup").scrollTo(0, 0);
                portfolioItemDetails(portfolioItem);
            }
        }
    });

    function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.body.classList.toggle("hide-scrolling");
        document.querySelector(".main").classList.toggle("fade-out");
    }

    document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

    function portfolioItemDetails(portfolioItem) {
        const portHeader = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
        const description = portfolioItem.querySelector(".description").innerHTML;
        const generalInfo = portfolioItem.querySelector(".general-info").innerHTML;
        const imageSrc = portfolioItem.querySelector(".new-port-image img").src;

        document.querySelector(".pp-thumbnail img").src = imageSrc;

        const ppBody = document.querySelector(".pp-body");
        ppBody.innerHTML = "";
        ppBody.insertAdjacentHTML("beforeend", portHeader);
        ppBody.insertAdjacentHTML("beforeend", description);
        ppBody.insertAdjacentHTML("beforeend", generalInfo);
    }

    /**********accordion***********/

    const accordion = document.querySelector(".accordion");

    accordion.addEventListener("click", (e) => {
        const activePanel = e.target.closest(".accordion-panel");
        if (!activePanel) return;
        toggleAccordion(activePanel);
    });

    function toggleAccordion(panelToActivate) {
        const activeButton = panelToActivate.querySelector("button");
        const activePanel = panelToActivate.querySelector(".accordion-content");
        const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

        if (activePanelIsOpened === "true") {
            panelToActivate
                .querySelector("button")
                .setAttribute("aria-expanded", false);

            panelToActivate
                .querySelector(".accordion-content")
                .setAttribute("aria-hidden", true);
        } else {
            panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

            panelToActivate
                .querySelector(".accordion-content")
                .setAttribute("aria-hidden", false);
        }
    }


    const contactForm = document.querySelector("#form-contact");
    const submitBtn = document.querySelector(".submit-btn");
    const nameInput = document.querySelector("#user_name");
    const emailInput = document.querySelector("#user_email");
    const subjectInput = document.querySelector("#user_subject");
    const messageInput = document.querySelector("#message");
    const successModal = document.getElementById("success-modal");
    const closeSuccessModalBtn = document.getElementById("close-modal-btn");

    const publicKey = "BhBC-9FlRoHKVXjwy";
    const serviceID = "service_nkf1jp7";
    const templateID = "template_nw7u16r";

    emailjs.init(publicKey);

    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        submitBtn.innerHTML = "Just a Moment...";

        const inputFields = {
            to_name: nameInput.value,
            user_name: nameInput.value,
            user_email: emailInput.value,
            user_subject: subjectInput.value,
            message: messageInput.value,
        }

        emailjs.send(serviceID, templateID, inputFields)
            .then(() => {
                // Show the success modal
                successModal.style.display = "block";
                nameInput.value = "";
                emailInput.value = "";
                subjectInput.value = "";
                messageInput.value = "";
            }, (error) => {
                console.log(error);
                submitBtn.innerHTML = "Something went wrong";
            });
    });

    closeSuccessModalBtn.addEventListener("click", () => {
        successModal.style.display = "none";
        submitBtn.innerHTML = "Send Message";
    });



    TweenMax.from(".phone", 1, {
        opacity: 0,
        delay: 1,
        y: 1,
        ease: Expo.easeInOut
    })

    TweenMax.from(".lappy", 1, {
        opacity: 0,
        delay: 1,
        y: 1,
        ease: Expo.easeInOut
    })

    TweenMax.from(".tea", 1, {
        opacity: 0,
        delay: 1,
        y: -1,
        ease: Expo.easeInOut
    })

    TweenMax.from(".home-text", 1, {
        opacity: 0,
        delay: 0.5,
        y: 50,
        ease: Expo.easeInOut
    })


    TweenMax.from(".circle-container", 1, {
        opacity: 0,
        delay: 1,
        y: 1,
        ease: Expo.easeInOut
    })

    TweenMax.from(".header-sci", 1, {
        opacity: 0,
        delay: 1,
        y: -800,
        ease: Expo.easeInOut
    })

    TweenMax.from(".glass-ball", 1, {
        opacity: 0,
        delay: 1,
        x: 20,
        ease: Expo.easeInOut
    })

    gsap.fromTo(
        "index", {
            opacity: 1
        }, {
            opacity: 0,
            display: "none",
            duration: 0.5,
            delay: 1.2,
            onComplete: showCursor2,
        }
    );

    function showCursor2() {
        const cursor = document.querySelector('.cursor2');
        cursor.style.opacity = 1;
    }