export function toDisplayObject(product = {}, searchQuery = '') {
  const id = product.id ? product.id : 0;
  const originalPrice = id % 2 === 0 ? product.price : product.price * 1.2;
  const discountPercent = id % 2 === 0 ? 0 : 20;
  return {
    ...product,
    title: product.name ? product.name : '',
    imageSource: product.imageUrl ? { uri: product.imageUrl } : { uri: '' },
    discountPercent: discountPercent
  };
}
