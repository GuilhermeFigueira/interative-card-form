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
			<div className="text-center pt-4">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg transition-all "
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</div>
	);
}
