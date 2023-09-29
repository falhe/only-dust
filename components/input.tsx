export const Input = () => {
  return (
    <div className="form-control my-8">
      <div className="input-group">
        <button className="input input-bordered border-r-0 pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Placeholder"
          className="input input-bordered w-full border-l-0 pl-2"
        />
      </div>
    </div>
  );
};
