import React, { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import html2canvas from 'html2canvas'; // Import html2canvas library for converting HTML to canvas

const GradientPreview = ({ colors, gradientType, angle }) => {
    const previewRef = useRef(null);

    const handleExportClick = () => {
        console.log(previewRef.current);
        if (previewRef.current) {
            html2canvas(previewRef.current).then(canvas => {
                const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
                const link = document.createElement('a');
                link.href = image;
                link.download = 'gradient.png';
                link.click();
            });
        }
    };

    let gradient;

    switch (gradientType) {
        case 'linear':
            gradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
            break;
        case 'radial':
            gradient = `radial-gradient(${colors.join(', ')})`;
            break;
        case 'conic':
            gradient = `conic-gradient(from ${angle}deg, ${colors.join(', ')})`;
            break;
        case 'reflected':
            gradient = `repeating-linear-gradient(${angle}deg, ${colors.join(', ')})`;
            break;
        case 'circular':
            gradient = `radial-gradient(circle,${colors.join(', ')})`;
            break;
        default:
            gradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
            break;
    }


    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Gradient Preview
            </Typography>
            <div
                ref={previewRef}
                style={{
                    background: gradient,
                    width: '100%',
                    height: '200px',
                    marginTop: '20px',
                    borderRadius: '8px',
                }
            }
            />
            {console.log(gradient)}
            <Box mt={2} textAlign="center">
                <Button variant="outlined" color="primary" onClick={handleExportClick}>
                    Export as Image
                </Button>
            </Box>
        </Box>
    );
};

export default GradientPreview;
