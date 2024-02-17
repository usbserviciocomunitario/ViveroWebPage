import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Arrow = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <IconButton onClick={handleClick} style={{ color: '#3f8880', marginTop: '40px', marginLeft: '40px' }}>
      <ArrowBack style={{ fontSize: "50px" }}/>
    </IconButton>
  );
};

export default Arrow;
