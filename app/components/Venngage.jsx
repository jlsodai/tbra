"use client";

import { useState, useEffect } from "react";

const Venngage = ({ code }) => {
	const [render, setRender] = useState(false);

	useEffect(() => {
		setRender(true);
	}, []);

	return (
		<>
			<div
				className="mt-16"
				dangerouslySetInnerHTML={{
					__html: code,
				}}
			/>
		</>
	);
};
export default Venngage;
