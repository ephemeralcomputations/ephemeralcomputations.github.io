import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const RoofPlants = () => {
  return (
    <React.Fragment>
      <strong>April 24th 2020</strong>
      <p style={{fontSize: "16px"}}>Rooftop of Alto Apartments</p><br/>
      <p style={{fontSize: "14px"}}>I wanted to test out the portable power supply I bought so I decided to do a test installation on the rooftop of my apartment building. I found this simple plant box that was also near a standing table. The height of the table was important to get a good scan. The visuals consist of a built-in color flood effect in Lightform Creator and few stock virus videos I found on Videezy. The backdrop of downtown Seattle skyline makes the installation more appealing.</p><br/>
      <InstagramEmbed
        url='https://www.instagram.com/p/B_Zt-W1JNjR/'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </React.Fragment>
  )
} 

export { RoofPlants }