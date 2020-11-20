import Header from "@components/Header";
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
                </Head>
                <body className="my-body-class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument;