export default (items) => {
  return items
    .map((item) => item.price)
    .reduce((sum, value) => sum + value, 0);
};