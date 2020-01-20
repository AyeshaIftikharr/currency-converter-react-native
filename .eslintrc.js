module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-single'],
  },
};
