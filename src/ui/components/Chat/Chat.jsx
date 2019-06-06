import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.css';
import { connect } from 'react-redux';


class Chat extends Component{
  handleClick = () => {
    this.props.addMessage(this.onChange.value);
    this.onChange.value = '';
  }
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.props.addMessage(this.onChange.value);
      this.onChange.value = '';
    }
  };
  static propTypes = {
    receivedMail:PropTypes.array.isRequired
  }
  render(){
    console.log(this.props);
    return <section className = {styles.chat} >
        <ul>
          {this.props.receivedMail.map((item,index) => <li key = {index} className = {index % 2 === 0 ? styles.right : styles.left} >{item}</li>)}
        </ul>
        <input onKeyDown = {this.handleKeyDown} ref = {(input) => this.onChange = input} />
        <button type = 'submit' onClick = {this.handleClick}>sent</button>
      </section>
  }
}
const mapStateToProps = ({chat}) => {
    return { receivedMail: chat.message }
}
const mapDispatchToProps = (dispatch) => ({
     addMessage: (message) => dispatch({type:'ADD_MESSAGE', post:message})
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
