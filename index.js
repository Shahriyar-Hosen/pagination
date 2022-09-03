// paginate
const pagination = (array, page_size, page_number) => {
  const data = array.slice(
    (page_number - 1) * page_size,
    page_number * page_size
  );

  return data;
};

const abc = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

/* 
page_number = How many pages will there be?

page_size = How much content to show on a page 
*/

console.log(pagination(abc, 5, 4));
