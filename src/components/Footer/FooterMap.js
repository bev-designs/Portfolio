import React from 'react';
import {Map,  GoogleApiWrapper} from 'google-maps-react';

const FooterMap = () => {
    return (
       
        <Map 
            google={this.props.google} 
            // style = {{ width: "100%", height:"100%" }}
            zoom={10}
            initialCenter = {
               { lat : -33.924870,
                 lng :  18.424055        
                }
            }>
         </Map>
      
    )

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDCMGAgdxZC-xI8cWwpPUCNCtDjNQrVS3k"
  })(FooterMap);

