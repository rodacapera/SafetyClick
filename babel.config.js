module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx'
        ],
        root: '.',
        alias: {
          '@src': './src/',
          '@assets': './src/assets/'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel']
    }
  }
};
