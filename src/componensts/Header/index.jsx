import React from 'react'
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import '../../style/header.css'

const Header = () => {
  return (
    <div class="grid grid-cols-2 place-items-center w-full items-center mb-2 relative">
        <LeftComponent/>
        <RightComponent/>
</div>
  )
}

export default Header