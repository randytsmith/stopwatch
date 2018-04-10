import React, { Component } from 'react';
import './App.css';
import formatElapsedTime from './formatElapsedTime';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milliSec: 0,
      difference: 0,
      laps: [],
      diffs: [],
      lastClearedIncrementer: null
    };
    this.incrementer = null;
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.lapRecording = this.lapRecording.bind(this);
    this.resetRecording = this.resetRecording.bind(this);

  }

  startRecording() {
    this.incrementer = setInterval( () => {
      this.setState({
        milliSec: this.state.milliSec + 10,
        difference: this.state.difference + 10,
      })
    }, 10)
  }

  stopRecording() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  lapRecording() {
    this.setState({
      laps: this.state.laps.concat([{
        lap: this.state.milliSec,
        diff: this.state.difference}]),
      difference: 0
    })
  }

  resetRecording() {
    this.setState({
      milliSec: 0,
      difference: 0,
      laps: []
    });
  }

  render() {
    let result = formatElapsedTime(this.state.milliSec);
    let diffResult = formatElapsedTime(this.state.difference);

    return (
      <div className="App">
        <h2> {result} </h2>
        <h3> {diffResult} </h3>

        {(this.state.milliSec === 0 || this.incrementer === this.state.lastClearedIncrementer
          ? <button onClick={this.startRecording}>start</button>
          : <button onClick={this.stopRecording}>stop</button>
        )}

        {(this.state.milliSec !== 0 && this.incrementer !== this.state.lastClearedIncrementer
          ? <button onClick={this.lapRecording}>lab</button>
          : null
        )}

        {(this.state.milliSec !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <button onClick={this.resetRecording}>reset</button>
          : null
        )}

        <table>
          <tbody>
            { this.state.laps.map((lap, i) =>
                <tr key = {i} ><td><strong>{i + 1}</strong> </td><td> {formatElapsedTime(lap.diff)}</td> <td> {formatElapsedTime(lap.lap)}</td></tr>)
            }
          </tbody>
        </table>
      </div>

    )
  }
}

export default App;
