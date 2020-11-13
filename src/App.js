import React from 'react';
import axios from 'axios';
import DisplayQuote from './Components/DisplayQuote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
    }
    this.fetchSimpson = this.fetchSimpson.bind(this);
  }

  componentDidMount() {
    this.fetchSimpson();
  }

  fetchSimpson = () => {
    // this.preventDefault();
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios
      .get(url)
      .then((response) => response.data)
      .then((oneQuote) => {
        this.setState({
          quote: oneQuote[0],
        });
      })
  };

  render() {
    const { quote } = this.state;
    return (
      <section className="container" >
        <h1 className="title">React Quest n°8</h1>
        {quote ? <DisplayQuote quote={quote} /> : (<div className="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>)}
        <button onClick={this.fetchSimpson}>
          What delicious quote! I want 1 more!
        </button>
      </section>
    );
  }
}

App.defaultProps = {
  quote: null,
};

export default App;
