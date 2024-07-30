import React from 'react';
import { SketchPicker } from 'react-color';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from '@mui/material';

const GradientEditor = ({ colors, setColors, gradientType, setGradientType, angle, setAngle }) => {
    const handleColorChange = (color, index) => {
        const newColors = [...colors];
        newColors[index] = color.hex;
        setColors(newColors);
    };

    return (
        <Box mb={4}>
            <Typography variant="h6" gutterBottom>
                Gradient Editor
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mb={2}>
                {colors.map((color, index) => (
                    <SketchPicker
                        key={index}
                        color={color}
                        onChange={(color) => handleColorChange(color, index)}
                        width="220px"
                    />
                ))}
            </Box>
            <Box display="flex" justifyContent="center" gap={2} mb={2}>
                <Button variant="contained" color="primary" onClick={() => setColors([...colors, '#ffffff'])}>
                    Add Color
                </Button>
                <Button variant="contained" color="secondary" onClick={() => setColors(colors.slice(0, -1))}>
                    Remove Color
                </Button>
            </Box>
            <FormControl fullWidth margin="normal">
                <InputLabel>Gradient Type</InputLabel>
                <Select value={gradientType} onChange={(e) => setGradientType(e.target.value)}>
                    <MenuItem value="linear">Linear</MenuItem>
                    <MenuItem value="radial">Radial</MenuItem>
                    <MenuItem value="conic">Conic</MenuItem>
                    <MenuItem value="reflected">Reflected</MenuItem>
                    <MenuItem value="circular">Circular</MenuItem>
                </Select>
            </FormControl>
            {(gradientType === 'linear' || gradientType === 'reflected') && (
                <Box mt={2}>
                    <Typography gutterBottom>Angle</Typography>
                    <Slider
                        value={angle}
                        onChange={(e, newValue) => setAngle(newValue)}
                        aria-labelledby="angle-slider"
                        min={0}
                        max={360}
                    />
                </Box>
            )}
            { gradientType === 'conic'  && (
                <Box mt={2}>
                    <Typography gutterBottom>Starting Angle</Typography>
                    <Slider
                        value={angle}
                        onChange={(e, newValue) => setAngle(newValue)}
                        aria-labelledby="angle-slider"
                        min={0}
                        max={360}
                    />
                </Box>
            )}
        </Box>
    );
};

export default GradientEditor;
