import './App.css';
import NationContainer from './NationContainer';
import Img from './Img';
import NationBox from './NationBox';

function App() {
  return (
    <div id="main_container">
      <Img src="./images/1.jpg" alt="img" />
      <NationContainer>
        <NationBox i='1' opacity='1' />
        <NationBox i='2' />
        <NationBox i='3' />
        <NationBox i='4' />
        <NationBox i='5' />
      </NationContainer>
    </div>
  );
}

export default App;