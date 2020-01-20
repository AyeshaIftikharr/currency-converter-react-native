import { Platform } from 'react-native';

export const getPadding = Platform.OS === 'ios' ? '20px' : '0px';
