import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
  AppBar,
  Toolbar,
  Divider,
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
  Fab,
  InputAdornment,
} from '@mui/material';
import {
  Message,
  ChatBubbleOutline,
  Send,
  AttachFile,
  ArrowBack,
  Menu as MenuIcon,
  Phone,
  Videocam,
  KeyboardArrowDown,
} from '@mui/icons-material';

const MessagesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [selectedChat, setSelectedChat] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Sample conversations
  const conversations = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Frontend Developer',
      lastMessage: 'Thanks for React tips! 🚀 Working on hooks now',
      time: '2m',
      unread: 3,
      online: true,
      avatarColor: '#ff6b6b',
    },
    {
      id: 2,
      name: 'Rahul Patel',
      role: 'Full Stack @ Paytm',
      lastMessage: 'Meeting tomorrow 3PM?',
      time: '1h',
      unread: 0,
      online: false,
      avatarColor: '#4ecdc4',
    },
    {
      id: 3,
      name: 'Team MERN Devs',
      role: 'Group Chat',
      lastMessage: 'New project assigned - Gym Pulse v2.0',
      time: '5h',
      unread: 2,
      online: true,
      avatarColor: '#45b7d1',
    },
  ];

  // Sample messages for demo
  const demoMessages = [
    { id: 1, text: 'Hey! Thanks for MERN project structure 🙌', sender: 'other', time: '10:32', me: false },
    { id: 2, text: 'No prob! Auth done with JWT + bcrypt ✅', sender: 'me', time: '10:33', me: true },
    { id: 3, text: "Perfect! Socket.io next for real-time chat", sender: 'other', time: '10:35', me: false },
    { id: 4, text: 'Exactly like this! 😎 Deploying to Vercel soon', sender: 'me', time: '10:36', me: true },
  ];

  useEffect(() => {
    if (selectedChat) {
      setMessages(demoMessages);
      setTimeout(() => scrollToBottom(), 100);
    } else {
      setMessages([]);
    }
  }, [selectedChat]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        me: true,
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
      // Socket.io emit here
      // socket.emit('sendMessage', { chatId: selectedChat.id, message });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const drawerContent = (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Drawer Header */}
      <Paper sx={{
        p: 2,
        borderBottom: '1px solid #e1e5e9',
        position: 'sticky',
        top: 0,
        zIndex: 2,
        backgroundColor: 'background.paper',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight={700} color="#0a66c2">
            Messages
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <KeyboardArrowDown sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
      </Paper>

      {/* Search */}
      <Box sx={{ p: 2, pt: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search messages"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: 'white',
            },
          }}
          InputProps={{
            startAdornment: <ChatBubbleOutline sx={{ mr: 1, color: 'text.secondary' }} />,
          }}
        />
      </Box>

      {/* Conversations List */}
      <List sx={{ flex: 1, overflow: 'auto' }}>
        {conversations.map((conv) => (
          <ListItem
            key={conv.id}
            button
            selected={selectedChat?.id === conv.id}
            onClick={() => {
              setSelectedChat(conv);
              if (isMobile) setDrawerOpen(false);
            }}
            sx={{
              py: 2.5,
              mx: 1.5,
              mb: 1,
              borderRadius: 2,
              transition: 'all 0.2s',
              '&:hover': { bgcolor: 'action.hover' },
              '&.Mui-selected': {
                bgcolor: '#0a66c2',
                color: 'white',
                '& .MuiAvatar-root': { bgcolor: 'rgba(255,255,255,0.2)' },
              },
            }}
          >
            <ListItemAvatar>
              <Badge
                overlap="circular"
                variant="dot"
                color={conv.online ? 'success' : 'default'}
                sx={{ '& .MuiBadge-badge': { width: 12, height: 12 } }}
              >
                <Avatar sx={{ width: 52, height: 52, bgcolor: conv.avatarColor }}>
                  {conv.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Typography fontWeight={600} sx={{ fontSize: { xs: '1rem', md: '1.05rem' } }}>
                    {conv.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    {conv.time}
                  </Typography>
                </Box>
              }
              secondary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      color: selectedChat?.id === conv.id ? 'white' : 'text.secondary',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      flex: 1,
                    }}
                  >
                    {conv.lastMessage}
                  </Typography>
                  {conv.unread > 0 && (
                    <Badge
                      badgeContent={conv.unread}
                      sx={{
                        '& .MuiBadge-badge': {
                          fontSize: '0.75rem',
                          minWidth: 20,
                          height: 20,
                          color: selectedChat?.id === conv.id ? 'white' : '#0a66c2',
                          backgroundColor: selectedChat?.id === conv.id ? '#ffffff24' : 'white',
                        },
                      }}
                    />
                  )}
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ height: '100vh', bgcolor: '#f3f2ef', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Mobile Drawer */}
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 340,
            borderRight: '1px solid #e1e5e9',
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </SwipeableDrawer>

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Paper
          sx={{
            width: 380,
            height: '100vh',
            borderRight: '1px solid #e1e5e9',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
          }}
        >
          <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid #e1e5e9' }}>
            <Toolbar sx={{ px: 3 }}>
              <Typography variant="h6" fontWeight={700} color="#0a66c2">
                Messages
              </Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search messages"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
              InputProps={{
                startAdornment: <ChatBubbleOutline sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Box>
          <List sx={{ flex: 1, overflow: 'auto' }}>
            {conversations.map((conv) => (
              <ListItem
                key={conv.id}
                button
                selected={selectedChat?.id === conv.id}
                onClick={() => setSelectedChat(conv)}
                sx={{ py: 3, borderBottom: '1px solid #f7f7f7' }}
              >
                <ListItemAvatar>
                  <Badge overlap="circular" variant="dot" color={conv.online ? 'success' : 'default'}>
                    <Avatar sx={{ width: 56, height: 56, bgcolor: conv.avatarColor }}>
                      {conv.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography fontWeight={600} sx={{ fontSize: '1.05rem' }}>
                        {conv.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {conv.time}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary' }}>
                        {conv.lastMessage}
                      </Typography>
                      {conv.unread > 0 && <Badge badgeContent={conv.unread} color="primary" sx={{ mt: 0.5 }} />}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      {/* Main Chat Area */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <Paper sx={{
              p: { xs: 2, md: 3 },
              borderBottom: '1px solid #e1e5e9',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexShrink: 0,
            }}>
              <IconButton
                onClick={() => setSelectedChat(null)}
                sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.secondary' }}
              >
                <ArrowBack />
              </IconButton>
              <Avatar sx={{ width: 48, height: 48, bgcolor: selectedChat.avatarColor }}>
                {selectedChat.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography fontWeight={600} sx={{ fontSize: { xs: '1.05rem', md: '1.1rem' } }}>
                  {selectedChat.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                  {selectedChat.role} • {selectedChat.online ? 'online' : 'last seen recently'}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small">
                  <Phone fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <Videocam fontSize="small" />
                </IconButton>
              </Box>
            </Paper>

            {/* Messages Container */}
            <Box sx={{ flex: 1, overflow: 'hidden', p: { xs: 2, md: 3 } }}>
              <Box sx={{
                height: '100%',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 1.5, md: 2 },
                pb: 4,
              }}>
                {messages.map((msg) => (
                  <Box
                    key={msg.id}
                    sx={{
                      alignSelf: msg.me ? 'flex-end' : 'flex-start',
                      maxWidth: { xs: '82%', md: '70%' },
                    }}
                  >
                    <Paper
                      sx={{
                        p: { xs: 1.8, md: 2.2 },
                        borderRadius: { xs: 3, md: 4 },
                        bgcolor: msg.me ? '#0a66c2' : '#f1f3f4',
                        color: msg.me ? 'white' : 'text.primary',
                        boxShadow: msg.me ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
                      }}
                    >
                      <Typography sx={{
                        lineHeight: 1.45,
                        fontSize: { xs: '0.92rem', md: '0.98rem' },
                        wordBreak: 'break-word',
                      }}>
                        {msg.text}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          mt: 0.8,
                          opacity: msg.me ? 0.85 : 0.65,
                          fontSize: '0.75rem',
                          display: 'block',
                        }}
                      >
                        {msg.time}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
                <div ref={messagesEndRef} />
              </Box>
            </Box>

            {/* Message Input */}
            <Paper sx={{
              p: { xs: 1.8, md: 2.2 },
              borderTop: '1px solid #e1e5e9',
              flexShrink: 0,
              backgroundColor: 'white',
            }}>
              <TextField
                fullWidth
                multiline
                maxRows={isMobile ? 3 : 4}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: 3,
                    alignItems: 'flex-end',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small" edge="end">
                        <AttachFile fontSize="small" />
                      </IconButton>
                      <IconButton
                        onClick={sendMessage}
                        disabled={!newMessage.trim()}
                        sx={{
                          ml: 1,
                          bgcolor: newMessage.trim() ? '#0a66c2' : 'action.disabledBackground',
                          color: newMessage.trim() ? 'white' : 'action.disabled',
                          borderRadius: 2,
                          '&:hover': {
                            bgcolor: newMessage.trim() ? '#004182' : 'action.disabledBackground',
                          },
                        }}
                      >
                        <Send fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
          </>
        ) : (
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            p: 4,
            gap: 3,
          }}>
            <ChatBubbleOutline sx={{ fontSize: 72, color: 'action.active', opacity: 0.5 }} />
            <Box>
              <Typography variant="h5" fontWeight={600} color="text.secondary" mb={1.5}>
                Select a conversation
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 320 }}>
                Choose from your recent messages to start chatting
              </Typography>
            </Box>
            {isMobile && (
              <Fab
                color="primary"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  right: 24,
                }}
              >
                <MenuIcon />
              </Fab>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MessagesPage;
