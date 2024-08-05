import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";
type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="border border-slate-300 rounded-lg overflow-hidden flex flex-col sm:flex-row p-4 sm:p-6 gap-4 sm:gap-8 h-full">
      <div className="w-full h-64 sm:w-1/2 sm:h-72">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="flex mr-2">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} className="text-yellow-400" />
              ))}
            </span>
            <span className="text-sm text-gray-600">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-xl font-bold text-gray-800 hover:underline"
          >
            {hotel.name}
          </Link>
        </div>
        <div className="line-clamp-3 text-gray-700 mb-4">
          {hotel.description}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-end">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
            {hotel.facilities.slice(0, 2).map((facility, index) => (
              <span
                key={index}
                className="bg-slate-200 p-2 rounded-lg font-bold text-xs"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 2 && (
              <span className="text-sm text-blue-600">
                +{hotel.facilities.length - 2} more
              </span>
            )}
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-lg text-gray-800">
              £{hotel.pricePerNight} per night
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-blue-600 text-white px-4 py-2 font-bold text-lg rounded hover:bg-blue-500 transition"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
