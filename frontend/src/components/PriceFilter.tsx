type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div className="w-full">
      <h4 className="text-md font-semibold mb-2">Max Price</h4>
      <div className="relative">
        <select
          className="p-2 border rounded-md w-full max-w-xs sm:max-w-xs md:max-w-none overflow-hidden"
          value={selectedPrice}
          onChange={(event) =>
            onChange(
              event.target.value ? parseInt(event.target.value) : undefined
            )
          }
        >
          <option value="">Select Max Price</option>
          {[50, 100, 200, 300, 500].map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PriceFilter;
