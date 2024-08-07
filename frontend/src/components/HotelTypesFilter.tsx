import { hotelTypes } from "../config/hotel-options-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
      <div className="flex flex-wrap gap-4 lg:flex-col lg:gap-2">
        {hotelTypes.map((hotelType) => (
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded"
              value={hotelType}
              checked={selectedHotelTypes.includes(hotelType)}
              onChange={onChange}
            />
            <span className="text-sm">{hotelType}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default HotelTypesFilter;
