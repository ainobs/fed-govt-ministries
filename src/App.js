import CardList from './components/CardList';
import { Data } from "./components/Data";

const App = ()=> {
  return (
    <div>
      <h1 className="tc">MINISTRIES AND FEDERAL PARASTATALS</h1>
      <CardList Data={Data}/>
    </div>
  );
}

export default App;