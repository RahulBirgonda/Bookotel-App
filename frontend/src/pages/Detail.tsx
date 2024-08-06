import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";

const Detail = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <>Loading...</>;
  }

  return (
    <div className="space-y-6 p-4 md:p-8 lg:p-12">
      {/* Hotel Name and Rating */}
      <div>
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
        <div className="flex items-center mt-2">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar key={index} className="text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col md:flex-row gap-4">
        {hotel.imageUrls.map((image, index) => (
          <div key={index} className="w-full md:w-1/3 h-64">
            <img
              src={image}
              alt={hotel.name}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Facilities */}
      <div className="flex flex-wrap gap-2">
        {hotel.facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-slate-300 rounded-lg p-2 text-center flex-grow"
          >
            {facility}
          </div>
        ))}
      </div>

      {/* Description and Booking Form */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 whitespace-pre-line bg-white p-4 rounded-lg shadow-md">
          {hotel.description}
        </div>
        <div className="w-full lg:w-1/3">
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
