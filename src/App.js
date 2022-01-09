
import './App.css';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;


const update = () => {
    document.getElementById('out').textContent = getState().value;
}

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
} 

const incDispatch = bindActionCreator(inc, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);



document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('rnd').addEventListener('click', () => {
    let value = Math.floor(Math.random() * 10);
    rndDispatch(value);
})




subscribe(update);




function App() {
  return (
    <div className="App">
      <h1>Hi world</h1>
    </div>
  );
}


export default App;
