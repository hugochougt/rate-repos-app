import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#ffffff',
    barBg: '#24292e',
    primary: '#0366d6',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Sans-serif',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
