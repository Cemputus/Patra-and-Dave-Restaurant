import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './appbar1.css';
import logo from '../../../Images/Uganda_Christian_University_logo.jpg';
import { useNavigate } from 'react-router-dom';

export default function Appbar() {
  const navigate = useNavigate()
  const handlesignin = () => {
    navigate('/signup');
  };
  const handlelogin = () => {
    navigate('/login');
  };
  
  return (
    <div className="appbar">
      <AppBar className='appbar'>
        <Toolbar className='appbarWrapper'>
          <div className="logoContainer">
            <Box
              component="img"
              sx={{
                height: 40,
                width: 40,
                borderRadius: '50%',
                marginRight: '10px',
              }}
              alt="Logo"
              src={logo}
              className="logo"
            />
          </div>
          <div className="buttonContainer">
            <Button variant="contained" color="primary" className="button1" onClick={handlesignin}>
              Register
            </Button>
            <Button variant="contained" className="button2" onClick={handlelogin}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
