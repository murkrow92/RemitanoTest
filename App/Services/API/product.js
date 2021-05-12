import { GET } from './base';

export const fetchProductList = () => {
  const path = 'v3/7af6f34b-b206-4bed-b447-559fda148ca5';
  return GET(path);
};
