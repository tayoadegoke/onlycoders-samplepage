import './App.css';

import Navigation from './components/navigation/navigation';
import SideNavigation from './components/sideNavigation/sideNavigation';
import Feed from './pages/feed/feed';

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
