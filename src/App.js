import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      flag: false,
      iks: 0,
      null: 0,
      sign: 'X'
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4 ,7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? "X" : "O"
    for ( let i = 0; i < 8; i++) {
    let line = this.winnerLine[i];
    if (this.state.squares[line[0]] === s 
        && this.state.squares[line[1]] === s 
        && this.state.squares[line[2]] === s) {
          this.setState({squares: Array(9).fill(null)})
          this.setState({count: 0})
          this.setState({flag: true});
          alert (`${s} Win`);
          if (s === 'X') {
            this.setState({iks: this.state.iks + 1});
          } else if (s === 'O'){
            this.setState({null: this.state.null + 1});
          }
        }
    }
  }

  isDraw = () => {
    if (this.state.flag === false && this.state.count === 8) {
      alert('Ничья');
    }
  }

  clickHandler = event => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      if (this.state.sign === 'X') {
        currentSquares[data] = (this.state.count % 2 === 0) ? "X" : "O";
      } else if (this.state.sign === 'O') {
        currentSquares[data] = (this.state.count % 2 === 0) ? "O" : "X";
      } else {
        currentSquares[data] = (this.state.count % 2 === 0) ? "X" : "O";
      }
      this.setState({count : this.state.count + 1});
      this.setState({squares : currentSquares});
    } else {
      alert('Так нельзя, нарисую в другую коробку!');
    }
    this.isWinner();
    this.isDraw();
  }

  newGame = () => {
    this.setState({squares: Array(9).fill(null)})
    this.setState({count: 0})
    this.setState({flag: false})
  }

  selectSign = (e) => {
    let sign = e.target.value;
    this.setState({sign: sign});
  }

  render() {
    return (
      <div>
        <div className="count">
          {console.log(this.state)}
          <p>Счет X: {this.state.iks}</p>
          <button onClick={this.newGame}>Новая игра</button>
          <div>
            <select onClick={this.selectSign}>
              <option>X</option>
              <option>O</option>
            </select>
          </div>
          <p>Счет O: {this.state.null}</p>
        </div>
        <div className="header-tic">
          <div className="tic-tac-toe">
            <div onClick={this.clickHandler} className="ttt-grid" data="0">
              {this.state.squares[0]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="1">
              {this.state.squares[1]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="2">
              {this.state.squares[2]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="3">
              {this.state.squares[3]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="4">
              {this.state.squares[4]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="5">
              {this.state.squares[5]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="6">
              {this.state.squares[6]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="7">
              {this.state.squares[7]}
            </div>
            <div onClick={this.clickHandler} className="ttt-grid" data="8">
              {this.state.squares[8]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
