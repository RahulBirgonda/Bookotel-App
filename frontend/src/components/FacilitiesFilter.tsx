import { hotelFacilities } from "../config/hotel-options-config";

type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectedFacilities, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Facilities</h4>
      <div className="flex flex-wrap gap-4 lg:flex-col lg:gap-2">
        {hotelFacilities.map((facility) => (
          <label key={facility} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded"
              value={facility}
              checked={selectedFacilities.includes(facility)}
              onChange={onChange}
            />
            <span className="text-sm">{facility}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesFilter;
