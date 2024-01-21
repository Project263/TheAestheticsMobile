module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './Components',
          screens: './Screens',
          icons: './assets/Icons',
        },
      },
    ],
  ],
};
