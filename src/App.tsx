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
				<div>
					<img src="/bg-card-back.png" alt="Back of the card" />
				</div>
				<div className="z-10 bg-front_card flex flex-col items-center">
					<div></div>
					<div className="flex flex-col">
						<div>0000 0000 0000 0000</div>
						<div></div>
					</div>
				</div>
			</div>
			<div className="h-screen w-screen grid grid-rows-[30%_1fr] sm:grid-cols-[30%_1fr] sm:grid-rows-none">
				<header className="bg-background_mobile sm:bg-background_desktop bg-cover bg-no-repeat"></header>
				<main className="flex h-full m-auto items-center">
					{isConfirmed ? <ThankYouPage /> : <CardForm />}
				</main>
			</div>
		</div>
	);
}

export default App;
