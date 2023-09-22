import React, {useState, useEffect, useRef} from "react";
import {
	istockPhoto1,
	istockPhoto2,
	istockPhoto3,
	istockPhoto4,
	Img,
	Carousel,
} from "../export";

const Hero = () => {
	const slides = [istockPhoto1, istockPhoto2, istockPhoto3, istockPhoto4];
	const [currSlide, setCurrSlide] = useState(0);
	const slideRef = useRef();
	const element = slideRef.current;
	useEffect(() => {
		setInterval(() => {
			startSlider();
		}, 2000);
	}, []);
	const startSlider = () =>
		setInterval(() => {
			handleNextClick();
		}, 3000);

	const handleNextClick = () => {
		if (currSlide === slides.length - 1) {
			setCurrSlide(1);
		} else {
			setCurrSlide(currSlide + 1);
		}
		slideRef.current.classlist.add("fade-anim");
	};
	const handlePrevClick = () => {
		if (currSlide < 1) {
			setCurrSlide(slides.length - 1);
		} else {
			setCurrSlide(currSlide - 1);
		}
	};

	/*Using Operator for carousel]

	[currentBg, SetBg] = useState(0);
	interval = setInterval(() => {
		switch (currentBg) {
			case 0:
				setBg(1);
				clearInterval(interval);
				break;
			case 2:
				setBg(3);
				clearInterval(interval);
				break;
			case 3:
				setBg(4);
				clearInterval(interval);
				break;
			default:
				setBg(0);
				clearInterval(interval);
				break;
		}
	}, 4500);*/
	return (
		<main className="">
			<div>
				<Img ref={slideRef} src={slides[currSlide]} />
				<button className="mr-20" onClick={handleNextClick}>
					Go
				</button>
				<button onClick={handlePrevClick}>Back</button>
			</div>
		</main>
	);
};
export default Hero;
