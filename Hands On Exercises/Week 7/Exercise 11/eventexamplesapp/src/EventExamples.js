import React from 'react';

class EventExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      rupees: '',
      converted: '',
      currency: 'EUR'
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleWelcome = this.handleWelcome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIncrement() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.sayHello();
  }

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  sayHello() {
    alert("Hello! Counter Updated!");
  }

  handleWelcome(message) {
    alert(message);
  }

  handleOnPress = () => {
    alert("I was clicked");
  }

  handleInputChange = (e) => {
    this.setState({ rupees: e.target.value });
  }

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { rupees, currency } = this.state;
    const rateMap = {
      EUR: 90,
      USD: 83,
      GBP: 105,
      YEN: 0.58
    };

    const rate = rateMap[currency];
    const converted = (parseFloat(rupees) / rate).toFixed(2);
    this.setState({ converted });
  }

  render() {
    const { rupees, currency, converted } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Event Handling Examples</h2>

        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>

        <hr />

        <button onClick={() => this.handleWelcome("Welcome to React Events!")}>Say Welcome</button>

        <hr />

        <button onClick={this.handleOnPress}>OnPress (Synthetic Event)</button>

        <hr />

        <h3>Currency Converter (INR ➜ Select Currency)</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in ₹"
            value={rupees}
            onChange={this.handleInputChange}
          />

          <select value={currency} onChange={this.handleCurrencyChange} style={{ margin: '0 10px' }}>
            <option value="EUR">Euro (€)</option>
            <option value="USD">US Dollar ($)</option>
            <option value="GBP">British Pound (£)</option>
            <option value="YEN">Japanese Yen (¥)</option>
          </select>

          <button type="submit">Convert</button>
        </form>

        {converted && (
          <p>
            Converted Amount in {currency}: <strong>{converted}</strong>
          </p>
        )}
      </div>
    );
  }
}

export default EventExamples;
