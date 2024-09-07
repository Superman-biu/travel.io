const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

// about container
  ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
  ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

// discover container
ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    setInterval: 500,
  });
  
  ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    setInterval: 500,
    delay: 200,
  });

// blogs container
ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    delay: 200,
    interval: 500,
    origin: "top",
    distance: "50px",
    reset: true,
    scale: 0.9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    viewFactor: 0.5,    
  });
// journal container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOption,
  interval: 400,
});