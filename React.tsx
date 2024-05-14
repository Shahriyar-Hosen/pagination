import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store"; // Assuming RootState contains the type definitions for your Redux state
import { paginateNumber } from "../../features/paginate/paginateSlice";

const Pagination: React.FC = () => { // Define component as React functional component
  const dispatch = useDispatch();

  const { pageNumber }: { pageNumber: number } = useSelector((state: RootState) => state.paginate); // Specify type for pageNumber

  const page: number = useSelector((state: RootState) =>
    Math.ceil(state.videos.videos.length / 5)
  ); // Specify type for page

  const handlePageSelect = (pageNumber: number) => {
    dispatch(paginateNumber(pageNumber));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {[...Array(page).keys()].map((num: number) => ( // Specify type for num
          <div
            key={num}
            className={`${
              pageNumber === num + 1
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600"
            }   px-4 py-1 rounded-full cursor-pointer`}
            onClick={() => handlePageSelect(num + 1)}
          >
            {num + 1}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pagination;
