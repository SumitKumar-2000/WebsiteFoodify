import React from 'react'
import '../../style/partnerCard.css'

const partnerCard = ({name, designation, pic, alignSelf}) => {
  return (
    <div className='card' style={{background: `url(${pic}) no-repeat center center/cover`, alignSelf : `${alignSelf}` }}>
      <div className='designationBox'>
        <div>{name},</div>
        <div>
          {designation}
        </div>
      </div>
    </div>
  )
}

export default partnerCard
