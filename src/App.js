import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button popovertarget="mypopover" popovertargetaction="show">
        Show popover
      </button>
      <button popovertarget="mypopover" popovertargetaction="hide">
        Hide popover
      </button>
      <div id="mypopover" popover="auto">
        Popover content
      </div>
    </div>
  );
}

export default App;
