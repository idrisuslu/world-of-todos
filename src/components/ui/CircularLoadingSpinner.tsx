const CircularLoadingSpinner = () => {
  return (
    <div
      className="text-gray-500 inline-block h-6 w-6 animate-spin rounded-full border-[3.2px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default CircularLoadingSpinner;
