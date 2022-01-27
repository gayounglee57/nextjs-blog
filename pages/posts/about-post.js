import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>About Post Yay</title>
        </Head>
        <Script 
            src="https://connect.facebook.net/en_US/sdk.js" 
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <h1>About</h1>
        <p>Zassou is a character from Sumikko Gurashi. Sumikko Gurashi is a bunch of cute characters who like to hang out quietly in a corner.</p>
        <p>There is Tonkatsu who is a leftover piece and Penguin? who isn't sure if they're real penguin.</p>
        <p>There is also the real Penguin who has travelled all over the world. And also Polar Bear who doesn't like the cold and so escaped the North Pole and now drinks hot tea in a corner somewhere.</p>
        {/* <h2><Link href="/"><a>Back to home page</a></Link></h2> */}
    </Layout>
  }