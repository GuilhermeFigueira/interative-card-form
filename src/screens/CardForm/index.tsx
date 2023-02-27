export default function CardForm() {
	return (
		<div>
			<form action="" className="flex flex-col p-5 gap-5">
				<div className="flex flex-col">
					<label htmlFor="">CARDHOLDER NAME</label>
					<input
						type="text"
						name="name"
						placeholder="e.g Jane Appleseed"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="number">CARD NUMBER</label>
					<input
						type="text"
						name="number"
						placeholder="e.g 1234 5678 9123 0000"
					/>
				</div>

				<div className="grid grid-cols-[40%_1fr] gap-3">
					<div className="flex flex-col ">
						<label htmlFor="month">EXP. DATE (MM/YY)</label>
						<div className="grid grid-cols-2">
							<input
								type="number"
								name="month"
								placeholder="MM"
							/>
							<input type="number" name="year" placeholder="YY" />
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="cvc">cvc</label>
						<input type="number" name="cvc" placeholder="e.g 123" />
					</div>
				</div>
				<button className="bg-violet-dark text-white rounded-md py-4 mt-2">
					Confirm
				</button>
			</form>
		</div>
	);
}
