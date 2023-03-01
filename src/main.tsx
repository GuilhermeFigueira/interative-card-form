import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import InfoProvider from "./contexts/info";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<InfoProvider>
			<App />
		</InfoProvider>
	</React.StrictMode>
);
