import './App.css';
import ReactAnimationCarousel from 'react-animation-carousel'
import img2 from "./img/3.jpeg";
import img3 from "./img/4.jpeg";
import img4 from "./img/5.jpeg";
import img5 from "./img/6.jpeg";
import img6 from "./img/7.jpeg";
import img7 from "./img/8.jpeg";
import img8 from "./img/9.jpeg";
import img9 from "./img/10.png";
import img10 from "./img/2.jpeg";
import img11 from "./img/11.png";


const data = [
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];
function App() {
  return (
    <div className="App">
      <ReactAnimationCarousel time={20} listImg={data} />
    </div>
  );
}

export default App;
