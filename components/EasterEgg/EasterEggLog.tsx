import React, { useEffect } from 'react';

const EasterEggLog = () => {
  useEffect(() => {
    console.log(
      '%cI see you are a curious one... \nCongrats though! You are now one step closer from findind the easter egg. \nClick on my name 5 times (located in the header), to see some magic happening ;)',
      'color: #66D99B; background-color: #171717; font-size: 18px; ',
    );
  }, []);

  return <></>;
};

export default EasterEggLog;
