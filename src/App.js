import './App.css';
import Navbar from './Components/Navbar';
import RouterComponents from './Components/RouterComponents';

// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e) => {
  
  if (
    e.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};


function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterComponents/>
    </div>
  );
}

export default App;
