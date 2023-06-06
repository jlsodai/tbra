/* eslint-disable @next/next/no-img-element */
import PaperFormModal from "@/app/components/PaperFormModal";
const HeaderTitle = ({ title, paperForm }) => {
	return (
		<section className="bg-darkblue bigborder">
			<div className="flex container min-h-[280px] md:min-h-[380px] relative justify-center items-center">
				<img
					src="/images/white-key.png"
					className="absolute left-0 h-[75%] -z-1 opacity-5"
					alt=""
				/>
				<div className="md:max-w-[80%] py-16">
					<h1>{title}</h1>
					{paperForm}
				</div>
			</div>
		</section>
	);
};
export default HeaderTitle;
