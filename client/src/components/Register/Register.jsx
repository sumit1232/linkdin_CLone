import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Avatar,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Integrate with your MERN backend registration endpoint
    console.log('Registration attempt:', formData);
  };

  const isPasswordMatch = formData.password === formData.confirmPassword;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f3f2ef',
        pt: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3 }}>
        
          {/* Right side: Registration Form */}
          <Grid item xs={12} md={5} lg={5}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 5, lg: 6 },
                borderRadius: { xs: 2, md: 3 },
                border: '1px solid #e1e5e9',
                maxWidth: { xs: '100%', md: 480 },
                mx: 'auto',
                height: 'fit-content',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
                <Avatar
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    bgcolor: '#0a66c2',
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                  }}
                >
                  <PersonAddIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
                </Avatar>
                <Typography 
                  fontWeight={700} 
                  color="#0a66c2"
                  sx={{ mb: 1 }}
                >
                  Join LinkedIn
                </Typography>
                <Typography 
                 
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.85rem', sm: 'inherit' } }}
                >
                  Make professional connections with 1B+ people
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="firstName"
                      label="First name"
                      name="firstName"
                      autoComplete="given-name"
                   
                      onChange={handleChange}
                      sx={{ 
                        '& .MuiInputBase-root': {
                          height: { xs: 48, sm: 56 }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last name"
                      name="lastName"
                      autoComplete="family-name"
                   
                      onChange={handleChange}
                      sx={{ 
                        '& .MuiInputBase-root': {
                          height: { xs: 48, sm: 56 }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email or phone"
                      name="email"
                      autoComplete="email"
               
                      sx={{ 
                        mb: 2,
                        '& .MuiInputBase-root': {
                          height: { xs: 48, sm: 56 }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Create password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      sx={{ 
                        mb: 2,
                        '& .MuiInputBase-root': {
                          height: { xs: 48, sm: 56 }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      sx={{ 
                        '& .MuiInputBase-root': {
                          height: { xs: 48, sm: 56 }
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    backgroundColor: '#0a66c2',
                    '&:hover': { backgroundColor: '#004182' },
                    py: { xs: 1.8, sm: 1.5 },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 600,
                    height: { xs: 52, sm: 56 },
                    borderRadius: 2,
                  }}
                >
                  Agree & Join
                </Button>

                <Box sx={{ mt: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    gutterBottom
                    sx={{ fontSize: { xs: '0.9rem', sm: 'inherit' } }}
                  >
                    Already on LinkedIn?
                  </Typography>
                  <Button
                    variant="outlined"
                    href="/login"
                    size="large"
                    sx={{
                      textTransform: 'none',
                      borderColor: '#0a66c2',
                      color: '#0a66c2',
                      '&:hover': { 
                        borderColor: '#004182', 
                        backgroundColor: '#0a66c2', 
                        color: 'white' 
                      },
                      height: { xs: 48, sm: 52 },
                      borderRadius: 2,
                      px: 4,
                    }}
                  >
                    Sign in
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Registration;
