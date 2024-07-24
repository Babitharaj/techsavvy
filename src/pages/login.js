
import React from 'react'
import LogIn from '../components/loginComp/loginComp';
import styles from "../components/loginComp/loginComp.module.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function Login() {
  return (
  <div className={styles.main}>
    <div>
    <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h1">
           TECHSAVVY
          </Typography>
          
        </Box>
       
      </Container>
    </div>
  <LogIn/>
  </div>
   
  )
}

export default Login