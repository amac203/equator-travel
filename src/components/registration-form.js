import * as React from 'react'
import { Link } from 'gatsby'

export default class RegistrationForm extends React.Component {
  state = {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    city: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.setUser(this.state.firstName + '' + this.state.lastName)
  }

  render() {
    return (
       <form className='registrationForm'>
       <div className='formRow'>
          <div className='formItem'>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
          </div>
          <div className='formItem'>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className='formRow'>
          <div className='formItem'>
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
          </div>
          <div className='formItem'>
            <select value={this.state.city}>
              <option value selected="City">City</option>
              <option value="Auckland">Auckland</option>
              <option value="Tauranga">Tauranga</option>
              <option value="Dargaville">Dargaville</option>
              <option value="Hamilton">Hamilton</option>
              <option value="Wellington">Wellington</option>
              <option value="Christchurch">Christchurch</option>
              <option value="Dunedin">Dunedin</option>
            </select>
          </div>
        </div>
        <div className='formButtonItem'>
          <button className='formButton' type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
