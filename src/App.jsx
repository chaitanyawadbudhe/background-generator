import React, { useState } from 'react';
import { Container, Typography, CssBaseline, Switch, FormControlLabel, createTheme, ThemeProvider } from '@mui/material';
import GradientEditor from './components/GradientEditor';
import GradientPreview from './components/GradientPreview';
import CSSOutput from './components/CSSOutput';
import './App.css';

const App = () => {
    const [colors, setColors] = useState(['#ff0000', '#00ff00']);
    const [gradientType, setGradientType] = useState('linear');
    const [angle, setAngle] = useState(90);
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>
                    CSS Gradient Generator
                </Typography>
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
                    label="Dark Mode"
                    sx={{ marginBottom: '20px' }}
                />
                <GradientEditor
                    colors={colors}
                    setColors={setColors}
                    gradientType={gradientType}
                    setGradientType={setGradientType}
                    angle={angle}
                    setAngle={setAngle}
                />
                <GradientPreview colors={colors} gradientType={gradientType} angle={angle} />
                <CSSOutput colors={colors} gradientType={gradientType} angle={angle} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
