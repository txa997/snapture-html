/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";



/* 
	windows-load-function
*/


window.addEventListener('load', function(){
	if (document.querySelectorAll(".st-preloader").length) {
		const loader = document.querySelector(".st-preloader");
		
		setTimeout(() => {
			loader.classList.add("loaded");
			afterPreloader();
		});
		setTimeout(function () {
			loader.remove();
		}, 1500);

	} else {
		afterPreloader();
	}
	afterPageLoad();
})


/* 
	after-preloader-start
*/
function afterPreloader() {

	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {
		// title-animation
		function wa_split_text() {

			var wa_st = $(".wa-split-text");
			if (wa_st.length === 0) return;

			gsap.registerPlugin(SplitText, ScrollTrigger);

			wa_st.each(function (index, wa_el) {

				var wa_els = wa_el;

				const wa_split = new SplitText(wa_els, {
					type: "lines, words, chars",
					lineThreshold: 0.5,
					linesClass: "split-line",
				});

				var split_type_set = wa_split.chars;

				gsap.set(wa_els, { perspective: 400 });

				var settings = {
					scrollTrigger: {
						trigger: wa_els,
						toggleActions: "play none none none",
						start: "top 86%",
						once: true,
						markers: false,
					},
					duration: 0.35,
					stagger: 0.02,
					ease: "expo.out",
				};

				if ($(wa_el).hasClass("split-in-fade")) {
					settings.opacity = 0;
				}
				if ($(wa_el).hasClass("split-in-right")) {
					settings.opacity = 0;
					settings.x = 50;
				}
				if ($(wa_el).hasClass("split-in-left")) {
					settings.opacity = 0;
					settings.x = -50;
				}
				if ($(wa_el).hasClass("split-in-up")) {
					settings.opacity = 0;
					settings.y = 80;
				}
				if ($(wa_el).hasClass("split-in-down")) {
					settings.opacity = 0;
					settings.y = -80;
				}
				if ($(wa_el).hasClass("split-in-rotate")) {
					settings.opacity = 0;
					settings.rotateX = 50;
				}
				if ($(wa_el).hasClass("split-in-scale")) {
					settings.opacity = 0;
					settings.scale = 0.5;
				}

				if ($(wa_el).hasClass("split-line-up")) {

					wa_split.split({ type: "words" });
					split_type_set = wa_split.words;

					$(split_type_set).each(function (i, elw) {
						gsap.from(elw, {
							autoAlpha: 0,
							duration: 1,
							transform: "rotateX(80deg) translateY(80px)",
							delay: 0.25 + i * 0.065,
							ease: "expo.out",
							transformOrigin: "center bottom",
							scrollTrigger: {
								trigger: wa_el,
								start: "top 86%",
								toggleActions: "play none none none",
							},
						});
					});

				}

				if ($(wa_el).hasClass("split-up")) {

					wa_split.split({ type: "words" });
					split_type_set = wa_split.words;

					$(split_type_set).each(function (i, elw) {
						gsap.from(elw, {
							opacity: 0,
							duration: 0.65,
							y: 40,
							rotate: 10,
							transformOrigin: "bottom right",
							filter: "blur(5px)",
							delay: 0.25 + i * 0.065,
							ease: "expo.out",
							scrollTrigger: {
								trigger: wa_el,
								start: "top 86%",
								toggleActions: "play none none none",
							},
						});
					});

				}
				else if ($(wa_el).hasClass("split-words-scale")) {
					let atDelay = parseFloat(wa_el.getAttribute("data-delay")) || 0;

					wa_split.split({ type: "words" });
					split_type_set = wa_split.words;

					gsap.set(split_type_set, {
						opacity: 0,
						scale: (i) => (i % 2 === 0 ? 0 : 2),
						force3D: true,
					});

					gsap.to(split_type_set, {
						scrollTrigger: {
							trigger: wa_el,
							toggleActions: "play reverse play reverse",
							start: "top 86%",
						},
						rotateX: 0,
						scale: 1,
						opacity: 1,
						stagger: 0.03,
						delay: atDelay,
					});

				}
				else {
					var wa_anim = gsap.from(split_type_set, settings);

					if ($(wa_el).hasClass("hover-split-text")) {
						$(wa_el).on("mouseenter", function () {
							wa_anim.restart();
						});
					}
				}

			});
		}
		wa_split_text();

		/* 
			hero-4-title-animation
		*/
		if($(".wa-split-up-1").length) {
			var wa_split_up_1 = $(".wa-split-up-1");
			if(wa_split_up_1.length == 0) return; gsap.registerPlugin(SplitText); wa_split_up_1.each(function(index, el) {

				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line",
				});

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if( $(el).hasClass('wa-split-up-1') ){
					gsap.set(el.split.chars, {
						scaleY: 1.5, 
						rotate: 10,
						opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						toggleActions: 'play none none reverse',
					},
					opacity: 1,
					scaleY: 1, 
					rotate: 0,
					duration: .6,
					ease: "expo.out",
					stagger: -0.08,
					delay: delayValue, 
				});

			});
		}


		// home-3-title-animation
		document.querySelectorAll(".wa_title_spilt_1").forEach((atEl) => {
			const atSplit = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || .7;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}

			gsap.set(atSplit.words, {
				willChange: "transform",
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.set(atSplit.chars, {
				willChange: "transform",
				opacity: 0,
				x: 30,
				rotateZ: -45,
				rotateY: -90,
				transformOrigin: "center center -10px"
			});

			gsap.set(atEl, {
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.to(atSplit.chars, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 86%",
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				x: 0,
				rotateZ: 0,
				rotateY: 0,
				duration: atDuration,
				delay: atDelay,
				ease: "ease1",
				// stagger: .03,
				stagger: {
					each: 0.03,
					from: "left",
					grid: "auto",
				},
			});
		});
		
		
	}	



	// hero-1-gallery-slider
	if ($('.st_h1_gallery_slider').length) {
		let st_h1_gallery_slider = new Swiper('.st_h1_gallery_slider', {
			loop: true,
			spaceBetween: 25,
			speed: 1000,

			autoplay: { delay: 6000 },


			centeredSlides: true,
			roundLengths: true,


			breakpoints: {
				320: {
				  slidesPerView: 1,
				},
				576: {
				  slidesPerView: 2,
				},
				768: {
				  slidesPerView: 3,
				},
				992: {
				  slidesPerView: 3,
				},
				1200: {
				  slidesPerView: 4,
				},
				1400: {
				  slidesPerView: 5,
				},
				1600: {
				  slidesPerView: 6,
				},
				1800: {
				  slidesPerView: 7,
				},
			},

		});
	
	}
		

	// hero-1-tl-1
	let hero1tl1 = gsap.timeline()
	hero1tl1.from(".xr-hero-1-img", {
		y: 50,
		autoAlpha: 0,
		duration: 1,
		ease: "expo.out",
		delay: 1,
	})



	
/* 
	after-preloader-end
*/
}


/* 
	after-page-load-start
*/
function afterPageLoad() {

	


/* 
	after-page-load-start
*/
}


// button-animation
if ($(".wa_btn_split_1").length) {
	var wa_btn_split_1 = $(".wa_btn_split_1");
	gsap.registerPlugin(SplitText);

	wa_btn_split_1.each(function (index, el) {
		el.split = new SplitText(el, {
			type: "words,chars",
		});

		$(el).on("mouseenter", function () {
			el.split.chars.forEach((char, i) => {

				gsap.fromTo(
					char,
					{ x: 15, opacity: 0, },
					{
						x: 0,
						opacity: 1,
						duration: 0.6,
						ease: "power1.out",
						delay: i * 0.07
					}
				);
			});
		});
	});
}


// projects-1-slider
if ($('.st_p1_slider').length) {
	let st_p1_slider = new Swiper('.st_p1_slider', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,

		// autoplay: { delay: 6000 },


		// centeredSlides: true,
		// roundLengths: true,


		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 0,
			stretch: 110,
			depth: 150,
			modifier: 1.1,
			slideShadows: false,
		},

		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 	},
		// 	576: {
		// 		slidesPerView: 2,
		// 	},
		// 	768: {
		// 		slidesPerView: 3,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 	},
		// 	1200: {
		// 		slidesPerView: 4,
		// 	},
		// 	1400: {
		// 		slidesPerView: 3,
		// 	},
		// },

	});

}
		
// expertise-1-img-cursor-follow
if($(".st-expertise-1-item").length) {
	const featureItems = document.querySelectorAll(".st-expertise-1-item");

	featureItems.forEach((featureItem) => {
		const flair = featureItem.querySelector(".cursor-follow");
	
		gsap.set(flair, { scale: 0, opacity: 0, xPercent: -50, yPercent: -80, rotate: 0, });
	
		featureItem.addEventListener("mouseenter", () => {
			gsap.to(flair, { scale: 1, opacity: 1, duration: 0.4, rotate: 14, ease: "power3.out" });
		});


		featureItem.addEventListener("mousemove", (e) => {
			const rect = featureItem.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			gsap.to(flair, { x, y, duration: 0.1 });
		});
	
		featureItem.addEventListener("mouseleave", () => {
			gsap.to(flair, { scale: 0, opacity: 0, rotate: 0, duration: 0.4, ease: "power3.in" });
		});
	});
	
}

// services-1
if($(".st-services-1-area").length) {

	const section = document.querySelector(".st-services-1-area");
	const prevImgs = gsap.utils.toArray(".st-services-1-item-prev-img-single");
	const mainImgs = gsap.utils.toArray(".st-services-1-item-main-img .st-services-1-item-main-img-single");
	const nextImgs = gsap.utils.toArray(".st-services-1-item-next-img .st-services-1-item-main-img-single");
	const numbers = gsap.utils.toArray(".st-services-1-item-number .number-single");
	const subtitles = gsap.utils.toArray(".st-services-1-item-subtitle .subtitle-elm");
	const contents = gsap.utils.toArray(".st-services-1-item-content-box");

	let currentIndex = 0;
	let total = prevImgs.length;
	let isAnimating = false;


	gsap.set(prevImgs, { xPercent: 100 });
	gsap.set(mainImgs, { xPercent: 105 });
	gsap.set(nextImgs, { xPercent: 105 });
	gsap.set(numbers, { y: 120 });

	gsap.set([prevImgs[0], mainImgs[0], nextImgs[0]], { xPercent: 0 });
	gsap.set(numbers[0], { y: 0 });


	ScrollTrigger.create({
	trigger: section,
	start: "top top",
	pin: ".st-services-1-pin",
	anticipatePin: 1
	});


	function goToSlide(newIndex) {

	if (isAnimating) return;
	if (newIndex < 0 || newIndex >= total) return;

	isAnimating = true;

	const tl = gsap.timeline({
		defaults: { duration: 0.8, ease: "power1.inOut" },
		onComplete: () => {
		currentIndex = newIndex;
		isAnimating = false;
		}
	});

	let out = currentIndex;
	let next = newIndex;

	tl.to(prevImgs[out], { xPercent: -100 }, 0)
		.to(mainImgs[out], { xPercent: -105 , yPercent: -105 }, 0)
		.to(nextImgs[out], { xPercent: -105 , yPercent: -105 }, 0)
		.to(numbers[out], { y: -120 }, 0)

		.fromTo(prevImgs[next], { xPercent: 100 }, { xPercent: 0 }, 0)
		.fromTo(mainImgs[next], { xPercent: 105 , yPercent: 105 }, { xPercent: 0 , yPercent: 0 }, 0)
		.fromTo(nextImgs[next], { xPercent: 105 , yPercent: 105 }, { xPercent: 0 , yPercent: 0 }, 0)
		.fromTo(numbers[next], { y: 120 }, { y: 0 }, 0);

		subtitles.forEach(el => el.classList.remove("active"));
		contents.forEach(el => el.classList.remove("active"));

		subtitles[next].classList.add("active");
		contents[next].classList.add("active");
	}


	let observer;

	ScrollTrigger.create({
	trigger: section,
	start: "top top",
	end: "bottom bottom",

	onEnter: () => enableObserver(),
	onEnterBack: () => enableObserver(),
	onLeave: () => disableObserver(),
	onLeaveBack: () => disableObserver(),
	});

	function enableObserver() {

	observer = Observer.create({
		type: "wheel,touch,pointer",
		wheelSpeed: 1,
		tolerance: 10,

		onDown: () => {
		if (currentIndex < total - 1) {
			goToSlide(currentIndex + 1);
		}
		},

		onUp: () => {
		if (currentIndex > 0) {
			goToSlide(currentIndex - 1);
		}
		}
	});
	}

	function disableObserver() {
	if (observer) observer.kill();
	}


}

// gallery-1-slider
const st_g1_slider = new Swiper(".st_g1_slider", {
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 25,

	freeMode: {
		enabled: true,
		momentum: true,
		sticky: false,
	},

	mousewheel: {
		enabled: true,
		forceToAxis: true,
		sensitivity: 1,
		releaseOnEdges: true,
	},

});

const swiperEl = document.querySelector(".st_g1_slider");

if (swiperEl) {
	swiperEl.addEventListener("wheel", function (e) {
		e.preventDefault();

		if (e.deltaY > 0) {
			st_g1_slider.slideNext();
		} else {
			st_g1_slider.slidePrev();
		}
	}, { passive: false });
}



// footer-1-dot-animation
const paths = document.querySelectorAll('.f1_dot_ani path');

	paths.forEach((path) => {
		function animatePath() {
				gsap.to(path, {
				opacity: Math.random() > 0.5 ? 1 : 0,
				duration: Math.random() * 0.6 + 0.2, 
				delay: Math.random() * 0.2, 
				onComplete: animatePath, 
				ease: "power1.inOut"
			});
	}
  	animatePath(); 
});






let mouse = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animate() {
    document.querySelectorAll(".st-bg-border-line").forEach(line => {
        const rect = line.getBoundingClientRect();

        const x = mouse.x - rect.left;
        const y = mouse.y - rect.top;

        line.style.setProperty("--x", x + "px");
        line.style.setProperty("--y", y + "px");
    });

    requestAnimationFrame(animate);
}

animate();




if ($(".st-hero-1-area").length) {

    const items = document.querySelectorAll(".st-hero-1-area");

    items.forEach((item) => {
        const flair = item.querySelector(".st-hero-1-bg-sun");

        // initial state
        gsap.set(flair, {
            scale: 0,
            opacity: 0,
            xPercent: -50,
            yPercent: -80,
            rotate: 0
        });

        // mouse enter
        item.addEventListener("mouseenter", () => {
            gsap.to(flair, {
                scale: 1,
                opacity: 1,
                rotate: 14,
                duration: 0.4,
                ease: "power3.out"
            });
        });

        // mouse move (optimized)
        item.addEventListener("mousemove", (e) => {
            const rect = item.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(flair, {
                x: x,
                y: y,
                duration: 0.12,
                ease: "power3.out",
                overwrite: "auto"
            });
        });

        // mouse leave
        item.addEventListener("mouseleave", () => {
            gsap.to(flair, {
                scale: 0,
                opacity: 0,
                rotate: 0,
                duration: 0.4,
                ease: "power3.in"
            });
        });
    });
}

})(jQuery);