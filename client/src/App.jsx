import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import PagenotFound from './components/PagenotFound';
import Register from './components/Register/Register';
import Homepage from './components/Homepage';
import Mynetwork from './components/Mynetwork/Mynetwork';
import Jobs from './components/Jobs/Jobs';
import JobApply from './components/Jobs/JobApply';
import MessagePage from './components/MessagePage';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
<>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mynetwork" element={<Mynetwork />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/applynow" element={<JobApply />} />
          <Route path="/message" element={<MessagePage />} />

          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </div>
    </Router>
</>
  )
}

export default App
