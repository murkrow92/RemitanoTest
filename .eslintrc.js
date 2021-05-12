module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': ['off']
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  }
};
