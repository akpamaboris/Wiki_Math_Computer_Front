import "./App.css";
import { Header } from "./components/Header/Header";

function SearchBar() {
  return (
    <div className="w-[80%] h-[60%] mt-auto mb-auto ml-auto mr-auto bg-red-200 flex ">
      <input className="basis-auto w-[80%]" type="text" />
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
        {" "}
        Search
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className=" sm:w-[65%] max-w-6xl mt-8 md:w-[65%] basis-auto w-[80%] flex bg-white h-[1000px] ml-auto mr-auto">
          <div className="bg-[#222222] h-[70px] flex items-center justify-center  basis-auto w-[80%] ml-auto mr-auto mt-6  sm:block md:hidden ">
            <SearchBar />
          </div>
        </div>
        <div className="bg-[#222222]  hidden  h-[70px] basis-auto w-[20%] mt-8 md:flex items-center justify-center ml-auto mr-auto ">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
