const Venngage = () => {
	return (
		<>
			<div
				className="mt-16"
				dangerouslySetInnerHTML={{
					__html: '<script src="https://infograph.venngage.com/js/embed/v1/embed.js" data-vg-id="uhv27zuijIk" data-title="2022 Something Here" data-w="816" data-h="1056" data-multipage="true" data-f="false"></script>',
				}}
			/>
		</>
	);
};
export default Venngage;
