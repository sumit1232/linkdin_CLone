import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Button,
  Divider,
  Grid,
  Card,
  CardContent,
  Chip,
  TextField,
  IconButton,
  Tabs,
  Tab,
  Badge,
  useTheme,
  useMediaQuery,
  Stack,
  Collapse,
  useScrollTrigger,
} from '@mui/material';
import {
  Edit,
  Add,
  School,
  Work,
  LocationOn,
  Mail,
  Phone,
  Public,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material';

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const trigger = useScrollTrigger();
  const [activeTab, setActiveTab] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Your Name',
    headline: 'Frontend Developer | MERN Stack | 1+ Year Experience',
    location: 'Nārnaund, Haryana, India',
    about: `Passionate MERN stack developer building responsive web applications. 
Currently working on LinkedIn clone, Gym Pulse management system, and preparing for FAANG interviews.
Proficient in React, Node.js, MongoDB, Tailwind CSS, and Material UI.`,
    connections: 234,
    profileViews: 1567,
  });

  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Startup',
      duration: 'Jan 2025 - Present (1 yr)',
      location: 'Remote',
      description: 'Building MERN stack applications, React components, and responsive UIs.',
    },
  ];

  const educations = [
    {
      id: 1,
      school: 'Gujarat Technological University (GTU)',
      degree: 'Bachelor of Engineering',
      field: 'Computer Engineering',
      duration: '2020 - 2024',
    },
  ];

  const skills = [
    'React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS',
    'Material UI', 'Git', 'Vercel', 'JWT Authentication', 'REST APIs'
  ];

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const TabPanel = ({ children, value, index, ...other }) => (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </Box>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f3f2ef', py: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 3 } }}>
        {/* Profile Header - Full width mobile */}
        <Paper sx={{ 
          p: { xs: 3, md: 4 }, 
          borderRadius: { xs: 2, md: 3 }, 
          border: '1px solid #e1e5e9',
          position: 'relative',
          mb: { xs: 3, md: 4 }
        }}>
          <Box sx={{ 
            position: { xs: 'static', md: 'absolute' }, 
            top: 16, 
            right: 16, 
            mt: { xs: 2, md: 0 }
          }}>
            <IconButton 
              onClick={handleEditToggle} 
              sx={{ 
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <Edit />
            </IconButton>
          </Box>
          
          {/* Profile Picture & Info - Stacked mobile */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 3, md: 4 }, 
            mb: { xs: 3, md: 4 },
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Badge
              overlap="circular"
              badgeContent={
                <IconButton size="small" sx={{ 
                  width: { xs: 28, md: 32 }, 
                  height: { xs: 28, md: 32 }, 
                  bgcolor: '#0a66c2', 
                  color: 'white' 
                }}>
                  <Public fontSize="small" />
                </IconButton>
              }
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar 
                sx={{ 
                  width: { xs: 100, sm: 120, md: 140 }, 
                  height: { xs: 100, sm: 120, md: 140 }, 
                  bgcolor: '#0a66c2', 
                  fontSize: { xs: '2rem', md: '3rem' },
                  mx: 'auto'
                }}
              >
                YN
              </Avatar>
            </Badge>
            
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {editMode ? (
                <TextField
                  fullWidth
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  sx={{ 
                    mb: 2,
                    '& .MuiInputBase-root': { borderRadius: 2 }
                  }}
                />
              ) : (
                <Typography 
                  variant="h3" 
                  fontWeight={700} 
                  sx={{ 
                    mb: { xs: 1.5, md: 1 }, 
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' } 
                  }}
                >
                  {profileData.name}
                </Typography>
              )}
              
              {editMode ? (
                <TextField
                  fullWidth
                  name="headline"
                  value={profileData.headline}
                  onChange={handleInputChange}
                  multiline
                  rows={2}
                  sx={{ 
                    mb: 2,
                    '& .MuiInputBase-root': { borderRadius: 2 }
                  }}
                />
              ) : (
                <Typography 
                  variant="h6" 
                  color="text.primary" 
                  sx={{ 
                    mb: { xs: 2, md: 2 }, 
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    lineHeight: 1.4
                  }}
                >
                  {profileData.headline}
                </Typography>
              )}
              
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                divider={
                  <Divider orientation="vertical" flexItem sx={{ height: { xs: 20, sm: 24 } }} />
                }
                sx={{ alignItems: 'center', mb: 2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOn fontSize="small" />
                  <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                    {profileData.location}
                  </Typography>
                </Box>
                <Badge 
                  badgeContent={profileData.connections} 
                  color="primary" 
                  sx={{ 
                    '& .MuiBadge-badge': { 
                      fontSize: { xs: '0.7rem', md: '0.75rem' },
                      minWidth: 22,
                      height: 22
                    } 
                  }}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                    connections
                  </Typography>
                </Badge>
                <Badge 
                  badgeContent={profileData.profileViews} 
                  color="primary" 
                  sx={{ 
                    '& .MuiBadge-badge': { 
                      fontSize: { xs: '0.7rem', md: '0.75rem' },
                      minWidth: 22,
                      height: 22
                    } 
                  }}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                    profile views
                  </Typography>
                </Badge>
              </Stack>
            </Box>
          </Box>

          {/* About Section - Collapsible mobile */}
          <Divider sx={{ my: { xs: 2, md: 3 } }} />
          <Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              mb: 2,
              justifyContent: { xs: 'space-between', md: 'flex-start' }
            }}>
              <Typography variant="h6" fontWeight={600}>
                About
              </Typography>
              {editMode && (
                <IconButton size="small">
                  <Edit fontSize="small" />
                </IconButton>
              )}
            </Box>
            {editMode ? (
              <TextField
                fullWidth
                name="about"
                value={profileData.about}
                onChange={handleInputChange}
                multiline
                rows={4}
                sx={{ 
                  width: '100%',
                  '& .MuiInputBase-root': { borderRadius: 2 }
                }}
              />
            ) : (
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.6, 
                  color: 'text.primary',
                  fontSize: { xs: '0.95rem', md: '1rem' }
                }}
              >
                {profileData.about}
              </Typography>
            )}
          </Box>
        </Paper>

        {/* Mobile Sidebar Toggle */}
        {isMobile && (
          <Box sx={{ mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setShowSidebar(!showSidebar)}
              endIcon={showSidebar ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              sx={{ borderRadius: 2, py: 1.5 }}
            >
              Contact & Skills
            </Button>
          </Box>
        )}

        {/* Sidebar/Contact Info - Collapsible mobile */}
        <Collapse in={!isMobile || showSidebar}>
          <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={12}>
              <Paper sx={{ 
                p: { xs: 3, md: 3 }, 
                borderRadius: { xs: 2, md: 3 }, 
                border: '1px solid #e1e5e9' 
              }}>
                <Typography variant="h6" fontWeight={600} mb={2} sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  Contact Info
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center' } }}>
                    <Mail fontSize="small" sx={{ color: '#0a66c2' }} />
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                      your.email@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center' } }}>
                    <Phone fontSize="small" sx={{ color: '#0a66c2' }} />
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                      +91 98765 43210
                    </Typography>
                  </Box>
                </Box>
                <Button 
                  fullWidth 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#0a66c2', 
                    borderRadius: 2,
                    py: 1.5,
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}
                >
                  Edit contact info
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={12}>
              <Paper sx={{ 
                p: { xs: 3, md: 3 }, 
                borderRadius: { xs: 2, md: 3 }, 
                border: '1px solid #e1e5e9' 
              }}>
                <Typography variant="h6" fontWeight={600} mb={2} sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  Top Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {skills.slice(0, 6).map((skill, index) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: index < 3 ? '#0a66c2' : '#f1f3f4',
                        color: index < 3 ? 'white' : 'text.primary',
                        borderRadius: 2,
                        fontSize: '0.8rem',
                        height: 32
                      }}
                    />
                  ))}
                </Box>
                <Button 
                  startIcon={<Add />} 
                  fullWidth 
                  sx={{ 
                    textTransform: 'none',
                    borderRadius: 2,
                    py: 1.5,
                    fontSize: '0.95rem'
                  }}
                >
                  Show all skills
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Collapse>

        {/* Experience, Education, Skills Tabs */}
        <Paper sx={{ 
          p: { xs: 3, md: 4 }, 
          borderRadius: { xs: 2, md: 3 }, 
          border: '1px solid #e1e5e9',
          mt: { xs: 2, md: 4 }
        }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)} 
            sx={{ 
              mb: 4,
              '& .MuiTabs-indicator': { bgcolor: '#0a66c2' },
              '& .MuiTab-root': { 
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '0.95rem', md: '1rem' }
              }
            }}
          >
            <Tab label="Experience" />
            <Tab label="Education" />
            <Tab label="Licenses & Certifications" />
            <Tab label="Skills" />
          </Tabs>

          <TabPanel value={activeTab} index={0}>
            <Typography 
              variant="h5" 
              fontWeight={600} 
              mb={3} 
              sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' } }}
            >
              Experience
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {experiences.map((exp) => (
                <Grid item xs={12} key={exp.id}>
                  <Card sx={{ 
                    height: '100%', 
                    borderRadius: 2, 
                    border: '1px solid #e1e5e9',
                    '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }
                  }}>
                    <CardContent sx={{ p: { xs: 3, md: 3 } }}>
                      <Typography 
                        variant="h6" 
                        fontWeight={600} 
                        sx={{ 
                          mb: 1, 
                          fontSize: { xs: '1.1rem', md: '1.25rem' } 
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 1, 
                          fontSize: { xs: '1rem', md: '1.1rem' } 
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ mb: 2, fontSize: '0.9rem' }}
                      >
                        {exp.duration} • {exp.location}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          lineHeight: 1.6, 
                          fontSize: { xs: '0.95rem', md: '1rem' } 
                        }}
                      >
                        {exp.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button 
              startIcon={<Add />} 
              variant="outlined" 
              sx={{ 
                mt: { xs: 2, md: 3 },
                borderRadius: 2,
                py: 1.5,
                px: 3,
                fontSize: '1rem'
              }}
            >
              Add experience
            </Button>
          </TabPanel>

          <TabPanel value={activeTab} index={1}>
            <Typography 
              variant="h5" 
              fontWeight={600} 
              mb={3} 
              sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' } }}
            >
              Education
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {educations.map((edu) => (
                <Grid item xs={12} key={edu.id}>
                  <Card sx={{ 
                    height: '100%', 
                    borderRadius: 2, 
                    border: '1px solid #e1e5e9',
                    '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }
                  }}>
                    <CardContent sx={{ p: { xs: 3, md: 3 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <School sx={{ 
                          fontSize: { xs: 32, md: 40 }, 
                          color: '#0a66c2',
                          mx: { xs: 'auto', md: 'none' }
                        }} />
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                          <Typography 
                            variant="h6" 
                            fontWeight={600}
                            sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' } }}
                          >
                            {edu.school}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ fontSize: '0.95rem' }}
                          >
                            {edu.degree}, {edu.field}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ fontSize: '0.9rem', textAlign: { xs: 'center', md: 'left' } }}
                      >
                        {edu.duration}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button 
              startIcon={<Add />} 
              variant="outlined" 
              sx={{ 
                mt: { xs: 2, md: 3 },
                borderRadius: 2,
                py: 1.5,
                px: 3,
                fontSize: '1rem'
              }}
            >
              Add education
            </Button>
          </TabPanel>

          <TabPanel value={activeTab} index={2}>
            <Stack spacing={2} sx={{ alignItems: 'center', py: 4 }}>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ fontSize: '1.1rem', textAlign: 'center' }}
              >
                No licenses or certifications yet.
              </Typography>
              <Button startIcon={<Add />} variant="outlined" sx={{ borderRadius: 2 }}>
                Add certification
              </Button>
            </Stack>
          </TabPanel>

          <TabPanel value={activeTab} index={3}>
            <Typography 
              variant="h5" 
              fontWeight={600} 
              mb={3} 
              sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' } }}
            >
              Skills
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1, 
              mb: 3,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              {skills.map((skill, index) => (
                <Chip
                  key={skill}
                  label={skill}
                  clickable
                  size="medium"
                  sx={{ 
                    borderRadius: 2,
                    fontSize: '0.85rem',
                    height: 36,
                    minWidth: 80,
                    justifyContent: 'center'
                  }}
                />
              ))}
            </Box>
            <Button 
              startIcon={<Add />} 
              variant="outlined" 
              sx={{ 
                borderRadius: 2,
                py: 1.5,
                px: 3,
                fontSize: '1rem'
              }}
            >
              Add skills
            </Button>
          </TabPanel>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
