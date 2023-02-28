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
			<div className="absolute ">
				<div>
					{/* <img src="/bg-card-back.png" alt="Back of the card" /> */}
				</div>
				<div className="z-10 relative items-center w-[22rem] md:w-auto transition-all md:h-64 h-44 ">
					<img
						src="/bg-card-front.png"
						alt=""
						className=" bg-cover bg-no-repeat bg-center "
					/>
					<div className="absolute grid grid-rows-2 top-0 h-full w-full font-thin">
						<div className="flex p-6 px-5 gap-4 content-start flex-wrap items-center">
							<div className="bg-white rounded-full w-10 h-10"></div>
							<div className="rounded-full border border-white w-5 h-5"></div>
						</div>
						<div className="grid grid-rows-2 text-white p-2 px-3 md:p-6 md:px-8 uppercase">
							<div className="text-center md:text-3xl text-2xl text tracking-widest">
								0000 0000 0000 0000
							</div>
							<div className="flex justify-between items-end text-sm px-2">
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
