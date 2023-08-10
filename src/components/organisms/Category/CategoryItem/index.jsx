import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function CategoryItem({ icon, name, totalJobs }) {
	return (
		<div className="category-item-wrapper">
			<img src={icon} alt={icon} />

			<div>
				<div className="title">{name}</div>
				<div className="info">
					{totalJobs} jobs available
					<AiOutlineArrowRight className="btn-icon" />
				</div>
			</div>
		</div>
	);
}
