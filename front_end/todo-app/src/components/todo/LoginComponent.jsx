import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: 'admin',
            password: '',
            hasLoginFailed: false,
            showSucccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked() {
        // if (this.state.username==='admin' && this.state.password==='admin'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     // this.setState({showSucccessMessage: true})
        //     // this.setState({hasLoginFailed: false})
        // }
        // else{
        //     this.setState({showSucccessMessage: false})
        //     this.setState({hasLoginFailed: true})
        // }

        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(() => {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // }).catch(() => {
        //     this.setState({showSucccessMessage: false})
        //     this.setState({hasLoginFailed: true})
        // })

        AuthenticationService.executeJWTAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJWT(this.state.username, response.data.token)
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch(() => {
            this.setState({showSucccessMessage: false})
            this.setState({hasLoginFailed: true})
        })
    }
    
    render() {
      return (
        <div className="countainer">
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          {this.state.showSucccessMessage && <div>Login Successful</div>}
          User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
      )
    }
}

export default LoginComponent