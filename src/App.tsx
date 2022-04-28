// Frames
import Herobanner from "./Frames/Herobanner";
import Bandeau from "./Frames/Bandeau";
// Components
import Navbar from "./Components/Navbar";
import "./Scss/style.scss";

function App() {
  return (
    <div id="App" className="relative">
      <div className="modal"></div>
      <Herobanner />
      <Bandeau />
      <Navbar />
    </div>
  );
}

export default App;
