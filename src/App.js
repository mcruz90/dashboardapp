import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import {Stack} from '@mui/material';
import  {Routes, Route} from "react-router-dom";
import Messages from './Routes/Messages'
import Contacts from './Routes/Contacts'
import Schedule from './Routes/Schedule'
import Tasks from './Routes/Tasks'
import Resources from './Routes/Resources'
import Settings from './Routes/Settings'

import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

function App() {

  return (
    
    <div>
      <Navbar />
      <Stack direction="row" justifyContent='space-between'>
        <Sidebar />

        <Routes>
            <Route path="*" element={<Feed />}/>
            <Route path="/edit">
              <Route path=":id" element={<Edit />} />
            </Route>
            <Route path="/create" element={<Create />} />
            <Route path="/recordlist" element={<RecordList />} />
            <Route path="messages" element={<Messages />}/>
            <Route path="tasks" element={<Tasks />}/>
            <Route path="schedule" element={<Schedule />}/>
            <Route path="resources" element={<Resources />}/>
            <Route path="contacts" element={<Contacts />}/>
            <Route path="settings" element={<Settings />}/>
        </Routes>

        <Rightbar />
      </Stack>

      
    </div>
  );
}

export default App;
