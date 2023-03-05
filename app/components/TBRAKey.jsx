/* eslint-disable @next/next/no-img-element */
const TBRAKey = ({ small, position = "left" }) => {
	return (
		<img
			className="col-span-1 mx-auto inline-block"
			src="/images/gray-key.png"
			width={`${small ? "30px" : "50px"}`}
			alt=""
		/>
	);
};
export default TBRAKey;
