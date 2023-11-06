import React, {useState, useEffect, useRef} from "react";
import {
	istockPhoto1,
	istockPhoto2,
	istockPhoto3,
	istockPhoto4,
	Img,
	Carousel,
} from "../exports";

const Hero = () => {
	const slides = [istockPhoto1, istockPhoto2, istockPhoto3, istockPhoto4];
	const [currSlide, setCurrSlide] = useState(0);
	const slideRef = useRef();
	const startAutomaticSlideshow = () => {
		slideRef.current = setInterval(() => {
			handleNextClick();
		}, 2000);
	};

	useEffect(() => {
		setInterval(() => {
			startAutomaticSlideshow();
		}, 3000);
		return () => {
			clearInterval(slideRef.current); // Clear the interval when the component unmounts
		};
	}, []);

	const handleNextClick = () => {
		if (slideRef.current) {
			slideRef.current.classList.remove("fade-anim");
		}

		if (currSlide === slides.length - 1) {
			setCurrSlide(0);
		} else {
			setCurrSlide(currSlide + 1);
		}

		// Add the class after a delay to trigger the animation
		if (slideRef.current) {
			setTimeout(() => {
				slideRef.current.classList.add("fade-anim");
			}, 100);
		}
	};

	const handlePrevClick = () => {
		if (slideRef.current) {
			slideRef.current.classList.remove("fade-anim");
		}

		if (currSlide === 0) {
			setCurrSlide(slides.length - 1);
		} else {
			setCurrSlide(currSlide - 1);
		}

		// Add the class after a delay to trigger the animation
		if (slideRef.current) {
			setTimeout(() => {
				slideRef.current.classList.add("fade-anim");
			}, 100);
		}
	};

	const handleManualNavigation = (index) => {
		if (index !== currSlide) {
			if (slideRef.current) {
				slideRef.current.classList.remove("fade-anim");
			}

			setCurrSlide(index);

			// Add the class after a delay to trigger the animation
			if (slideRef.current) {
				setTimeout(() => {
					slideRef.current.classList.add("fade-anim");
				}, 100);
			}

			clearInterval(slideRef.current); // Stop automatic slideshow when manually navigating
			startAutomaticSlideshow(); // Restart automatic slideshow
		}
	};

	return (
		<main className="">
			<div className="relative">
				<Img
					className="h-[40rem] object-cover w-full"
					ref={slideRef}
					src={slides[currSlide]}
				/>
				<div className="absolute hidden top-[50%] w-full md:flex md:visible justify-between">
					<button className="mr-20" onClick={handleManualNavigation}>
						Go
					</button>
					<button onClick={handlePrevClick}></button>
				</div>
			</div>
		</main>
	);
};

export default Hero;

// import React, { useState, useEffect, useRef } from "react";
// import { istockPhoto1, istockPhoto2, istockPhoto3, istockPhoto4, Img, Carousel } from "../exports";

// const Hero = () => {
//   const slides = [istockPhoto1, istockPhoto2, istockPhoto3, istockPhoto4];
//   const [currSlide, setCurrSlide] = useState(0);
//   const slideRef = useRef();

// using operator method
// Using Operator method for carousel]

// 	[currentBg, SetBg] = useState(0);
// 	interval = setInterval(() => {
// 		switch (currentBg) {
// 			case 0:
// 				setBg(1);
// 				clearInterval(interval);
// 				break;
// 			case 2:
// 				setBg(3);
// 				clearInterval(interval);
// 				break;
// 			case 3:
// 				setBg(4);
// 				clearInterval(interval);
// 				break;
// 			default:
// 				setBg(0);
// 				clearInterval(interval);
// 				break;
// 		}
// 	}, 4500);

//   return (
//     <main className="">
//       <div>
//         <Img ref={slideRef} src={slides[currSlide]} />
//         <button className="mr-20" onClick={handleNextClick}>
//           Go
//         </button>
//         <button onClick={handlePrevClick}>Back</button>
//       </div>
//     </main>
//   );
// };

// export default Hero;
