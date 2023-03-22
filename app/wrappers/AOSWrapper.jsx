"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSWrapper = ({ children }) => {
	useEffect(() => {
		AOS.init({
			duration: 600,
			easing: "ease-in-sine",
		});
	}, []);
	return <>{children}</>;
};
export default AOSWrapper;
