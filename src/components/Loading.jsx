const LoadingProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] gap-4">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-red-800 rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading products...</p>
    </div>
  );
};

export default LoadingProducts;
