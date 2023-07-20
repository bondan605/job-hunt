import React from "react";
import Navbar from "../../organisms/Navbar";

export default function LandingPageTemplate({ children }) {
	return (
		<div>
			<div className="bg-landingpage"></div>
			<Navbar />
			<div id="content">{children}</div>
		</div>
	);
}
