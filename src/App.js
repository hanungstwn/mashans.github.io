import './App.css';
import NavigationBar from './components/NavigationBar';
import Trending from './components/Trending';
import Intro from './components/Intro';
import Superhero from './components/Superhero';
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* Intro Sectiona */}
      <div className='myBG border'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}

      {/* Trending Section */}
      <div className="trending">
        <Trending/>
      </div>
      {/* End of Trending Section */}

      {/* Action Section */}
      <div className="superhero">
        <Superhero/>
      </div>
      {/* End of Action Section */}
    </div>
  );
}

export default App;