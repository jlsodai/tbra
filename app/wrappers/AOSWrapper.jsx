"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSWrapper = ({ children }) => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 100,
		});
	}, []);
	return <>{children}</>;
};
export default AOSWrapper;
