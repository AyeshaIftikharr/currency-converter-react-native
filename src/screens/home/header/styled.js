import styled from 'styled-components';
import { View, Image, TouchableOpacity } from 'react-native';
import { getPadding } from '../../../utils';

export const StyledView = styled(View)`
  left: 0;
  padding-top: ${getPadding};
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledImage = styled(Image)`
  width: 18px;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  align-self: flex-end;
  padding: 5px 20px 5px 20px;
`;
