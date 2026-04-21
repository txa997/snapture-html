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



})(jQuery);