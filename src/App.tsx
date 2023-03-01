import { useState } from "react";
import CardForm from "./screens/CardForm";
import ThankYouPage from "./screens/ThankYouPage";

function App() {
	const [isConfirmed, setIsConfirmed] = useState(false);
	const [cardNumbers, setCardNumbers] = useState("0000 0000 0000 0000");
	const [userName, setUserName] = useState("Your Name");
	const [expirationDate, setExpirationDate] = useState("00/00");

	return (
		<div>
			<div className="absolute">
				<div className="relative w-[21.5rem] h-48 md:w-[28rem] md:h-60 transition-all">
					<img
						src="/bg-card-back.png"
						alt="Back of the card"
						className="w-[21.5rem] h-48 md:w-[28rem] md:h-60 bg-cover bg-no-repeat bg-center"
					/>
					<div className="absolute top-[5rem] md:top-[6.2rem] w-full flex justify-end h-[1.9rem] md:h-[2.4rem] pr-10 md:pr-12 items-center">
						<span className="text-white font-xs">000</span>
					</div>
				</div>
				{/* Desktop 450 240 */}
				<div className="relative w-[21.5rem] h-48 md:w-[28rem] md:h-60  transition-all">
					<img
						src="/bg-card-front.png"
						alt=""
						className="w-[21.5rem] h-48 md:w-[28rem] md:h-60 bg-cover bg-no-repeat bg-center"
					/>
					<div className="absolute grid grid-rows-2 top-0 h-full w-full p-6 md:p-8">
						<div className="flex flex-wrap items-center content-start gap-4">
							<div className="bg-white rounded-full w-10 h-10"></div>
							<div className="border border-white rounded-full w-5 h-5"></div>
						</div>
						<div className="grid grid-rows-2 items-end text-white uppercase ">
							<div className="text-justify text-2xl md:text-3xl [word-spacing:0.6rem] md:[word-spacing:1rem]">
								<span>0000 0000 0000 0000</span>
							</div>
							<div className="flex justify-between items-end text-xs">
								<span>Name</span> <span>00/00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen w-screen grid grid-rows-[30%_1fr] md:grid-cols-[30%_1fr] md:grid-rows-none">
				<header className="bg-background_mobile md:bg-background_desktop bg-cover bg-no-repeat"></header>
				<main className="flex h-full m-auto items-center">
					{isConfirmed ? <ThankYouPage /> : <CardForm />}
				</main>
			</div>
		</div>
	);
}

export default App;
