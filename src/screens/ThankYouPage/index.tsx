import { Check } from "phosphor-react";

export default function ThankYouPage() {
	return (
		<div className="flex flex-col p-5 sm:p-16 gap-10 max-w-screen-sm w-screen items-center">
			<div className="bg-gradient-to-b from-input_gradient-left to-input_gradient-right p-6 rounded-full">
				<Check size={32} color="white" weight="bold" />
			</div>
			<div className="flex flex-col text-center items-center gap-5">
				<h1 className="uppercase text-4xl text-violet-dark">
					Thank You
				</h1>
				<span className="text-violet-gray">
					We've added your card details
				</span>
			</div>
			<button className="bg-violet-dark text-white rounded-md py-4 mt-2 w-full">
				Continue
			</button>
		</div>
	);
}
