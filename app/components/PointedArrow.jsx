import { CgChevronRight } from "react-icons/cg";

const PointedArrow = ({ size, title }) => {
	return (
		<div className="flex items-center">
			<div
				className={`flex my-2 items-center border border-mustard border-r-0 z-10 h-14 pl-6 ${
					size === "sm"
						? "w-[400px]"
						: size === "md"
						? "w-[500px]"
						: size === "lg"
						? "w-[600px]"
						: "w-[300px]"
				}`}
			>
				{title}
			</div>
			{/* <div className="chevron ml-[8.5px] h-[54px]"></div> */}
			<div className="gg-chevron-right w-[37px] h-[37px] after:w-[37px] after:h-[37px]"></div>
		</div>
	);
};
export default PointedArrow;
