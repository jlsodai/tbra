"use client";
import Script from "next/script";

const ConstantContact = () => {
	return (
		<>
			<Script id="ccinfo">
				var _ctct_m = &quot;a3bbae633b73d6d9aa1e86a827022441&quot;;{" "}
			</Script>
			<Script
				id="signupScript"
				src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
				async
				defer
			/>
			<div
				class="ctct-inline-form"
				data-form-id="df34b2e7-504f-4a10-8249-325590f50436"
			></div>
		</>
	);
};

export default ConstantContact;
