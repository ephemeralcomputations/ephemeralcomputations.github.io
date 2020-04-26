import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const EyeBench = () => {
  return (
    <React.Fragment>
      <strong>April 25th 2020</strong>
      <p style={{fontSize: "16px"}}>Bench outside Olympic Sculpture Park</p><br/>
      <p style={{fontSize: "14px"}}>Like most first things you try, this first attempt at a public installation, also consisted of many mistakes. I failed to research the security situation at the park after it closed at night. When I scoped it out during the day it seemed like some of the jogging trails would remian open at night. However, we quickly found out that there are tons of security guards on all entrances to the park, even the small trails near the train tracks. And they would not let us in. Also, the fact that we had a folding table and lawn chairs made it seem like we were gonna have a picnic instead of creating public art. Anyways, we found this cool bench just outside the park. We quickly setup our equipment and got a quick scan in before one of the security guard approached us. After explaning the project he decided to leave us alone but still kept a close watch. This inturn led us to not redo the scan, even though it was terrible. I decided to create the worst surface and project as many random built-in effects I had lol. The outcome was very bad. I hope I either get a permit or come back here just before sunrise when the park opens.</p><br/>
      <InstagramEmbed
        url='https://www.instagram.com/p/B_breqEpuHW/'
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

export { EyeBench }