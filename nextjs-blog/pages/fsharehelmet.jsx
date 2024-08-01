import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const MyPage = () => {

    useEffect(() => {
        const shareBtn = document.getElementById('shareBtnHeadHelmet');
        if (shareBtn) {
            shareBtn.onclick = function () {
                const url = encodeURIComponent(window.location.href);
                const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                window.open(facebookShareUrl, 'facebook-share-dialog', 'width=800,height=600');
                return false;
            };
        }
    }, []);



    const ogImage = [
        {
            url: 'https://www.copera.org/img/img1.jpg',
            width: 1024,
            height: 576,
            alt: 'Alt text for the image',
            type:'image/jpg',
        },
        // Add more images if needed
    ];

    return (
        <>
            <Helmet>
                <title>State Lawmakers Pass Six PERA-Related Bills in 2024 Legislative Session | Colorado PERA</title>
                <meta name="description" content="That's a wrap—Colorado's 2024 legislative session has come to an end. Each session, legislators introduce hundreds of new bills, and it's not unusual for" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content="https://content.copera.org/state-lawmakers-pass-six-pera-related-bills-in-2024-legislative-session/" />
                <meta property="og:title" content="State Lawmakers Pass Six PERA-Related Bills in 2024 Legislative Session | Colorado PERA" />
                <meta property="og:description" content="That's a wrap—Colorado's 2024 legislative session has come to an end. Each session, legislators introduce hundreds of new bills, and it's not unusual for" />
                <meta property="og:site_name" content="COPERA" />
                {/* {ogImage.map((image, index) => (
                    <meta key={index} property="og:image" content={image.url} />
                ))}
                {ogImage.map((image, index) => (
                    <meta key={`${index}-width`} property="og:image:width" content={image.width.toString()} />
                ))}
                {ogImage.map((image, index) => (
                    <meta key={`${index}-height`} property="og:image:height" content={image.height.toString()} />
                ))}
                {ogImage.map((image, index) => (
                    <meta key={`${index}-alt`} property="og:image:alt" content={image.alt} />
                ))} */}
            </Helmet>
            <div>
                <button id="shareBtnHeadHelmet">Share on Facebook</button>
            </div>
        </>
    );
};

export default MyPage;
