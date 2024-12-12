import React from 'react';

const GoogleMapLocation = () => {
  return (
    <div>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=37.7749295,-122.4194155"
        allowFullScreen
      />
    </div>
  )
}

// Since we are not using API keys, we will use a static iframe with a randomized location.
// For this example, we will use the location of the Golden Gate Bridge in San Francisco, CA.
// You can replace the src URL with any other location you want to display.

// If you want to use a different location, you can use the following format:
// https://www.google.com/maps/embed/v1/place?q=latitude,longitude

export default GoogleMapLocation;




