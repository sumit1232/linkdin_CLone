import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
  Chip,
  Grid,
  Card,
  CardContent,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  SwipeableDrawer,
  Badge,
  InputBase,
} from '@mui/material';
import {
  Work,
  LocationOn,
  AccessTime,
  AttachFile,
  CheckCircle,
  ArrowForward,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Home,
  People,
  Message,
  Notifications,
  Menu,
  Close,
  Search as SearchIcon,
  PersonAdd,
  Add,
} from '@mui/icons-material';

const JobApply = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
    experience: '',
    salaryExpectation: '',
    noticePeriod: '',
    linkedinProfile: '',
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const steps = ['Personal Info', 'Experience', 'Review & Submit'];

  const jobDetails = {
    title: 'Senior Frontend Developer',
    company: 'Google',
    location: 'Bangalore, Karnataka, India',
    salary: '₹25L - ₹35L/yr',
    type: 'Full-time',
    logo: '#fbbc04',
    description: 'Build scalable React applications with modern frontend technologies.',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData, jobDetails);
    alert('Application submitted successfully! 🎉');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100vh' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={700} color="#0a66c2">
          LinkedIn
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ mt: 1 }}>
        {[
          { icon: Home, text: 'Home', to: '/home' },
          { icon: People, text: 'My Network', to: '/mynetwork' },
          { icon: Work, text: 'Jobs', to: '/jobs' },
          { icon: Message, text: 'Messaging', to: '/message' },
          { icon: Notifications, text: 'Notifications', to: '/notifications' },
        ].map((item) => (
          <ListItem 
            key={item.text} 
            button 
            component={RouterLink}
            to={item.to}
            onClick={() => setMobileOpen(false)}
          >
            <ListItemIcon><item.icon sx={{ color: '#0a66c2' }} /></ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem button component={RouterLink} to="/profile" onClick={() => setMobileOpen(false)}>
          <ListItemIcon><PersonAdd /></ListItemIcon>
          <ListItemText primary="Me" secondary="View & edit profile" />
        </ListItem>
      </List>
    </Box>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="LinkedIn Profile (Optional)"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleInputChange}
                helperText="Add your LinkedIn profile for faster verification"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper sx={{ p: 3, height: 'fit-content' }}>
                <Typography variant="h6" fontWeight={600} mb={2} color="#0a66c2">
                  Quick Apply Benefits
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: '#0a66c2', fontSize: 20 }} />
                    <Typography variant="body2">1-click apply</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: '#0a66c2', fontSize: 20 }} />
                    <Typography variant="body2">Skills matching</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircle sx={{ color: '#0a66c2', fontSize: 20 }} />
                    <Typography variant="body2">No account required</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                label="Cover Letter (Optional)"
                name="coverLetter"
                multiline
                rows={4}
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Why are you perfect for this role? (Max 300 words)"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  startIcon={<AttachFile />}
                  sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
                >
                  {formData.resume ? formData.resume.name : 'Upload Resume (PDF/DOC)'}
                  <input
                    hidden
                    accept=".pdf,.doc,.docx"
                    type="file"
                    onChange={handleFileChange}
                  />
                </Button>
                <FormControl fullWidth>
                  <InputLabel>Experience Level</InputLabel>
                  <Select
                    name="experience"
                    value={formData.experience}
                    label="Experience Level"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="0-1">0-1 Year</MenuItem>
                    <MenuItem value="1-3">1-3 Years</MenuItem>
                    <MenuItem value="3-5">3-5 Years</MenuItem>
                    <MenuItem value="5+">5+ Years</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  Job Match Score
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" fontWeight={600} sx={{ mb: 1 }}>
                    92% Match
                  </Typography>
                  <Box sx={{ 
                    height: 8, 
                    backgroundColor: '#e1e5e9', 
                    borderRadius: 4, 
                    overflow: 'hidden' 
                  }}>
                    <Box sx={{ 
                      height: '100%', 
                      width: '92%', 
                      backgroundColor: '#0a66c2',
                      borderRadius: 4 
                    }} />
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Skills Match
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {['React', 'JavaScript', 'TypeScript', 'MUI'].map((skill) => (
                    <Chip key={skill} label={skill} size="small" color="primary" />
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h5" fontWeight={600} mb={3} color="#0a66c2">
              Review your application
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="subtitle1" fontWeight={600} mb={2}>
                    Personal Information
                  </Typography>
                  <Typography><strong>Name:</strong> {formData.fullName || 'Not provided'}</Typography>
                  <Typography><strong>Email:</strong> {formData.email || 'Not provided'}</Typography>
                  <Typography><strong>Phone:</strong> {formData.phone || 'Not provided'}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="subtitle1" fontWeight={600} mb={2}>
                    Application Details
                  </Typography>
                  <Typography><strong>Experience:</strong> {formData.experience || 'Not provided'}</Typography>
                  <Typography><strong>Resume:</strong> {formData.resume ? 'Uploaded' : 'Not uploaded'}</Typography>
                  <Typography><strong>Cover Letter:</strong> {formData.coverLetter ? 'Added' : 'Not provided'}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f3f2ef' }}>
      {/* Top Navbar */}
      <AppBar position="static" sx={{ 
        backgroundColor: 'white', 
        boxShadow: '0 1px 0 rgb(0 0 0 / 5%)',
        zIndex: 1200 
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
          {/* Logo + Mobile Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                mr: 1,
                color: '#0a66c2'
              }}
            >
              <Menu />
            </IconButton>
            <Typography 
              variant="h6" 
              fontWeight={700} 
              color="#0a66c2" 
              sx={{ 
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                cursor: 'pointer' 
              }}
            >
              LinkedIn
            </Typography>
          </Box>

          {/* Search */}
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              width: { sm: 300, md: 400 },
              maxWidth: '100%',
              borderRadius: 50,
              border: '1px solid #e1e5e9',
              ml: { sm: 1 },
            }}
          >
            <IconButton type="submit" sx={{ p: '10px', color: 'text.secondary' }}>
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          </Paper>

          {/* Right Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            <IconButton sx={{ color: 'text.secondary' }}>
              <Notifications />
            </IconButton>
            <IconButton sx={{ 
              color: '#0a66c2',
              bgcolor: 'rgba(10, 102, 194, 0.1)',
              '&:hover': { bgcolor: 'rgba(10, 102, 194, 0.15)' },
              borderRadius: 2,
              width: 44,
              height: 44
            }}>
              <Add />
            </IconButton>
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#0a66c2' }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <SwipeableDrawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            height: '100vh'
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </SwipeableDrawer>

      {/* Main Content */}
      <Box sx={{ display: 'flex' }}>
        {/* Desktop Sidebar */}
        {!isMobile && (
          <Paper sx={{
            width: 72,
            height: '100vh',
            borderRight: '1px solid #e1e5e9',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            bgcolor: 'white',
            position: 'sticky',
            top: 0
          }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e1e5e9', display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#0a66c2" sx={{ fontSize: '0.9rem', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                LinkedIn
              </Typography>
            </Box>
            
            <List sx={{ flex: 1, px: 1, py: 2 }}>
              {[
                { icon: Home, to: '/home' },
                { icon: People, to: '/mynetwork' },
                { icon: Work, to: '/jobs' },
                { icon: Message, to: '/message' },
                { icon: Notifications, to: '/notifications' },
              ].map((item) => (
                <ListItem
                  key={item.to}
                  button
                  component={RouterLink}
                  to={item.to}
                  selected={window.location.pathname.includes('job')}
                  sx={{
                    borderRadius: 3,
                    mx: 0.5,
                    my: 0.5,
                    justifyContent: 'center',
                    '&.Mui-selected': {
                      bgcolor: '#0a66c2',
                      color: 'white',
                      '& .MuiListItemIcon-root': { color: 'white' },
                    },
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 48, justifyContent: 'center' }}>
                    <item.icon sx={{ color: window.location.pathname.includes('job') ? 'white' : '#0a66c2' }} />
                  </ListItemIcon>
                </ListItem>
              ))}
              
              <Divider sx={{ my: 2, mx: 1.5 }} />
              
              <ListItem
                button
                component={RouterLink}
                to="/profile"
                sx={{
                  borderRadius: 3,
                  mx: 0.5,
                  my: 0.5,
                  justifyContent: 'center',
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 48, justifyContent: 'center' }}>
                  <PersonAdd sx={{ color: '#0a66c2' }} />
                </ListItemIcon>
              </ListItem>
            </List>
          </Paper>
        )}

        {/* Job Apply Content */}
        <Box sx={{ flex: 1, py: { xs: 2, md: 4 } }}>
          <Box sx={{ maxWidth: 1000, mx: 'auto', px: { xs: 2, md: 3 } }}>
            {/* Job Header */}
            <Paper sx={{ p: { xs: 3, md: 4 }, mb: 4, borderRadius: 2, border: '1px solid #e1e5e9' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Avatar sx={{ width: 64, height: 64, bgcolor: jobDetails.logo }}>
                  {jobDetails.company[0]}
                </Avatar>
                <Box>
                  <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                    {jobDetails.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 0.5 }}>
                    {jobDetails.company}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                    <Chip label={jobDetails.location} icon={<LocationOn />} size="small" />
                    <Chip label={jobDetails.salary} size="small" color="success" />
                    <Chip label={jobDetails.type} size="small" color="primary" />
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* Stepper */}
            <Paper sx={{ p: 4, borderRadius: 2, border: '1px solid #e1e5e9', mb: 4 }}>
              <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <form onSubmit={handleSubmit}>
                {getStepContent(activeStep)}
                
                <Divider sx={{ my: 4 }} />
                
                {/* Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    startIcon={<KeyboardArrowLeft />}
                    sx={{ textTransform: 'none' }}
                  >
                    Back
                  </Button>
                  
                  {activeStep === steps.length - 1 ? (
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<CheckCircle />}
                      sx={{
                        backgroundColor: '#0a66c2',
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      Submit Application
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNext}
                      variant="contained"
                      endIcon={<KeyboardArrowRight />}
                      sx={{
                        backgroundColor: '#0a66c2',
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      Next Step
                    </Button>
                  )}
                </Box>
              </form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobApply;
