import React from "react";
import PlayIcon from "../assets/icon-play.svg";
import NewWindowIcon from "../assets/icon-new-window.svg";

export const Word = ({ wordData }) => {
	let audio = new Audio(wordData?.phonetics[0].audio);
	return (
		<div className="word-container">
			<div className="word-top">
				<div className="word-top-left">
					<h1>{wordData?.word}</h1>
					<p>{wordData?.phonetic}</p>
				</div>
				<div className="word-top-right">
					<button
						className="play-btn"
						onClick={() => audio.play()}>
						<img
							src={PlayIcon}
							alt="P"
						/>
					</button>
				</div>
			</div>
			{wordData?.meanings.map((m) => {
				return (
					<div className="meanings">
						<h2>{m.partOfSpeech}</h2>
						<h3>Meaning</h3>
						{m.definitions.map((d) => {
							return (
								<ul className="definitions">
									<li>{d.definition}</li>
									<p>{d.example}</p>
								</ul>
							);
						})}
						{m.synonyms && (
							<div className="synonyms-container">
								{<h3>Synonyms</h3>}
								{m.synonyms.map((s) => {
									return <p className="synonyms">{s}</p>;
								})}
							</div>
						)}
					</div>
				);
			})}
			<hr />
			<div className="source">
				<p>Source</p>
				<a href={wordData?.sourceUrls[0]}>
					{wordData?.sourceUrls[0]}{" "}
					<img
						src={NewWindowIcon}
						alt=""
					/>
				</a>
			</div>
		</div>
	);
};
