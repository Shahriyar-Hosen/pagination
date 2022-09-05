import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginateNumber } from "../../features/paginate/paginateSlice";

// pagination with tailwind css

const Pagination = () => {
  const dispatch = useDispatch();

  const { pageNumber } = useSelector((state) => state.paginate);

  const page = useSelector((state) =>
    Math.ceil(state.videos.videos.length / 5)
  );

  const handlePageSelect = (pageNumber) => {
    dispatch(paginateNumber(pageNumber));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {[...Array(page).keys()].map((num) => (
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
