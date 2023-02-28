import { FormEvent } from "react";

export default function CardForm() {
	const sendForm = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={sendForm} className="flex flex-col p-5 pt-20 gap-5">
				<div className="flex flex-col">
					<label htmlFor="">CARDHOLDER NAME</label>
					<div className="input_gradient">
						<input
							type="text"
							name="name"
							placeholder="e.g Jane Appleseed"
							className="w-full"
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="number">CARD NUMBER</label>
					<div className="input_gradient">
						<input
							type="text"
							name="number"
							placeholder="e.g 1234 5678 9123 0000"
						/>
					</div>
				</div>

				<div className="grid grid-cols-[40%_1fr] gap-3">
					<div className="flex flex-col ">
						<label htmlFor="month">EXP. DATE (MM/YY)</label>
						<div className="grid grid-cols-2 gap-2">
							<div className="input_gradient">
								<input
									type="number"
									name="month"
									placeholder="MM"
								/>
							</div>
							<div className="input_gradient">
								<input
									type="number"
									name="year"
									placeholder="YY"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="cvc">cvc</label>
						<div className="input_gradient">
							<input
								type="number"
								name="cvc"
								placeholder="e.g 123"
							/>
						</div>
					</div>
				</div>
				<button className="bg-violet-dark text-white rounded-md py-4 mt-2">
					Confirm
				</button>
			</form>
		</div>
	);
}
