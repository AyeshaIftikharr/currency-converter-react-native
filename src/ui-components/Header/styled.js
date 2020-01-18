import styled from 'styled-components';
import { View, Image, TouchableOpacity, Platform } from 'react-native';

export const StyledView = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding-top: ${Platform.OS === 'ios' ? '20px' : '0px'};
`;

export const StyledImage = styled(Image)`
  width: 18px;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  align-self: flex-end;
  padding: 5px 20px 5px 20px;
`;
