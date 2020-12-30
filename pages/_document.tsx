/*

    Father documenta that all pages will extend of.

    Authors: Alejandro AS
    Date: 28-12-2020
*/


import Document, { Html, Head, Main, NextScript } from "next/document"



class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head
                    title="CG-Pozole"
                >
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&display=swap" rel="stylesheet"></link>
                </Head>
                <script src="https://kit.fontawesome.com/11b3324a0d.js" crossOrigin="anonymous"></script>
                <body className="my-body-class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument;