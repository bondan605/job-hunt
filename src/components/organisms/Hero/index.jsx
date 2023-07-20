import React from "react";

import "./style.css";
import FormJob from "../FormJob";

export default function Hero() {
	return (
		<div className="hero-wrapper">
			<div className="section-1">
				<div className="wording">
					<div className="title">
						Discover <br /> more than <br /> <span>5000+ Jobs</span>
					</div>
					<img src="./images/accent.png" alt="./images/accent.png" />
					<div className="description">
						Great platform for the job seeker that searching for{" "}
						<br /> new career heights and passionate about startups.
					</div>
					<FormJob />
				</div>
			</div>
			<div className="section-2">
				<img src="./images/hero.png" alt="./images/hero.png" />
			</div>
		</div>
	);
}
