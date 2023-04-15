import React from "react";
import SearchIcon from "../assets/icon-search.svg";

export const SearchBar = ({ setSearchWord, refetch }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		refetch();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input">
				<input
					required
					placeholder="Search for word..."
					autoFocus
					type="text"
					onChange={(e) => setSearchWord(e.target.value)}
				/>
				<button type="submit">
					<img
						src={SearchIcon}
						alt=""
					/>
				</button>
			</div>
		</form>
	);
};
