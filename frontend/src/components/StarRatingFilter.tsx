type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Property Rating</h4>
      <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2">
        {["5", "4", "3", "2", "1"].map((star) => (
          <label key={star} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              className="rounded"
              value={star}
              checked={selectedStars.includes(star)}
              onChange={onChange}
            />
            <span>
              {star} Star{star !== "1" && "s"}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StarRatingFilter;
