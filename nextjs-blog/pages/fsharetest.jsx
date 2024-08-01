import { NextSeo } from "next-seo";
import React, { useEffect } from "react";

export default function FShareTest() {
    useEffect(() => {
        const shareBtn = document.getElementById('shareBtn');
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
            width: 600,
            height: 315,
            alt: 'Image description',
            type:'image/jpg',
        },
    ];

    return (
        <>
            <NextSeo
                title="State Lawmakers Pass Six PERA-Related Bills in 2024 Legislative Session | Colorado PERA"
                description="That's a wrap—Colorado's 2024 legislative session has come to an end. Each session, legislators introduce hundreds of new bills, and it's not unusual for"
                openGraph={{
                    type: 'article',
                    locale: 'en_US',
                    url: 'https://content.copera.org/state-lawmakers-pass-six-pera-related-bills-in-2024-legislative-session/',
                    title: 'State Lawmakers Pass Six PERA-Related Bills in 2024 Legislative Session | Colorado PERA',
                    description: "That's a wrap—Colorado's 2024 legislative session has come to an end. Each session, legislators introduce hundreds of new bills, and it's not unusual for",
                    images: ogImage,
                    site_name: 'COPERA',
                }}
                additionalMetaTags={[
                    {
                        name: 'viewport',
                        content: 'initial-scale=1.0, width=device-width',
                    },
                    {
                        httpEquiv: 'X-UA-Compatible',
                        content: 'IE=edge',
                    },
                ]}
            />
            <div>
                <button id="shareBtn">Share on Facebook</button>
            </div>
        </>
    );
}
