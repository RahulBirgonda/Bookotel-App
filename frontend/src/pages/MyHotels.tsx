import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="mt-4 sm:mt-0 flex bg-blue-600 text-white text-lg sm:text-xl font-bold p-2 rounded-lg hover:bg-blue-500"
        >
          Add Hotel
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {hotelData.map((hotel) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col justify-between border border-slate-300 rounded-lg p-6 sm:p-8 gap-4 sm:gap-6 bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl sm:text-2xl font-bold">{hotel.name}</h2>
            <div className="text-sm text-gray-700 whitespace-pre-line">
              {hotel.description}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-slate-300 rounded-sm p-2 flex items-center text-sm sm:text-base">
                <BsMap className="mr-2 text-lg" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-2 flex items-center text-sm sm:text-base">
                <BsBuilding className="mr-2 text-lg" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded-sm p-2 flex items-center text-sm sm:text-base">
                <BiMoney className="mr-2 text-lg" />£{hotel.pricePerNight} per
                night
              </div>
              <div className="border border-slate-300 rounded-sm p-2 flex items-center text-sm sm:text-base">
                <BiHotel className="mr-2 text-lg" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 rounded-sm p-2 flex items-center text-sm sm:text-base">
                <BiStar className="mr-2 text-lg" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-blue-600 text-white text-lg font-bold p-2 rounded-lg hover:bg-blue-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
