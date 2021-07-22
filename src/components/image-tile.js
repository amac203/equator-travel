import * as React from 'react'
import { Link } from 'gatsby'

const ImageTile = (props) => {
  return (
    <div className='imageTile'>
      <img src={props.imageSource} alt={props.imageAlt}/>
      <div className='caption'>
        {props.caption}
      </div>
      <div className='description'>
        {props.description}
      </div>
      <Link className='linkText' to={props.linkedPage}>{props.linkText}</Link>
    </div>
  )
}

export default ImageTile
