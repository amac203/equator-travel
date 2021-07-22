import * as React from 'react'
import ImageTile from '../components/image-tile'
import ImageCarousel from '../components/image-carousel'
import RegistrationForm from '../components/registration-form'
import sunset from '../images/sunset.jpg'
import palmTrees from '../images/palms.jpg'
import fb from '../images/fb.jpg'
import ig from '../images/ig.jpg'
import yt from '../images/yt.jpg'
import './styles.scss'

export default class Index extends React.Component {
  state = {
    userName: '',
  }

  setUser(newUserName) {
    this.setState({userName: newUserName})
  }

  render() {
    let userGreeting

    if (this.userName) {
      userGreeting = <div>'Thank you, ' {this.userName} </div>
      }

    return (
      <main>
        <div className='mainContent'>
          <title>Equator Travel</title>
          <h1>Welcome to Equator Travel</h1>
          <p>Register your interest:</p>
          <RegistrationForm setUser={this.setUser}></RegistrationForm>
          {userGreeting}
          <div className='imageTileContainer'>
            <ImageTile
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              imageSource={sunset}
              linkedPage='/sunset'
              linkText='Go to the sunset'
              imageAlt='Image of sunset'
              caption='Pink and Purple sunset'
            > </ImageTile>
            <ImageTile
              description='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              imageSource={palmTrees}
              linkedPage='/trees'
              linkText='View some more'
              imageAlt='Image of palm trees'
              caption='Sublime Trees'
            > </ImageTile>
          </div>
          <ImageCarousel></ImageCarousel>
        </div>
          <div className='footer'>
            <div className='socialContactInfo'>
              <div className='socialLinks'>
              <img className='socialIcon' src={fb}/>
              <img className='socialIcon'src={ig}/>
              <img className='socialIcon'src={yt}/>
              </div >
              <div className='description'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className='addressContactInfo'>
              <div className='caption'>
              Main Address
              </div>
              <div className='description'>
              123 Thalia Way
              <br />
              Kingston
              <br />
              Jamaica
              </div>
              <div className='caption'>
              Contact
              </div>
              <div className='description'>
              555-345-2345
              <br />
              contact@eqtravel.co.jm
              </div>
            </div>
          </div>
      </main>
    )
  }
}
