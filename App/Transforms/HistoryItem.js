import { getHostAddress } from 'Utils/url';

function transform(storeItem) {
  return {
    title: storeItem ? getHostAddress(storeItem).host : '',
    value: storeItem
  };
}

export default transform;
