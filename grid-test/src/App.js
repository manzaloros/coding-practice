import './App.css';
import {useState, useEffect} from 'react'

const Box = ({boxNum, setClickedBoxes, clickedBoxes}) => {
  const isBoxClicked = clickedBoxes.indexOf(boxNum) === -1 ? `notClicked` : `clicked`;

  return (
    <div
      className={`${isBoxClicked} box`}
      onClick={() => setClickedBoxes((boxes) => [...boxes, boxNum])}
      id={boxNum}

    ></div>
  )
}

const Container = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);

  const unClickBoxes = (box, i) => (setTimeout(() => {
      setClickedBoxes((boxes) => {
        boxes.pop();

        return [...boxes];
      })
    }, 1000 * (i + 1))
   )

  const clearTimers = (timers) => timers ? () => timers.forEach(timer => clearTimeout(timer)) : null

  useEffect(() => {
    let timers

    if (clickedBoxes.length === 7) timers = clickedBoxes.map(unClickBoxes)

    return () => clearTimers(timers);
  }, [clickedBoxes])

  const mapBoxes = (el, i) => (
    <Box
      boxNum={`box-${i + 1}`}
      setClickedBoxes={setClickedBoxes}
      clickedBoxes={clickedBoxes}
    ></Box>
  )

  const boxes = Array(7).fill(0)

  return (
    <div id='container'>
      {boxes.map(mapBoxes)}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
