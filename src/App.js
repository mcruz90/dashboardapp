import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import {Stack} from '@mui/material';

function App() {

  return (
    
    <div>
      <Navbar />
      <Stack direction="row" justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>

    </div>
  );
}

export default App;
