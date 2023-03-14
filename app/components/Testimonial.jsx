import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonial = ({ quote, author, authorTitle }) => {
	return (
		<div className="QuoteCascade after:bigborder pt-10">
			<RiDoubleQuotesL className="text-dawn mx-auto text-[130px]" />
			<p className="mt-4">{quote}</p>
			<p className="mt-4">
				<strong>{author}</strong>, {authorTitle}
			</p>
		</div>
	);
};
export default Testimonial;
