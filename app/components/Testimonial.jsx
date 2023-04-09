import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonial = ({ quote, author, authorTitle }) => {
	return (
		<div className="bg-darkblue px-8 md:px-0 md:pr-24 pb-10 text-white md:QuoteCascade after:bigborder pt-10 -mx-8 md:mx-0">
			<RiDoubleQuotesL className="text-dawn mx-auto text-[130px]" />
			<p className="mt-4">{quote}</p>
			<p className="mt-4">
				<strong>{author}</strong>, {authorTitle}
			</p>
		</div>
	);
};
export default Testimonial;
