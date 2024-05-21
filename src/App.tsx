import './App.css';
import Card from "./components/Card/Card.tsx";

const App = () => {
  return (
    <div className="playingCards faceImages">
      <Card rank={"9"} suit={"diams"}/>
    </div>
  );
};

export default App;
