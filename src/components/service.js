import React from 'react'
import '../style/service.css'

const Service = () => {

  return (
    <div className='serviceContainer' id='service' > 
      <div className='Head maxWidth'>
        OUR TECHNOLOGY
      </div>

      <div className='offerBox maxWidth'>
        <div className='feature' >
          <div className='imageBox'>
            <img src={require('../assets/imageScanimg.PNG')} alt="featuring scan"/>
          </div>
          <div className='infoBox'>
            <h1 className='infoBoxHead'> Food Scanning  </h1>
            <p className='infoBoxPara'>Leveraging the use of AI to depict nutritional values of every day food items through your device camera.</p>
          </div>
        </div>
        
        <div className='feature' >
          <div className='infoBox'>
            <h1 className='infoBoxHead'>  Calorie and Nutrient Tracking </h1>
            <p className='infoBoxPara'>Record your daily detailed calorie intake, better control over food diet.</p>
          </div>
          <div className='imageBox'>
            <img src={require('../assets/foodTrackimg.PNG')} alt="featuring scan"/>
          </div>
        </div>

        <div className='feature' >
          <div className='imageBox'>
            <img src={require('../assets/communityImg.PNG')} alt="featuring scan"/>
          </div>
          <div className='infoBox'>
            <h1 className='infoBoxHead'> Community Building and Brand Promotion </h1>
            <p className='infoBoxPara'>Community of Like-minded & Health conscious individuals, targeting ads to a specific domain, cheaper 'Cost Per Click' for brands. </p>
          </div>
        </div>

        <div className='feature' >
          <div className='infoBox'>
            <h1 className='infoHeadButton curPointer absoluteCenter'>
              <a className='linkDecor' href='https://foodify-axios-image-api-test.ishkapoor.repl.co/' target='_blank' rel='noreferrer'>
                 Try Now
              </a>
            </h1>
            <p className='infoBoxPara'>Our ML model is one of the best architecture that we've developed whose core is based on faster inference and accurate results.</p>
          </div>
          <div className='imageBox'>
            <img src={require('../assets/ourDemo.png')} alt="featuring scan"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Service
