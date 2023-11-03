"use client";
import { useEffect } from "react";

const PaperForm = ({ formSlug, showSpinner = 1 }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://paperform.co/__embed.min.js";
		document.body.appendChild(script);
	}, []);

	return <div prefill-inherit="true" data-paperform-id={formSlug} data-spinner={showSpinner} />;
};
export default PaperForm;
