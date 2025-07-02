import React, { useEffect, useState } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const TawkMessenger = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    // Delay the loading of the Tawk widget by 3 seconds
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);  // Adjust the delay time as needed

    // Cleanup timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showWidget && (
        <TawkMessengerReact
          propertyId="659d2e170ff6374032be0cf7"
          widgetId="1hjmvo3si"
        />
      )}
    </div>
  );
};

export default TawkMessenger;
