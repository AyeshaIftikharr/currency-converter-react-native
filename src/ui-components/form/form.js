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

export const Form = ({ type, onSubmit }) => {
  const username = useFormInput('');
  const password = useFormInput('');

  const isEnabled = username.value && password.value;
  return (
    <StyledContainer>
      <TextInput placeholder='Username' keyboardType='email-address' {...username} />
      <TextInput placeholder='Password' secureTextEntry={true} {...password} />
      <ContainedButton text={type} onPress={onSubmit} disabled={!isEnabled} />
    </StyledContainer>
  );
};

Form.propTypes = {
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};
