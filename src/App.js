import './App.css';

import Navigation from './components/navigation/Navigation';
import SideNavigation from './components/sideNavigation/SideNavigation';
import NewsFeed from './pages/newsFeed/NewsFeed';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='App__div'>
      <SideNavigation/>
       <NewsFeed/>
      </div>
     
    </div>
  );
}

export default App;
