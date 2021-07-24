import './App.css';
import Slider from 'react-animation-carousel'
import img1 from "./img/image.png";
import img2 from "./img/img2.png";
const data = [
  img1,
  img2,
  img2,
  img1,
  img1,
  img2,
  img2,
  img1,
  img2,
  img2,
  img1,
  img1,
];
function App() {
  return (
    <div className="App">
      <Slider time={100} listImg={data} />
    </div>
  );
}

export default App;
