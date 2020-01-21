import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../text-input';
import { ContainedButton } from '../buttons';
import { StyledContainer } from './styled';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = text => setValue(text);

  return {
    value,
    onChangeText: handleChange,
  };
}

export const Form = ({ type, navigate }) => {
  const username = useFormInput('');
  const password = useFormInput('');

  const gotoHomeDirectory = () => {
    setTimeout(() => {
      navigate('Home');
    }, 500);
  };

  const isEnabled = username.value && password.value;
  return (
    <StyledContainer>
      <TextInput placeholder="Username" keyboardType="email-address" {...username} />
      <TextInput placeholder="Password" secureTextEntry={true} {...password} />
      <ContainedButton text={type} onPress={gotoHomeDirectory} disabled={!isEnabled} />
    </StyledContainer>
  );
};

Form.propTypes = {
  type: PropTypes.string,
  navigate: PropTypes.func,
};
