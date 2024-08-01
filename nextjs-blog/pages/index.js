import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";


export default function Home() {


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
    <div className={styles.container}>
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

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
