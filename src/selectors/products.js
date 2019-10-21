export default (products, { text }) => {
  return products.filter((product) => {
    return text === '' || product.name.toLowerCase().includes(text.toLowerCase());
  });
};