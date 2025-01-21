import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-EWP1CFS6Q6"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-EWP1CFS6Q6');
      </script>
    </>
  );
};

export default GoogleAnalytics;
