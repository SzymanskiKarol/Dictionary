import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Word } from "./components/Word";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const App = () => {
  const [searchWord, setSearchWord] = useState("");
  const [activeFont, setActiveFont] = useState("Serif");
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    );
    console.log(response.data[0]);
    return response.data[0];
  };

  const {
    data: wordData,
    refetch,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["dictionary"],
    enabled: false,
    queryFn: fetchData,
  });

  return (
    <div className={`container ${theme && "Dark"}`}>
      <div className={`App ${activeFont}`}>
        <Navbar
          activeFont={activeFont}
          setActiveFont={setActiveFont}
          theme={theme}
          setTheme={setTheme}
        />
        <SearchBar
          refetch={refetch}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
        <main>
          {isFetching && <span className="loader"></span>}
          {isError && (
            <h3>
              Oops I can't find the word you're looking for. Try again or this
              word don't exist.
            </h3>
          )}
          {wordData && !isError && <Word wordData={wordData} />}
        </main>
      </div>
    </div>
  );
};
