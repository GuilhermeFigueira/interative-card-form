import { ReactNode, createContext, useState } from "react";

interface InfoProvider {
	children: ReactNode;
}

interface InfoContextData {
	isConfirmed: boolean;
	setIsConfirmed: (value: boolean | ((prevVar: boolean) => boolean)) => void;
	cardNumbers: string;
	setCardNumbers: (value: string | ((prevVar: string) => string)) => void;
	userName: string;
	setUserName: (value: string | ((prevVar: string) => string)) => void;
	expirationDate: string;
	setExpirationDate: (value: string | ((prevVar: string) => string)) => void;
	cvc: string;
	setCvc: (value: string | ((prevVar: string) => string)) => void;
}

export const InfoContext = createContext({} as InfoContextData);

export default function InfoProvider(props: InfoProvider) {
	const [isConfirmed, setIsConfirmed] = useState(false);
	const [cardNumbers, setCardNumbers] = useState("0000 0000 0000 0000");
	const [userName, setUserName] = useState("Your Name");
	const [expirationDate, setExpirationDate] = useState("00/00");
	const [cvc, setCvc] = useState("000");
	return (
		<InfoContext.Provider
			value={{
				isConfirmed,
				setIsConfirmed,
				cardNumbers,
				setCardNumbers,
				userName,
				setUserName,
				expirationDate,
				setExpirationDate,
				cvc,
				setCvc,
			}}
		>
			{props.children}
		</InfoContext.Provider>
	);
}
