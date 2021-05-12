module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          Assets: './App/Assets',
          Fonts: './App/Assets/Fonts',
          Images: './App/Assets/Images',
          Business: './App/Business',
          Common: './App/Common',
          Components: './App/Components',
          Config: './App/Config',
          Containers: './App/Containers',
          Data: './App/Data',
          Fixtures: './App/Fixtures',
          Hooks: './App/Hooks',
          Navigation: './App/Navigation',
          Providers: './App/Providers',
          Reduxes: './App/Reduxes',
          Actions: './App/Reduxes/Actions',
          Reducers: './App/Reduxes/Reducers',
          Sagas: './App/Sagas',
          Services: './App/Services',
          Styles: './App/Styles',
          Themes: './App/Themes',
          Transforms: './App/Transforms',
          Translations: './App/Translations',
          Utils: './App/Utils'
        }
      }
    ]
  ]
};
