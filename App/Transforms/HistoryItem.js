import { getHostAddress } from 'Utils/url';

const capitalize = s => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function transform(storeItem) {
  return {
    title: storeItem ? capitalize(getHostAddress(storeItem).host) : '',
    value: storeItem
  };
}

export default transform;
