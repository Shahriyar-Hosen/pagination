// paginate
const pagination = (array, page_size, page_number) => {
  const data = array.slice(
    (page_number - 1) * page_size,
    page_number * page_size
  );

  return data;
};

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const pageSize = 5;
let pageNumber;

/* 
page_number (4) = How many pages will there be?

page_size = How much content to show on a page 
*/

console.log(pagination(array, pageSize, pageNumber));

// page_number_Finding = Finding the number of pages according to the length of the array

const page = array.length / pageSize; // 5 === page_size;

[...Array(page).keys()].map((num) => (
  <div key={num} onclick={() => (pageNumber = num + 1)}>
    {num + 1}
  </div>
));
