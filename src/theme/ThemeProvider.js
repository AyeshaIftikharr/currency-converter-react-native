import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as Provider } from 'styled-components';
import { connect } from 'react-redux';

const CustomThemeProvider = ({ theme, children }) => <Provider theme={theme}>{children}</Provider>;

CustomThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any,
};

const mapStateToProps = ({ theme }) => ({ theme: { ...theme.theme } });

export const ThemeProvider = connect(mapStateToProps)(CustomThemeProvider);
