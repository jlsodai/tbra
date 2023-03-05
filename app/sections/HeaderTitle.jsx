/* eslint-disable @next/next/no-img-element */
const HeaderTitle = ({ title }) => {
	return (
		<section className="bg-darkblue">
			<div className="flex container min-h-[300px] relative px-4 justify-center items-center">
				<img
					src="/images/white-key.png"
					className="absolute left-0 h-[75%] -z-1 opacity-5"
					alt=""
				/>
				<h1 className="max-w-[80%]">{title}</h1>
			</div>
		</section>
	);
};
export default HeaderTitle;
