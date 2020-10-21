import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    gradientBackground: "linear-gradient(45deg, #a1ece7 30%, #29c7c0 90%)",
    fontFamily: "Verdana",
    primaryColor: '#a1ece7',
    secondaryColor: 'green',
    typography: {
        fontFamily: "Verdana"
    }
});

const Theme = props => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;