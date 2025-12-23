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
  Tabs,
  Tab,
  Badge,
  IconButton,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  SwipeableDrawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  People,
  PersonAdd,
  MailOutline,
  Search as SearchIcon,
  BusinessCenter,
  School,
  Home,
  Work,
  Message,
  Notifications,
  Menu,
  Close,
} from '@mui/icons-material';

const Mynetwok = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const connections = [
    {
      id: 1,
      name: 'Priya Sharma',
      title: 'Frontend Developer at Zomato',
      location: 'Bangalore, KA',
      connection: '2nd',
      avatar: '#ff6b6b',
      mutual: 12,
    },
    {
      id: 2,
      name: 'Rahul Patel',
      title: 'Full Stack Engineer at Paytm',
      location: 'Noida, UP',
      connection: '1st',
      avatar: '#4ecdc4',
      mutual: 8,
    },
    {
      id: 3,
      name: 'Aishwarya Singh',
      title: 'Product Manager at Swiggy',
      location: 'Remote',
      connection: '2nd',
      avatar: '#45b7d1',
      mutual: 15,
    },
  ];

  const suggestions = [
    {
      id: 1,
      name: 'Neha Gupta',
      title: 'React Developer at Cred',
      location: 'Mumbai, MH',
      mutual: 23,
      company: 'Cred',
    },
    {
      id: 2,
      name: 'Vikram Singh',
      title: 'MERN Stack Developer',
      location: 'Hyderabad, TS',
      mutual: 18,
      company: 'Freelancer',
    },
  ];

  const pendingInvites = [
    { id: 1, name: 'Ankit Kumar', title: 'DevOps Engineer' },
    { id: 2, name: 'Sneha Rani', title: 'UI/UX Designer' },
  ];

  const filteredConnections = connections.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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

  const TabPanel = ({ children, value, index }) => (
    <Box sx={{ display: value === index ? 'block' : 'none' }}>
      {children}
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
          </Paper>

          {/* Right Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            <IconButton sx={{ color: 'text.secondary' }}>
              <Notifications />
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
              <Typography variant="h6" fontWeight={700} color="#0a66c2" sx={{ fontSize: '1rem', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
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
              ].map((item, index) => (
                <ListItem
                  key={item.to}
                  button
                  component={RouterLink}
                  to={item.to}
                  selected={window.location.pathname === item.to}
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
                    <item.icon sx={{ color: window.location.pathname === item.to ? 'white' : '#0a66c2' }} />
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

        {/* Main Content Area */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <Box sx={{ maxWidth: 1400, mx: 'auto', px: { xs: 2, md: 3 }, pt: 3 }}>
            {/* Header */}
            <Paper sx={{ p: { xs: 3, md: 4 }, mb: 4, borderRadius: 2, border: '1px solid #e1e5e9' }}>
              <Typography variant="h4" fontWeight={700} color="#0a66c2" mb={2}>
                My Network
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' } }}>
                <Box sx={{ flex: 1, maxWidth: 400 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search your network by name or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                    }}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button
                    startIcon={<People />}
                    variant="contained"
                    sx={{
                      backgroundColor: '#0a66c2',
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 3,
                    }}
                  >
                    Find people you know
                  </Button>
                  <Button
                    startIcon={<PersonAdd />}
                    variant="outlined"
                    sx={{
                      borderColor: '#0a66c2',
                      color: '#0a66c2',
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 3,
                    }}
                  >
                    Add people
                  </Button>
                </Box>
              </Box>
            </Paper>

            <Grid container spacing={3}>
              {/* Left Sidebar - Stats */}
              <Grid item xs={12} md={3}>
                <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #e1e5e9', height: 'fit-content' }}>
                  <Typography variant="h6" fontWeight={600} mb={3} color="#0a66c2">
                    Your network
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                      1,234
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      connections
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Button fullWidth variant="outlined" sx={{ borderRadius: 2, textTransform: 'none' }}>
                      Find people you know
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: 2, backgroundColor: '#0a66c2', textTransform: 'none' }}>
                      Premium
                    </Button>
                  </Box>
                </Paper>

                {/* Pending Invites */}
                <Paper sx={{ p: 3, mt: 3, borderRadius: 2, border: '1px solid #e1e5e9' }}>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Invitations <Badge badgeContent={pendingInvites.length} color="primary" sx={{ ml: 1 }} />
                  </Typography>
                  {pendingInvites.map((invite) => (
                    <Box key={invite.id} sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1.5 }}>
                      <Avatar sx={{ width: 40, height: 40, bgcolor: '#e1e5e9' }}>
                        {invite.name[0]}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" fontWeight={600}>{invite.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{invite.title}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button size="small" variant="outlined">Accept</Button>
                        <IconButton><MailOutline fontSize="small" /></IconButton>
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </Grid>

              {/* Main Content */}
              <Grid item xs={12} md={9}>
                {/* Tabs */}
                <Paper sx={{ p: 3, borderRadius: 2, border: '1px solid #e1e5e9', mb: 3 }}>
                  <Tabs value={activeTab} onChange={handleTabChange} sx={{ '& .MuiTab-root': { textTransform: 'none' } }}>
                    <Tab label="Your Connections" />
                    <Tab label="People you may know" />
                  </Tabs>
                </Paper>

                {/* Tab Panels - Your existing content */}
                <TabPanel value={activeTab} index={0}>
                  <Typography variant="h5" fontWeight={600} mb={3}>
                    Your Connections ({filteredConnections.length})
                  </Typography>
                  <Grid container spacing={2}>
                    {filteredConnections.map((person) => (
                      <Grid item xs={12} sm={6} md={6} lg={4} key={person.id}>
                        <Card sx={{ borderRadius: 2, border: '1px solid #e1e5e9', height: '100%' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                              <Avatar sx={{ width: 56, height: 56, bgcolor: person.avatar }}>
                                {person.name[0]}
                              </Avatar>
                              <Box>
                                <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                                  {person.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {person.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                  {person.location} • {person.connection} connection
                                  {person.mutual ? ` • ${person.mutual} mutual` : ''}
                                </Typography>
                              </Box>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              <Chip label={person.connection} size="small" />
                              {person.mutual && (
                                <Chip label={`${person.mutual} mutual`} size="small" color="primary" variant="outlined" />
                              )}
                            </Box>
                            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                              <Button
                                fullWidth
                                variant="outlined"
                                size="small"
                                sx={{ textTransform: 'none', borderRadius: 2 }}
                              >
                                Message
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                sx={{
                                  backgroundColor: '#0a66c2',
                                  borderRadius: 2,
                                  textTransform: 'none',
                                  px: 2,
                                }}
                              >
                                Connect
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>

                <TabPanel value={activeTab} index={1}>
                  <Typography variant="h5" fontWeight={600} mb={3}>
                    People you may know
                  </Typography>
                  <Grid container spacing={2}>
                    {suggestions.map((person) => (
                      <Grid item xs={12} sm={6} md={6} lg={4} key={person.id}>
                        <Card sx={{ borderRadius: 2, border: '1px solid #e1e5e9', height: '100%' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                              <Avatar sx={{ width: 56, height: 56, bgcolor: '#e1e5e9' }}>
                                {person.name[0]}
                              </Avatar>
                              <Box>
                                <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                                  {person.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {person.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                  {person.location} • {person.mutual} mutual connections
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                              <Chip icon={<BusinessCenter />} label={person.company} size="small" />
                              <Chip icon={<School />} label="GTU" size="small" />
                            </Box>
                            <Button
                              fullWidth
                              variant="contained"
                              startIcon={<PersonAdd />}
                              sx={{
                                backgroundColor: '#0a66c2',
                                borderRadius: 2,
                                textTransform: 'none',
                                py: 1.2,
                                fontWeight: 600,
                              }}
                            >
                              Connect
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mynetwok;
