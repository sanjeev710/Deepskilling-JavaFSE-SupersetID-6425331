import logo from './logo.svg';
import './App.css';
import CalculateScore from './components/calculateScore';

function App() {
  return (
    <div>
      <CalculateScore
      name={"Sanjeev V A"}
      school={"Sri Seshaas International Public School"}
      total={365}
      goal={5}/>
    </div>
  );
}

export default App;
