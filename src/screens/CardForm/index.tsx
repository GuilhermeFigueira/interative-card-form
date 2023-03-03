import { FormEvent, useContext } from "react";
import { useForm } from "react-hook-form";
import { InfoContext } from "../../contexts/info";

export default function CardForm() {
	const { setIsConfirmed, setCardNumbers } = useContext(InfoContext);
	const sendForm = (event: FormEvent) => {
		event.preventDefault();
		setIsConfirmed(true);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			number: "",
			month: {},
			year: {},
			cvc: {},
		},
	});

	return (
		<div>
			<form
				onSubmit={handleSubmit((data) => console.log(data))}
				className="flex flex-col p-5 sm:p-16 gap-5 max-w-screen-sm"
			>
				<div className="flex flex-col">
					<label htmlFor="">CARDHOLDER NAME</label>
					<div className="input_gradient">
						<input
							type="text"
							{...register("name", {
								required: "Can't be blank",
								minLength: {
									value: 3,
									message: "The minimum lenght is 3",
								},
								maxLength: {
									value: 60,
									message: "The max lenght is 60",
								},
							})}
							placeholder="e.g Jane Appleseed"
							className="w-full"
						/>
					</div>
					<span>{errors.name?.message}</span>
				</div>
				<div className="flex flex-col">
					<label htmlFor="number">CARD NUMBER</label>
					<div className="input_gradient">
						<input
							type="text"
							{...register("number", {
								required: "Can't be blank",
								minLength: {
									value: 16,
									message: "The minimum lenght is 16",
								},
								maxLength: {
									value: 16,
									message: "The max lenght is 16",
								},
							})}
							placeholder="e.g 1234 5678 9123 0000"
						/>
					</div>
					<span>{errors.number?.message}</span>
				</div>

				<div className="grid grid-cols-[40%_1fr] gap-3">
					<div className="flex flex-col ">
						<label htmlFor="month">EXP. DATE (MM/YY)</label>
						<div className="grid grid-cols-2 gap-2">
							<div className="input_gradient">
								<input
									type="number"
									{...register("month", {
										required: "Can't be blank",
										minLength: {
											value: 2,
											message:
												"Please enter a valid month",
										},
										maxLength: {
											value: 2,
											message:
												"Please enter a valid month",
										},
										max: {
											value: 12,
											message:
												"Please enter a valid month",
										},
									})}
									placeholder="MM"
								/>
							</div>
							<div className="input_gradient">
								<input
									type="number"
									{...register("year", {
										required: "Can't be blank",
										minLength: {
											value: 2,
											message:
												"Please enter a valid year number ",
										},
										maxLength: {
											value: 2,
											message:
												"Please enter a valid year number",
										},
									})}
									placeholder="YY"
								/>
							</div>
							<span>{errors.month?.message}</span>
							<span>{errors.year?.message}</span>
						</div>
					</div>
					<div className="flex flex-col">
						<label htmlFor="cvc">cvc</label>
						<div className="input_gradient">
							<input
								type="number"
								{...register("cvc", {
									required: "Can't be blank",
									minLength: {
										value: 3,
										message: "Please enter a valid CVC",
									},
									maxLength: {
										value: 3,
										message: "Please enter a valid CVC",
									},
									max: {
										value: 999,
										message: "Please enter a valid CVC",
									},
								})}
								placeholder="e.g 123"
							/>
						</div>
						<span>{errors.cvc?.message}</span>
					</div>
				</div>
				<button className="bg-violet-dark text-white rounded-md py-4 mt-2">
					Confirm
				</button>
			</form>
		</div>
	);
}
