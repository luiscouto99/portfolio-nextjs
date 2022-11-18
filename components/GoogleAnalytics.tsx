import React from 'react'

import Script from 'next/script';

const GoogleAnalytics = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J6NLE74E3M" strategy='afterInteractive' />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-J6NLE74E3M');
                `}
            </Script>
        </>
    )
}

export default GoogleAnalytics