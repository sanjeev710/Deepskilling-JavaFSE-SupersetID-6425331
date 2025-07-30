import React from 'react';
import './CountPeople.css';

class CountPeople extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  UpdateEntry = () => {
    this.setState({entryCount: this.state.entryCount + 1});
  }

  UpdateExit = () => {
    this.setState({exitCount: this.state.exitCount + 1});
  }

  render()
  {
    return(
      <div className = "count">
        <h1>Count People</h1>
        <p>People Entered: {this.state.entryCount}</p>
        <p>People Exited: {this.state.exitCount}</p>
        <button onClick={this.UpdateEntry} id='login-btn'>Login</button>
        <button onClick={this.UpdateExit} id='exit-btn'>Exit</button>
      </div>
    );
  }
}

export default CountPeople;