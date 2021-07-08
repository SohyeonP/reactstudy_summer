import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회 할때는 this.state로 조회 합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            //this.state를 사용하여 state에 새로운 값을 넣을수 있음
            this.setState({ number: number - 1 }, console.log(this.state));
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
