import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const React = require('react')
const ms = require('pretty-ms')


class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.waitTimer = this.waitTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1000);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  waitTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }
  render() {
    let start = (this.state.time === 0) ?
    <Button variant="success" onClick={this.startTimer}>Start</Button> :
      null

    let stop = (this.state.time === 0 || !this.state.isOn) ? null :
    <Button variant="danger" onClick={this.stopTimer}>Stop</Button>

    let wait = (this.state.time === 0 || !this.state.isOn) ?
      null :
      <Button variant="light" ondblClick={this.stopTimer}>Wait</Button>

    let reset = (this.state.time === 0 || this.state.isOn) ? null :
    <Button variant="dark" onClick={this.resetTimer}>Reset</Button> 
      

     return (
       <div>
         <h3>timer: {ms(this.state.time)}</h3>
         {start}
         {wait}
         {stop}
         {reset}
       </div>
     );
  }
}
export default Timer