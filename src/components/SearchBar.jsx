import React, { useState } from "react"
import SearchIcon from "../assets/icon-search.svg"
import { listOfWords } from "../assets/word-list"

export const SearchBar = ({ setSearchWord, refetch }) => {
	const [suggestion, setSuggestion] = useState("")
	const handleSubmit = (e) => {
		e.preventDefault()
		refetch()
		setSuggestion("")
	}

	const onChange = (e) => {
		setSearchWord(e.target.value)
		setSuggestion(e.target.value)
	}

	const filteredArray = listOfWords.filter((item) => {
		return item.startsWith(suggestion.toLowerCase())
	})

	return (
		<form onSubmit={handleSubmit}>
			<div
				className={`input ${
					suggestion && filteredArray.length > 0
						? "suggestion-opened"
						: ""
				}`}
			>
				<input
					required
					autoComplete="off"
					value={suggestion}
					placeholder="Search for word..."
					autoFocus
					name="search"
					type="text"
					onChange={onChange}
				/>
				<button type="submit">
					<img
						src={SearchIcon}
						alt="Search"
					/>
				</button>
			</div>
			<div className="suggestions">
				{suggestion &&
					filteredArray.map((word) => {
						return (
							<span
								role="link"
								onClick={async (e) => {
									await setSearchWord(e.target.innerText)
									refetch()
									setSuggestion("")
								}}
							>
								{word}
							</span>
						)
					})}
			</div>
		</form>
	)
}
