export default (items) => {
  if (items.length === 0) {
    return 0;
  }
  else if (items.length % 2 === 0) {
    return items[0].price * items.length / 4
  } 
  else {
    return items[0].price * (items.length - 1) / 4
  }
}