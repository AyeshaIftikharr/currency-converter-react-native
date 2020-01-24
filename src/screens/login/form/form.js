import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../../../ui-components/text-input';
import { Button } from '../../../ui-components/button';
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
      <TextInput placeholder='Password' secureTextEntry {...password} />
      <Button contained text={type} onPress={onSubmit} disabled={!isEnabled} />
    </StyledContainer>
  );
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
