const NewOffer = ({ offerItem }) => {
	return (
		<section className="container mt-16">
			<h3 className="mb-8">{offerItem.heading}</h3>
			<div className="grid grid-cols-3 gap-8">
				{offerItem.offering.map((offer, i) => (
					<div className="p-8 bg-tender-50" key={i}>
						<h4 className="font-libreb text-xl font-bold mb-2">
							{offer.title}
						</h4>
						<p>{offer.text}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default NewOffer;
