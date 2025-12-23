import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
  Card,
  Drawer,
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
} from '@mui/material';
import {
  Home,
  Search,
  People,
  Work,
  Article,
  Message,
  Notifications,
  Menu,
  Add,
  ThumbUp,
  ChatBubble,
  Share,
  PersonAdd,
  Close,
} from '@mui/icons-material';

const HomePage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
          { icon: Home, text: 'Home' },
          { icon: People, text: 'My Network' },
          { icon: Work, text: 'Jobs' },
          { icon: Message, text: 'Messaging' },
          { icon: Notifications, text: 'Notifications' },
        ].map((item, index) => (
          <ListItem key={item.text} button onClick={() => setMobileOpen(false)}>
            <ListItemIcon><item.icon sx={{ color: '#0a66c2' }} /></ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem button>
          <ListItemIcon><PersonAdd /></ListItemIcon>
          <ListItemText primary="Me" secondary="View & edit profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f3f2ef' }}>
      {/* Mobile Navbar */}
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

          {/* Search - Hidden on XS, full on larger */}
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              width: { sm: 250, md: 400 },
              maxWidth: '100%',
              borderRadius: 50,
              border: '1px solid #e1e5e9',
              ml: { sm: 1 },
              mr: { xs: 1, sm: 'auto' }
            }}
          >
            <IconButton type="submit" sx={{ p: '10px', color: 'text.secondary' }}>
              <Search />
            </IconButton>
            <InputBase 
              sx={{ ml: 1, flex: 1, fontSize: '0.95rem' }} 
              placeholder="Search" 
            />
          </Paper>

          {/* Right Icons - Compact on mobile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            <IconButton sx={{ 
              color: { xs: 'text.secondary', md: '#0a66c2' },
              display: { xs: 'none', sm: 'flex' }
            }}>
              <Home />
            </IconButton>
            <IconButton sx={{ color: 'text.secondary' }}>
              <Notifications />
            </IconButton>
            <IconButton sx={{ color: 'text.secondary' }}>
              <Add />
            </IconButton>
            <Avatar 
              sx={{ 
                width: { xs: 36, sm: 40 }, 
                height: { xs: 36, sm: 40 }, 
                bgcolor: '#0a66c2',
                mx: 0.5 
              }}   
              component={RouterLink} to='/profile'
            />
      
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
      <Box sx={{ maxWidth: 1400, mx: 'auto', pt: { xs: 1.5, md: 2 } }}>
        <Grid container spacing={{ xs: 1.5, sm: 2 }}>
          {/* Left Sidebar - Hidden on Mobile */}
          <Grid 
            item xs={0} 
            sm={3} 
            md={2.5} 
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              order: { sm: 1 }
            }}
          >
            <Paper sx={{ 
              p: { sm: 1.5, md: 2 }, 
              borderRadius: 2, 
              border: '1px solid #e1e5e9',
              height: 'fit-content',
              position: 'sticky',
              top: 20
            }}>
              <List>
                <ListItem button sx={{ py: { xs: 0.5, sm: 1 } }} component={RouterLink} to='/home'>
                  <ListItemIcon><Home sx={{ color: '#0a66c2' }} /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button sx={{ py: { xs: 0.5, sm: 1 } }} component={RouterLink} to='/mynetwork'>
                  <ListItemIcon><People sx={{ color: '#0a66c2' }} /></ListItemIcon>
                  <ListItemText primary="My Network" />
                </ListItem>
                <ListItem button sx={{ py: { xs: 0.5, sm: 1 } }} component={RouterLink} to='/jobs'>
                  <ListItemIcon><Work sx={{ color: '#0a66c2' }} /></ListItemIcon>
                  <ListItemText primary="Jobs" />
                </ListItem>
                <ListItem button sx={{ py: { xs: 0.5, sm: 1 } }} component={RouterLink} to='/message'>
                  <ListItemIcon><Message sx={{ color: '#0a66c2' }} /></ListItemIcon>
                  <ListItemText primary="Messaging" />
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem button sx={{ py: { xs: 0.5, sm: 1 } }} component={RouterLink} to='/profile'>
                  <ListItemIcon><PersonAdd /></ListItemIcon>
                  <ListItemText primary="Me" secondary="View & edit profile" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Main Feed - Full width mobile */}
          <Grid item xs={12} md={6} lg={5} sx={{ order: 1 }}>
            {/* Post Creation */}
            <Paper sx={{ 
              p: { xs: 2.5, sm: 3 }, 
              mb: { xs: 2, md: 2.5 }, 
              borderRadius: 2, 
              border: '1px solid #e1e5e9' 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}>
                <Avatar 
                  sx={{ 
                    width: { xs: 36, md: 40 }, 
                    height: { xs: 36, md: 40 }, 
                    bgcolor: '#0a66c2' 
                  }} 
                />
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    textTransform: 'none',
                    borderColor: '#c1c6cc',
                    borderRadius: 2,
                    height: { xs: 44, md: 48 },
                    justifyContent: 'flex-start',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    px: 2
                  }}
                >
                  Start a post
                </Button>
              </Box>
              {/* Post options hidden on mobile */}
              <Box sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                justifyContent: 'space-evenly', 
                mt: 2, 
                pt: 1.5,
                gap: 1
              }}>
                <Button 
                  startIcon={<Article />} 
                  sx={{ 
                    textTransform: 'none', 
                    color: '#0a66c2',
                    fontSize: '0.9rem',
                    flex: 1
                  }}
                >
                  Article
                </Button>
                <Button 
                  startIcon={<ThumbUp />} 
                  sx={{ 
                    textTransform: 'none', 
                    color: '#0a66c2',
                    fontSize: '0.9rem',
                    flex: 1
                  }}
                >
                  Repost
                </Button>
                <Button 
                  startIcon={<ChatBubble />} 
                  sx={{ 
                    textTransform: 'none', 
                    color: '#0a66c2',
                    fontSize: '0.9rem',
                    flex: 1
                  }}
                >
                  Comment
                </Button>
              </Box>
            </Paper>

            {/* Sample Posts */}
            <Card sx={{ 
              mb: { xs: 1.5, md: 2 }, 
              borderRadius: 2, 
              border: '1px solid #e1e5e9',
              boxShadow: 'none'
            }}>
              <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                  <Avatar sx={{ width: 40, height: 40 }} />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography 
                      fontWeight={600} 
                      sx={{ 
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        mb: 0.5 
                      }}
                    >
                      John Doe
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.85rem' }
                      }}
                    >
                      Software Engineer at TechCorp · 2h
                    </Typography>
                  </Box>
                </Box>
                <Typography 
                  mb={2} 
                  sx={{ 
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.5 
                  }}
                >
                  Excited to share that I've joined TechCorp as a Senior Software Engineer! 🚀
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, pt: 1 }}>
                  <Button 
                    startIcon={<ThumbUp />} 
                    size="small" 
                    sx={{ 
                      textTransform: 'none', 
                      fontSize: '0.85rem',
                      px: 1,
                      minWidth: 'auto'
                    }}
                  >
                    Like
                  </Button>
                  <Button 
                    startIcon={<ChatBubble />} 
                    size="small" 
                    sx={{ 
                      textTransform: 'none', 
                      fontSize: '0.85rem',
                      px: 1,
                      minWidth: 'auto'
                    }}
                  >
                    Comment
                  </Button>
                  <Button 
                    startIcon={<Share />} 
                    size="small" 
                    sx={{ 
                      textTransform: 'none', 
                      fontSize: '0.85rem',
                      px: 1,
                      minWidth: 'auto'
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Right Panel - Hidden below LG */}
          <Grid 
            item 
            xs={0} 
            lg={4} 
            sx={{ 
              display: { xs: 'none', lg: 'block' },
              order: 3 
            }}
          >
            <Paper sx={{ 
              p: 3, 
              borderRadius: 2, 
              border: '1px solid #e1e5e9',
              position: 'sticky',
              top: 20
            }}>
              <Typography fontWeight={600} mb={2} sx={{ fontSize: '1.1rem' }}>
                Recent visitors
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, py: 1 }}>
                  <Avatar sx={{ width: 40, height: 40 }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography fontSize={14}>Jane Smith</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      Marketing Manager
                    </Typography>
                  </Box>
                  <Button 
                    variant="outlined" 
                    size="small" 
                    sx={{ 
                      textTransform: 'none', 
                      px: 2, 
                      fontSize: '0.8rem',
                      minWidth: 80 
                    }}
                  >
                    Connect
                  </Button>
                </Box>
              </Box>
              <Button 
                fullWidth 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#0a66c2',
                  '&:hover': { backgroundColor: '#004182' },
                  textTransform: 'none',
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2
                }}
              >
                Find people you know on LinkedIn
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
