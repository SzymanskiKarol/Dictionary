import React from "react";
import Select from "react-select";

export const FontChanger = ({ activeFont, setActiveFont }) => {
	const options = [
		{ value: "Serif", label: "Serif" },
		{ value: "Sans-Serif", label: "Sans Serif" },
		{ value: "Monospace", label: "Monospace" },
	];

	const handleSelect = (selected) => {
		setActiveFont(selected.value);
	};

	return (
		<div className="font-changer">
			<Select
				defaultValue={activeFont}
				options={options}
				onChange={handleSelect}
				placeholder="Serif"
				isSearchable={false}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						width: "150px",
						border: "none",
						boxShadow: "none",
						outline: "none",
						textAlign: "right",
						backgroundColor: "transparent",
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						color: "black",
						backgroundColor: state.isSelected ? "#f4f4f4" : "white",
						"&:hover": {
							backgroundColor: "#f4f4f4",
						},
						"&:focus": {
							backgroundColor: "red",
						},
					}),
				}}
			/>
		</div>
	);
};
