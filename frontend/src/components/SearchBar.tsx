import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-3 bg-orange-400 rounded shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4"
    >
      <div className="flex flex-row items-center bg-white p-2 rounded-md w-full">
        <MdTravelExplore size={25} className="mr-2 text-gray-500" />
        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="flex bg-white p-2 gap-2 rounded-md w-full">
        <label className="flex items-center w-full">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold text-center"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="flex items-center w-full">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold text-center"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>

      <div className="w-full">
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="w-full bg-white p-2 rounded-md focus:outline-none"
          wrapperClassName="w-full"
        />
      </div>
      <div className="w-full">
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="w-full bg-white p-2 rounded-md focus:outline-none"
          wrapperClassName="w-full"
        />
      </div>

      <div className="flex  items-center gap-2 w-full">
        <button
          type="submit"
          className="w-full lg:w-2/3 bg-blue-600 text-white p-2 font-bold text-xl rounded-md hover:bg-blue-500"
        >
          Search
        </button>
        <button
          type="button"
          className="w-full lg:w-1/3 bg-red-600 text-white p-2 font-bold text-xl rounded-md hover:bg-red-500"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
