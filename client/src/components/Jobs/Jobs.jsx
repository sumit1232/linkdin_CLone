import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  SwipeableDrawer,
  Badge,
  InputBase,
} from '@mui/material';
import {
  Work,
  Search as SearchIcon,
  LocationOn,
  AccessTime,
  Bookmark,
  BookmarkBorder,
  FilterList,
  ArrowForward,
  Home,
  People,
  Message,
  Notifications,
  Menu,
  Close,
  PersonAdd,
  Add,
} from '@mui/icons-material';

const Jobs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [savedJobs, setSavedJobs] = useState([1, 3]);

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Google',
      location: 'Bangalore, Karnataka, India',
      time: '2 days ago',
      salary: '₹25L - ₹35L/yr',
      type: 'Full-time',
      level: 'Senior',
      logo: '#fbbc04',
    },
    {
      id: 2,
      title: 'Full Stack Developer (MERN)',
      company: 'Microsoft',
      location: 'Hyderabad, Telangana',
      time: '1 hour ago',
      salary: '₹20L - ₹30L/yr',
      type: 'Full-time',
      level: 'Mid-Senior',
      logo: '#00c853',
    },
    {
      id: 3,
      title: 'React Native Developer',
      company: 'Amazon',
      location: 'Noida, Uttar Pradesh',
      time: '5 hours ago',
      salary: '₹18L - ₹25L/yr',
      type: 'Contract',
      level: 'Mid-Senior',
      logo: '#ff9900',
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Flipkart',
      location: 'Remote',
      time: '3 days ago',
      salary: '₹15L - ₹22L/yr',
      type: 'Full-time',
      level: 'Mid',
      logo: '#2874f0',
    },
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev =>
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
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
            selected={window.location.pathname === '/jobs'}
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
            <Badge badgeContent={3} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: '0.6rem' } }}>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Notifications />
              </IconButton>
            </Badge>
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
                { icon: Work, to: '/jobs', active: true },
                { icon: Message, to: '/message' },
                { icon: Notifications, to: '/notifications' },
              ].map((item) => (
                <ListItem
                  key={item.to}
                  button
                  component={RouterLink}
                  to={item.to}
                  selected={item.active || window.location.pathname === item.to}
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
                    <item.icon sx={{ 
                      color: (item.active || window.location.pathname === item.to) ? 'white' : '#0a66c2' 
                    }} />
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

        {/* Jobs Content */}
        <Box sx={{ flex: 1, py: 3 }}>
          <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 3 } }}>
            {/* Header */}
            <Paper sx={{ p: 4, mb: 3, borderRadius: 2, border: '1px solid #e1e5e9' }}>
              <Typography variant="h4" fontWeight={700} color="#0a66c2" gutterBottom>
                Jobs you might be interested in
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <TextField
                  variant="outlined"
                  placeholder="Search jobs by title, company, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{
                    flex: 1,
                    minWidth: { xs: 250, md: 400 },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      height: 48,
                    },
                  }}
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                />
                <Button
                  variant="contained"
                  startIcon={<FilterList />}
                  sx={{
                    backgroundColor: '#0a66c2',
                    borderRadius: 2,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Filters
                </Button>
              </Box>
            </Paper>

            <Grid container spacing={3}>
              {/* Left Filters - Desktop Only */}
              <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #e1e5e9', height: 'fit-content' }}>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Filters
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Location" secondary="India" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Job Type" secondary="Full-time" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Experience Level" secondary="Mid-Senior level" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Date Posted" secondary="Past week" />
                    </ListItem>
                  </List>
                  <Button fullWidth variant="outlined" sx={{ mt: 2, borderRadius: 2 }}>
                    Clear all
                  </Button>
                </Paper>
              </Grid>

              {/* Main Jobs Feed */}
              <Grid item xs={12} md={9}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" fontWeight={600}>
                    {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
                  </Typography>
                  <Chip label="Easy Apply" color="primary" variant="outlined" size="small" />
                </Box>

                {/* Job Cards */}
                {filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    sx={{
                      mb: 2.5,
                      borderRadius: 2,
                      border: '1px solid #e1e5e9',
                      boxShadow: 'none',
                      '&:hover': { boxShadow: '0 4px 12px rgb(0 0 0 / 10%)' },
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      {/* Job Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar sx={{ width: 48, height: 48, bgcolor: job.logo }}>
                            {job.company[0]}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                              {job.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                              {job.company}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <LocationOn fontSize="small" color="action" />
                                <Typography variant="body2" color="text.secondary">
                                  {job.location}
                                </Typography>
                              </Box>
                              <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTime fontSize="small" color="action" />
                                <Typography variant="body2" color="text.secondary">
                                  {job.time}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <IconButton
                          onClick={() => toggleSaveJob(job.id)}
                          sx={{ color: savedJobs.includes(job.id) ? '#0a66c2' : 'text.secondary' }}
                        >
                          {savedJobs.includes(job.id) ? <Bookmark /> : <BookmarkBorder />}
                        </IconButton>
                      </Box>

                      {/* Job Details */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        <Chip label={job.type} size="small" color="primary" variant="outlined" />
                        <Chip label={job.level} size="small" color="default" variant="outlined" />
                        <Chip label={job.salary} size="small" color="success" variant="outlined" />
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      {/* Action Buttons */}
                      <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Button
                          fullWidth={!isMobile}
                          variant="contained"
                          sx={{
                            backgroundColor: '#0a66c2',
                            borderRadius: 2,
                            textTransform: 'none',
                            py: 1.2,
                            fontWeight: 600,
                            flex: 2,
                          }}
                          endIcon={<ArrowForward />}
                          component={RouterLink} to='/applynow'
                        >
                          Apply now
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: '#0a66c2',
                            color: '#0a66c2',
                            borderRadius: 2,
                            textTransform: 'none',
                            py: 1.2,
                            fontWeight: 500,
                            flex: 1,
                          }}
                        >
                          Save
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                ))}

                {filteredJobs.length === 0 && (
                  <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
                    <Work sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h6" color="text.secondary" mb={1}>
                      No jobs found
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Try adjusting your search or filters
                    </Typography>
                  </Paper>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Jobs;
