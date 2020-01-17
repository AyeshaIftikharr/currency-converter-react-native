import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const CustomThemeProvider = ({ theme }) => <ThemeProvider theme={theme} />;

const mapStateToProps = ({ theme }) => ({ theme: { ...theme.theme } });

export default connect(mapStateToProps)(CustomThemeProvider);
