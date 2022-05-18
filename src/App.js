import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import {Stack} from '@mui/material';
import  {Routes, Route} from "react-router-dom";
import Messages from './Routes/Messages'
import Announcements from './Routes/Announcements'
import Schedule from './Routes/Schedule'
import Tasks from './Routes/Tasks'
import Settings from './Routes/Settings'

function App() {

  return (
    
    <div>
      <Navbar />
      <Stack direction="row" justifyContent='space-between'>
        <Sidebar />

        <Routes>
            <Route path="/" element={<Feed />}/>
            <Route path="messages" element={<Messages />}/>
            <Route path="tasks" element={<Tasks />}/>
            <Route path="schedule" element={<Schedule />}/>
            <Route path="announcements" element={<Announcements />}/>
            <Route path="settings" element={<Settings />}/>
        </Routes>

        <Rightbar />
      </Stack>

      
    </div>
  );
}

export default App;
