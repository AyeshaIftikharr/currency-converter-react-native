import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const CustomThemeProvider = ({ theme, children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

CustomThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any,
};

const mapStateToProps = ({ theme }) => ({ theme: { ...theme.theme } });

export default connect(mapStateToProps)(CustomThemeProvider);
