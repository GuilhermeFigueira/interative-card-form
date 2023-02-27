import { useState } from "react";
import CardForm from "./screens/CardForm";
import ThankYouPage from "./screens/ThankYouPage";

function App() {
	const [isConfirmed, setIsConfirmed] = useState(false);
	const [cardNumbers, setCardNumbers] = useState("0000 0000 0000 0000");
	const [userName, setUserName] = useState("Your Name");
	const [expirationDate, setExpirationDate] = useState("00/00");

	return (
		<div className="h-screen grid grid-rows-[30%_1fr] sm:grid-cols-[30%_1fr] sm:grid-rows-none">
			<header className="bg-background_mobile sm:bg-background_desktop bg-cover bg-no-repeat"></header>
			<main>{isConfirmed ? <ThankYouPage /> : <CardForm />}</main>
		</div>
	);
}

export default App;
