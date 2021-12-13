import React, { Component } from 'react';

class Main extends Component {
    state = {
        counter: 0,
    };

    addOneHandler = () => {
        this.setState({counter: this.state.counter + 1});
    };

    removeOneHandler = () => {
        if (this.state.counter !== 0) {
            this.setState({counter: this.state.counter - 1});
        }
    };

    resetHandler = () => {
        this.setState({ counter: 0});
    };

    render() {
    let circleClass = `${
        this.state.counter === 0 
        ? ""
        : this.state.counter % 2 === 0
        ? "even"
        : "odd"
    } circle`;

        return (
            <main>
            <div>
              <div className={circleClass}>
                    <h1>{this.state.counter}</h1>
              </div>
            <button onClick={this.addOneHandler}>Add one</button>
            <button onClick={this.removeOneHandler}>Remove one</button>
            <button onClick={this.resetHandler}>Reset</button>
            </div>
            </main>
        );
    }
}

export default Main;
