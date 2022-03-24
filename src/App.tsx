import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import { Footer } from "./components/Footer/Footer";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

type allStateOfInput = {
  setStateOfInput: Function;
  stateOfInput: string;
  setStateButtonSearch: Function;
};

function SearchBar({
  setStateOfInput,
  stateOfInput,
  setStateButtonSearch,
}: allStateOfInput) {
  return (
    <div className="w-[80%] h-[80px] mt-auto mb-auto ml-auto mr-auto flex ">
      <input
        className="basis-auto w-[80%] h-[60%] p-2 mt-auto mb-auto"
        value={stateOfInput}
        onChange={(event) => {
          if (stateOfInput.length <= 2) {
            setStateButtonSearch(false);
          }
          setStateOfInput(event.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => setStateButtonSearch(true)}
        className="bg-gray-300 hover:bg-gray-400 h-[60%]  basis-auto mt-auto mb-auto text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Search
      </button>
    </div>
  );
}

interface dataWiki {
  _id: string;
  name: string;
  definition: string;
  __v: number;
}

function App() {
  const [data, setData] = useState<Array<dataWiki | undefined>>();
  const [isLoading, setIsLoading] = useState(true);
  let [color] = useState("#222222");
  let [inputText, setInputText] = useState("");
  const [searchResult, setSearchResult] =
    useState<Array<dataWiki | undefined>>();
  const [, setIsLoadingSearchResult] = useState(false);
  const [hasEnteredSearched, setHasEnteredSearch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/getinitialknowledge"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8000/specificKnowledge?name=${inputText}`
        );
        // console.log(response.data);
        setSearchResult(response.data);
        setIsLoadingSearchResult(false);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [inputText]);

  function whatToDisplay(displayA: any, displayB: any) {
    if (hasEnteredSearched) {
      return displayA;
    }
    return displayB;
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <div className=" sm:w-[65%] max-w-6xl mt-8 md:w-[65%] basis-auto w-[80%] flex flex-col p-6 min-h-[1300px] bg-white  ml-auto mr-auto">
          <div className="bg-[#222222] h-[70px] mb-6 flex items-center justify-center  basis-auto w-[80%] ml-auto mr-auto mt-6  sm:block md:hidden ">
            <SearchBar
              setStateOfInput={setInputText}
              stateOfInput={inputText}
              setStateButtonSearch={setHasEnteredSearch}
            />
          </div>

          {isLoading ? (
            <ClockLoader
              loading={isLoading}
              css={override}
              color={color}
              size={150}
            />
          ) : (
            whatToDisplay(
              searchResult?.map((item, index) => {
                return (
                  <div key={index} className="mb-8 mt-8 p-8">
                    <h1 className="text-[#444444] text-4xl uppercase mb-7">
                      {item?.name}
                    </h1>
                    <p>{item?.definition}</p>
                  </div>
                );
              }),
              data?.map((item, index) => {
                return (
                  <div key={index} className="mb-8 mt-8 p-8">
                    <h1 className="text-[#444444] text-4xl uppercase mb-7">
                      {item?.name}
                    </h1>
                    <p>{item?.definition}</p>
                  </div>
                );
              })
            )
          )}
        </div>
        <div className="bg-[#222222]  hidden  h-[70px] basis-auto w-[20%] mt-8 md:flex items-center justify-center ml-auto mr-auto ">
          <SearchBar
            setStateOfInput={setInputText}
            stateOfInput={inputText}
            setStateButtonSearch={setHasEnteredSearch}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
