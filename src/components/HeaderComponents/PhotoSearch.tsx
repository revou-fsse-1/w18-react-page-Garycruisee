type PhotoSearchProps = {
  setFilterValue: (value: string) => void;
};

export const PhotoSearch = (props: PhotoSearchProps) => {
  const { setFilterValue } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterValue(value);
  };
  return (
    <input
      className="bg-white block text-gray-600 px-3 p-2 text-lg rounded-md w-full max-w-[40ch] focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-green-500"
      type="text"
      placeholder="Search here"
      onChange={handleInputChange}
    />
  );
};
