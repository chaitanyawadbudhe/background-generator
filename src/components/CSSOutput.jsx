import React, { useRef } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const CSSOutput = ({ colors, gradientType, angle }) => {
    const cssCodeRef = useRef(null);

    const handleCopyClick = () => {
        if (cssCodeRef.current) {
            cssCodeRef.current.select();
            document.execCommand('copy');
        }
    };

    const gradient = gradientType === 'linear'
        ? `linear-gradient(${angle}deg, ${colors.join(', ')})`
        : gradientType === 'radial'
            ? `radial-gradient(${colors.join(', ')})`
            : gradientType === 'conic'
                ? `conic-gradient(from ${angle}deg, ${colors.join(', ')})`
                : gradientType === 'reflected'
                    ? `repeating-linear-gradient(${angle}deg, ${colors.join(', ')})`
                    : gradientType === 'circular'
                        ? `radial-gradient(circle, ${colors.join(', ')})`
                        : `linear-gradient(${angle}deg, ${colors.join(', ')})`;

    return (
        <Box mt={4}>
            <Typography variant="h6" gutterBottom>
                CSS Output
            </Typography>
            <Paper elevation={3} sx={{ padding: '16px' }}>
                <Box display="flex" alignItems="center">
          <textarea
              ref={cssCodeRef}
              value={`background: ${gradient};`}
              readOnly
              style={{ width: '100%', border: 'none', background: 'transparent', resize: 'none', fontFamily: 'monospace', color: 'inherit'}}
          />
                    <Button variant="outlined" color="primary" onClick={handleCopyClick} sx={{ marginLeft: '10px' }}>
                        Copy
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default CSSOutput;
