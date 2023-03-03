import { useState } from "react";
import ThankYouPage from "./screens/ThankYouPage";
import { useForm } from "react-hook-form";

function App() {
	const [isConfirmed, setIsConfirmed] = useState(false);
	const [cardNumber, setCardNumbers] = useState("0000 0000 0000 0000");

	const sendForm = (data: any) => {
		setIsConfirmed(true);
		console.log(data);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			name: "",
			number: "",
			month: "",
			year: "",
			cvc: "",
		},
	});
	const formatCreditCardNumber = (value: string) => {
		let formattedValue = value.replace(/\D/g, "");
		formattedValue = formattedValue.replace(/(.{4})/g, "$1 ");
		formattedValue = formattedValue.trim();
		formattedValue = formattedValue.slice(0, 19);

		setCardNumbers(formattedValue);
		return formattedValue;
	};

	const handleCreditCardNumberChange = (event: {
		target: { value: string };
	}) => {
		event.target.value = formatCreditCardNumber(event.target.value);
	};
	return (
		<div>
			<div className="flex flex-col xl:flex-col-reverse absolute pt-9 m-auto left-[45%] -translate-x-1/2 xl:left-[20%] xl:top-[15%] xl:gap-8">
				<div className="translate-x-10 xl:translate-x-24 relative w-[21.5rem] h-48 xl:w-[28rem] xl:h-60 transition-all">
					<img
						src="/bg-card-back.png"
						alt="Back of the card"
						className="w-[21.5rem] h-48 xl:w-[28rem] xl:h-60 bg-cover bg-no-repeat bg-center"
					/>
					<div className="absolute top-[5rem] xl:top-[6.2rem] w-full flex justify-end h-[1.9rem] xl:h-[2.4rem] pr-10 xl:pr-12 items-center">
						<span className="text-white font-xs">
							{watch("cvc") == "" ? "000" : watch("cvc")}
						</span>
					</div>
				</div>
				{/* Desktop 450 240 */}
				<div className="-translate-y-[5.2rem] xl:-translate-y-0 relative w-[21.5rem] h-48 xl:w-[28rem] xl:h-60  transition-all ">
					<img
						src="/bg-card-front.png"
						alt=""
						className="w-[21.5rem] h-48 xl:w-[28rem] xl:h-60 bg-cover bg-no-repeat bg-center"
					/>
					<div className="absolute grid grid-rows-2 top-0 h-full w-full p-6 xl:p-8">
						<div className="flex flex-wrap items-center content-start gap-4">
							<div className="bg-white rounded-full w-10 h-10"></div>
							<div className="border border-white rounded-full w-5 h-5"></div>
						</div>
						<div className="grid grid-rows-2 items-end text-white uppercase ">
							<div className="text-justify text-2xl xl:text-3xl [word-spacing:0.6rem] xl:[word-spacing:1rem]">
								<span>
									{cardNumber == ""
										? "0000 0000 0000 0000"
										: cardNumber}
								</span>
							</div>
							<div className="flex justify-between items-end text-xs">
								<span>
									{watch("name") == ""
										? "Your name"
										: watch("name")}
								</span>
								<span>
									{watch("month") == ""
										? "00"
										: watch("month")}
									/
									{watch("year") == "" ? "00" : watch("year")}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen w-screen grid grid-rows-[30%_1fr] xl:grid-cols-[30%_1fr] xl:grid-rows-none">
				<header className="bg-background_mobile xl:bg-background_desktop bg-cover bg-no-repeat"></header>
				<main className="flex h-full m-auto items-center flex-wrap content-end xl:flex-nowrap mt-24 sm:mt-0">
					{isConfirmed ? (
						<ThankYouPage />
					) : (
						<div>
							<form
								onSubmit={handleSubmit(sendForm)}
								className="flex flex-col p-5 sm:p-16 gap-5 max-w-screen-sm"
							>
								<div className="flex flex-col">
									<label htmlFor="">CARDHOLDER NAME</label>
									<div
										className={`input_gradient${
											errors.name?.message == undefined
												? ""
												: "_error "
										}`}
									>
										<input
											type="text"
											{...register("name", {
												required: "Can't be blank",
												minLength: {
													value: 3,
													message:
														"The minimum lenght is 3",
												},
												maxLength: {
													value: 60,
													message:
														"The max lenght is 60",
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
									<div
										className={`input_gradient${
											errors.number?.message == undefined
												? ""
												: "_error "
										}`}
									>
										<input
											{...register("number", {
												required: "Can't be blank",
												minLength: {
													value: 19,
													message:
														"The minimum lenght is 16",
												},
												maxLength: {
													value: 19,
													message:
														"The max lenght is 16",
												},

												onChange:
													handleCreditCardNumberChange,
												pattern:
													/^(\d{4}[\s ]?){3}\d{4}$/i,
											})}
											type="text"
											placeholder="e.g 1234 5678 9123 0000"
											maxLength={19}
										/>
									</div>
									<span>{errors.number?.message}</span>
								</div>

								<div className="grid grid-cols-[40%_1fr] gap-3">
									<div className="flex flex-col ">
										<label htmlFor="month">
											EXP. DATE (MM/YY)
										</label>
										<div className="grid grid-cols-2 gap-2">
											<div
												className={`input_gradient${
													errors.month?.message ==
													undefined
														? ""
														: "_error "
												}`}
											>
												<input
													type="number"
													{...register("month", {
														required:
															"Can't be blank",
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
											<div
												className={`input_gradient${
													errors.year?.message ==
													undefined
														? ""
														: "_error "
												}`}
											>
												<input
													type="number"
													{...register("year", {
														required:
															"Can't be blank",
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
										<div
											className={`input_gradient${
												errors.cvc?.message == undefined
													? ""
													: "_error "
											}`}
										>
											<input
												type="number"
												{...register("cvc", {
													required: "Can't be blank",
													minLength: {
														value: 3,
														message:
															"Please enter a valid CVC",
													},
													maxLength: {
														value: 3,
														message:
															"Please enter a valid CVC",
													},
													max: {
														value: 999,
														message:
															"Please enter a valid CVC",
													},
												})}
												placeholder="e.g 123"
											/>
										</div>
										<span className="h-full items-end flex">
											{errors.cvc?.message}
										</span>
									</div>
								</div>
								<button className="bg-violet-dark text-white rounded-md py-4 mt-2">
									Confirm
								</button>
							</form>
						</div>
					)}
				</main>
			</div>
		</div>
	);
}

export default App;
