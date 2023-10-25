/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";

export const metadata = {
	title: "Empowering Women and Elevating Risk Governance: The DCRO Institute and TheBoardroom Africa Join Forces",
	openGraph: {
		images: 'https://res.cloudinary.com/tbra/image/upload/v1698250891/TBRA-DCRO-Press-Release_bvmzjo.jpg'
	},
}

const page = () => {
	return (
		<>
			<HeaderTitle title="Press Release" />
			<section className="container mt-16">

				<div className="prose max-w-full lg:mx-16">
					<div className="flex items-center">
						<h1>Empowering Women and Elevating Risk Governance: <br/>The DCRO Institute and TheBoardroom Africa Join Forces</h1>
						<img alt="DCRO logo" className="mt-0 ml-16 self-baseline -sm:hidden" src="https://res.cloudinary.com/tbra/image/upload/v1698241406/dcro_slumhm.jpg" width="200px" />
					</div>
					{/* <Markdown>{pressrelease}</Markdown> */}
					<div className="news-content">
						<div className="md:float-right bg-gray-50 border border-gray-400 p-4 md:ml-8 md:mb-8 w-[300px]">
							<img alt="Marcia Ashong" src="https://img.einpresswire.com/medium/558062/marcia-ashong.jpeg" className="m-0" />
							<p>Marcia Ashong, Founder and CEO of TheBoardroom Africa</p>
							<img alt="David Koenig" src="https://img.einpresswire.com/medium/351205/david-r-koenig-new.jpeg" className="m-0" />
							<p className="mb-0">David R. Koenig, QRD®, President and Chief Executive Officer</p>
						</div>
						<p><strong>October 25, 2023</strong></p>
						<p>The DCRO Institute, the esteemed global collaborative of board members and C-level executives that offers comprehensive risk governance credentialing programmes for leaders, proudly announces its partnership with TheBoardroom Africa (TBrA), a leading organisation dedicated to advancing women in leadership across the African continent. Together, they aim to enhance risk governance practices and empower women to serve on boards, marking a significant milestone in fostering diversity and excellence in corporate leadership. </p>
						<p>Under this groundbreaking partnership, TheBoardroom Africa’s community of over 2,700 women executives will have the opportunity to distinguish themselves through the prestigious DCRO Institute <a href="https://dcroi.org/credentialing">credentials</a>, including the <a href="https://dcroi.org/qualified-risk-directors%C2%AE">Qualified Risk Director®</a> designation, the Certificate in Risk Governance®, and the Certificate in Cyber Risk Governance℠. These credentials, recognised worldwide, signify a commitment to fostering better risk governance practices, enhancing director development, and encouraging the sharing of best practices among organisations of all types. </p>
						<p className="md:float-left font-bold italic text-2xl md:w-[300px] md:mr-8 md:mt-2">&quot;Cultivating gender diversity in the boardroom isn't just about representation; it's a strategic imperative deeply intertwined with effective risk management,&quot; <br/><br/><span className="font-normal">— said Marcia Ashong, Founder and CEO of TheBoardroom Africa.</span></p>
						<p>&quot;TBrA was created because we recognise that inclusive decision-making, fostered by diverse voices and perspectives, is paramount to robust risk management strategies. By embracing the wealth of talent and insights that women bring to the boardroom, organisations not only enhance their ability to identify and navigate risks but also fortify their foundations for sustainable success in today's dynamic business landscape.&quot; </p>
						<p>&quot;I am thrilled about our new partnership with TheBoardroom Africa,&quot; stated David R. Koenig, QRD®, President and Chief Executive Officer of the DCRO Institute. &quot;When I first met Marcia Ashong, I quickly realised how closely our missions and goals align. Since then, we have been working collaboratively with her team to ensure this partnership is a great success for women leaders across the African continent.&quot; </p>
						<p>Recognising the nuanced nature of risk is paramount in deepening Africa’s integration into the global economy. Through this collaboration, there is a unique opportunity to empower the region's most talented women leaders with essential expertise in risk management, equipping them to thrive in the boardroom. This knowledge is instrumental in guiding organisations through expansion, ensuring they are well-prepared to navigate the complexities of growth and make meaningful strides in the global business arena.</p>
						<p>One of the flagship programmes offered by the DCRO Institute is 'The Board Members’ Course on Risk®,' a comprehensive certificate programme taught by leading figures in risk governance from around the world. Graduates of this programme are awarded the Certificate in Risk Governance®, a testament to their expertise in risk management and governance. Additionally, the DCRO Institute offers the Certificate in Cyber Risk Governance℠, addressing the growing demand for cyber and technology knowledge on boards. The institute also grants the prestigious Qualified Risk Director® professional designation, recognising exceptional individuals who link corporate strategy to the positive governance of risk-taking. The DCRO Institute credential holders now serve on boards in more than 45 countries on five continents. </p>
						<p>What sets the DCRO Institute apart is its commitment to diversity and inclusion in developed and developing markets. More than half of its credential holders are women, reflecting a dedication to empowering women in leadership positions globally. </p>
						<p>To learn more about the programmes of the DCRO Institute, please visit <a href="https://courses.dcroi.org">https://courses.dcroi.org</a> or <a href="https://www.dcroi.org">www.dcroi.org</a> to learn more about the organisation. Read testimonials about our programmes at <a href="https://www.dcroi.org/testimonials">www.dcroi.org/testimonials</a>. </p>
						<p><strong>About the DCRO Institute</strong></p>
						<p>The DCRO Institute is the world's leading source of risk governance training and credentialing. It is the home of the Qualified Risk Director® designation, the Certificate in Risk Governance®, and the Certificate in Cyber Risk Governance℠. We work globally to bring risk expertise to the boardroom and C-suite by teaching the positive governance of risk-taking.℠ Graduates from our programmes are leaders in boardrooms and C-suites on five continents. Our goal, which is emblazoned on our logo, is to help organisations Innovate, Sustain, and Create Value. Visit <a href="http://www.dcroi.org">www.dcroi.org</a> to learn more. </p>
						<p><strong>About TheBoardroom Africa</strong></p>
						<p>TheBoardroom Africa (TBrA) is the largest regional community of 2700+ women executives in Africa and the diaspora. Our goal is to improve access to board and other leadership opportunities for women and accelerate the presence of women on boards while transforming the presence, voice and influence of African women on a global stage. </p>
						<p>We bring together businesswomen of diverse occupations and sectors, providing them access to board opportunities and resources for them to grow personally and professionally through various initiatives, including but not limited to board effectiveness and other executive &amp; personal development initiatives and more. </p>
						<p>Through events, research, and publications, TBrA inspires and educates the business community on the power of diverse leadership—and raises the bar for board service and diversity in Africa. We’re driving the movement to recognise that when women and men lead side by side, business succeeds, and society thrives. Our members include C-Suite, VP, and director-level executives from every major industry spanning more than 65 countries across Africa and the diaspora.</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;