import './Button.css';

import React from 'react';

const Button = ({name, calculation}) => {
  return (
    <button className="button" onClick={()=>calculation(name)}>{name}</button>
  )
}

export default Button