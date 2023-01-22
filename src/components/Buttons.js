import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#FFFDD0',
  borderColor: 'white',
  color: 'black',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'black',
    boxShadow: 'none',
    color: '#ffffff'
  },
});


export default function CustomizedButtons() {
  return (
      <BootstrapButton variant="contained" disableRipple>
        View Kula Outreach
      </BootstrapButton>
  );
}
