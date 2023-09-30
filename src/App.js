import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navigation/Navigation';
import SideNavigation from './components/sideNavigation/SideNavigation';
import NewsFeed from './pages/newsFeed/newsFeed';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='App__main'>
      <SideNavigation/>
       <NewsFeed/>
      </div>
     
    </div>
  );
}

export default App;
