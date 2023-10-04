import './App.css';

import Navigation from './components/navigation/Navigation';
import SideNavigation from './components/sideNavigation/SideNavigation';
import Feed from './pages/feed/Feed';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='App__div'>
      <SideNavigation/>
       <Feed/>
      </div>
     
    </div>
  );
}

export default App;
