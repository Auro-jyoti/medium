
export const Skeleton = () => {
  return (
    <div role="status" className=" animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor">
        <div className="flex">
          <div className="h-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="font-normal pl-2 text-sm  justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="flex justify-center flex-col pl-2"></div>
          <div className="font-thin pl-2 text-slate-500  justify-center flex-col text-sm">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
