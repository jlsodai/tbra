/* eslint-disable @next/next/no-img-element */
const TBRAKey = ({ small, position = "left", size = "sm", className }) => {
	return (
		<img
			className={`${
				className ? className : "col-span-1 mx-auto my-0 inline-block"
			}`}
			src="/images/gray-key.png"
			width={`${
				size === "xs" ? "10px" : size === "sm" ? "30px" : "50px"
			}`}
			alt=""
		/>
	);
};
export default TBRAKey;
