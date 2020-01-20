import styled from 'styled-components';
import { View, Image, TouchableOpacity } from 'react-native';
import { getPadding } from '../../utils';

export const StyledView = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding-top: ${getPadding};
`;

export const StyledImage = styled(Image)`
  width: 18px;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  align-self: flex-end;
  padding: 5px 20px 5px 20px;
`;
