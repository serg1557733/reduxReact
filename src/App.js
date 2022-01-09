
import './App.css';
import { createStore, bindActionCreators } from 'redux';
import { reducer } from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;


const update = () => {
    document.getElementById('out').textContent = getState().value;
}

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// } 
const {inc, rnd, dec} = bindActionCreators(actions, dispatch)
// const incDispatch = bindActionCreators(inc, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);



document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
    let value = Math.floor(Math.random() * 10);
    rnd(value);
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
