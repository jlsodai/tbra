import HeaderTitle from "@/app/sections/HeaderTitle";
import Venngage from "../../../components/Venngage";
const page = () => {
	return (
		<>
			<HeaderTitle title="Research Post Title" />
			<section>
				<div className="container my-16">
					<img
						src="https://via.placeholder.com/1000x1000"
						className="mx-auto"
						alt=""
					/>
				</div>

				<Venngage />
			</section>
		</>
	);
};
export default page;
