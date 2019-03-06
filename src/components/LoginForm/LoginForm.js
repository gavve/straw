import React, { Component } from 'react'

export default class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      passwordConf: ""
    }
  }

  onChange(e){
    switch(e.target.id) {
      case "email":
        this.setState({
          email: e.target.value
        })
        break;
      case "password":
        this.setState({
          password: e.target.value
        })
        break;
      case "passwordConf":
        this.setState({
          passwordConf: e.target.value
        })
        break;
      default:
        break;
    } 
  }

  submit(e) {
    e.preventDefault();
    console.log("submiting");
    if(this.state.email.length > 0 && this.state.password.length > 0) {
      console.log("validation true");
      (async () => {
        const rawResponse = await fetch('http://localhost:5000/authenticate', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
    }
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={(e) => this.onChange(e)} value={this.state.email} type="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => this.onChange(e)} value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-check">
            <input onChange={(e) => this.onChange(e)} value={this.state.passwordConf} type="checkbox" className="form-check-input" id="passwordConf" />
            <label className="form-check-label" htmlFor="passwordConf">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => this.submit(e)}>Submit</button>
        </form>
      </div>
    )
  }
}
