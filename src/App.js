import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import {Stack} from '@mui/material';
import  {Routes, Route} from "react-router-dom";
import Training from './Routes/Training'
import Contacts from './Routes/Contacts'
import Schedule from './Routes/Schedule'
import Projects from './Routes/Projects'
import Resources from './Routes/Resources'
import Settings from './Routes/Settings'

import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import EditShift from './components/editShift';
import CreateShift from './components/createShift';
import OpenShift from './components/OpenShift';
import EditContact from './components/editContact';
import CreateContact from './components/createContact';
import ContactList from './components/contactList';

function App() {

  return (
    
    <div>
      <Navbar />
      <Stack direction="row" justifyContent='space-between'>
        <Sidebar />

        <Routes>
            <Route path="/" element={<Feed />} />

            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/recordlist" element={<RecordList />} />

            <Route path="/schedupdate/:id" element={<EditShift />} />
            <Route path="/createshift" element={<CreateShift />} />
            <Route path="/scheds" element={<OpenShift />} />

            
            <Route path="/editcontact/:id" element={<EditContact />} />
            <Route path="/createcontact" element={<CreateContact />} />
            <Route path="/contactlist" element={<ContactList />} />
            
            <Route path="training" element={<Training />}/>
            <Route path="projects" element={<Projects />}/>
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
