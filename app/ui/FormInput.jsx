const FormInput = ({ label, type = "text", required = false }) => {
	return (
		<div className="md:flex md:items-center mt-4">
			<div className="w-full">
				<input
					className="bg-dawn-200 appearance-none border-2 border-dawn-200 w-full py-2 px-4 focus:outline-none focus:bg-white "
					type={type}
					placeholder={label}
				/>
			</div>
		</div>
	);
};
export default FormInput;
