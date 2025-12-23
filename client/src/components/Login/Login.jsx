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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {


  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f3f2ef',
        pt: 8,
        px: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                border: '1px solid #e1e5e9',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Avatar
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    bgcolor: '#0a66c2',
                    width: 56,
                    height: 56,
                  }}
                >
                  <LockOutlinedIcon sx={{ fontSize: 28 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={700} color="#0a66c2">
                  Sign in
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay updated on your professional world
                </Typography>
              </Box>

              <Box component="form"  noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email or phone"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={{ mb: 3 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{ mb: 3 }}
                />
                <Link href="#" underline="hover" variant="body2" sx={{ display: 'block', mb: 3 }}>
                  Forgot password?
                </Link>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#0a66c2',
                    '&:hover': { backgroundColor: '#004182' },
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  Sign in
                </Button>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    New to LinkedIn?
                  </Typography>
                  <Button
                    variant="outlined"
                    href="/register"
                    sx={{
                      textTransform: 'none',
                      borderColor: '#0a66c2',
                      color: '#0a66c2',
                      '&:hover': { borderColor: '#004182', backgroundColor: '#0a66c2', color: 'white' },
                    }}
                  >
                    Join now
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

export default Login;
