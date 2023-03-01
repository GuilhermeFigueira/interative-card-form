import { useContext, useState } from "react";
import CardForm from "./screens/CardForm";
import ThankYouPage from "./screens/ThankYouPage";
import { InfoContext } from "./contexts/info";

function App() {
	const { cvc, userName, expirationDate, isConfirmed, cardNumbers } =
		useContext(InfoContext);
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
						<span className="text-white font-xs">{cvc}</span>
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
								<span>{cardNumbers}</span>
							</div>
							<div className="flex justify-between items-end text-xs">
								<span>{userName}</span>
								<span>{expirationDate}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen w-screen grid grid-rows-[30%_1fr] xl:grid-cols-[30%_1fr] xl:grid-rows-none">
				<header className="bg-background_mobile xl:bg-background_desktop bg-cover bg-no-repeat"></header>
				<main className="flex h-full m-auto items-center flex-wrap content-end xl:flex-nowrap">
					{isConfirmed ? <ThankYouPage /> : <CardForm />}
				</main>
			</div>
		</div>
	);
}

export default App;
