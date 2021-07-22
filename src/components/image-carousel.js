import * as React from 'react'
import { Link } from 'gatsby'
import i1 from '../images/i1.jpg'
import i2 from '../images/i2.jpg'
import i3 from '../images/i3.jpg'
import i4 from '../images/i4.jpg'
import i5 from '../images/i5.jpg'
import i6 from '../images/i6.jpg'

export default class ImageCarousel extends React.Component {




  render () {

    return (
      <div className='imageCarousel'>
        <img src={i1} />
        <img src={i2} />
        <img src={i3} />
        <img src={i4} />
        <img src={i5} />
        <img src={i6} />
      </div>
    )
  }
}
