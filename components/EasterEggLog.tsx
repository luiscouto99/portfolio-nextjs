import React, { useEffect } from 'react'

const EasterEggLog = () => {
    useEffect(() => {
        console.log("%cI see you are a curious one... \nYou are one step closer from discovering the easter egg. \nClick on my name in the <header>, 5 times, to see some magic happening ;)", "color: #66D99B; background-color: #171717; font-size: 18px; ")
    }, []);
    
  return <></>
}

export default EasterEggLog