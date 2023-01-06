import React, { Component } from 'react'
import './style.css'

export default class Chatbot extends Component {
  render() {
    return (
      <div>
        <header>

          <div class="container">
            <h1>Log In</h1>
            <div class="box">
              <i class="fa fa-envelope"></i>
              <input type="email" name="email" id="email" placeholder="Enter Your Email"/>
            </div>
            <div class="box">
              <i class="fa fa-key"></i>
              <input type="password" name="password" id="password" placeholder="Enter Your Password"/>
            </div>
            <button class="btn">Sign In</button>
          </div>
        </header>
      </div>
    )
  }
}

