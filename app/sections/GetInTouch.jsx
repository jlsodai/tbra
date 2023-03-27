"use client";
import { useEffect } from "react";

const GetInTouch = ({ formSlug, showSpinner }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://paperform.co/__embed.min.js";
		document.body.appendChild(script);
	}, []);

	return (
		<div
			data-paperform-id={formSlug}
			data-spinner={showSpinner}
		/>
	);
};
export default GetInTouch;
