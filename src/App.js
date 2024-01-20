import { useEffect, useState } from "react";
import "./index.css";
import Content from "./components/Content";

function App() {
  let randomColor = () => {
    let red = Math.floor(Math.random() * 233);
    let green = Math.floor(Math.random() * 233);
    let blue = Math.floor(Math.random() * 233);

    return [red, green, blue];
  };

  const [color, setColor] = useState([randomColor(), randomColor()]);
  const [rotate, setRotate] = useState(0);
  const [status, setStatus] = useState(false);
  const [clicked, setClicked] = useState(null);

  console.log(color[0][0]);

  let styles = {
    background: `linear-gradient(rgb(${color[0][0]},${color[0][1]},${color[0][1]}), rgb(${color[1][0]},${color[1][1]},${color[1][2]}))`,
    transform: `rotate(${rotate}deg)`,
  };

  useEffect(() => {
    setTimeout(() => {
      setColor([randomColor(), randomColor()]);
      setRotate(rotate + 30);
    }, 500);
  });

  let componentToRender = null;

  if (clicked === "works") {
    componentToRender = <Content title="works" clicked={clicked} />;
  } else if (clicked === "studio") {
    componentToRender = <Content title="studio" clicked={clicked} />;
  } else if (clicked === "about") {
    componentToRender = <Content title="about" clicked={clicked} />;
  } else if (clicked === "contact") {
    componentToRender = <Content title="contact" clicked={clicked} />;
  } else if (clicked === "?") {
    componentToRender = <Content title="?" clicked={clicked} />;
  } else {
  }

  console.log(clicked);
  return (
    <div className="App">
      <header>
        <h3>s.m</h3>
        <h3>EXPAND YOUR PALATE</h3>
        <h3
          onClick={() => {
            setStatus(!status);
            setClicked(null);
          }}
        >
          menu
        </h3>
      </header>

      <div className="square" style={styles}></div>

      <footer>
        <h2>seoul ❤️ london</h2>
      </footer>

      <div
        className="menu"
        style={{
          opacity: status ? 1 : 0,
          transform: status ? `translateX(40px)` : `translateX(0px)`,
        }}
      >
        <h1 onClick={() => setClicked("works")}>WORKS</h1>
        <h1 onClick={() => setClicked("studio")}>STUDIO</h1>
        <h1 onClick={() => setClicked("about")}>ABOUT</h1>
        <h1 onClick={() => setClicked("contact")}>CONTACT</h1>
        <h1 onClick={() => setClicked("?")}>?</h1>
      </div>

      {componentToRender}
    </div>
  );
}

export default App;
