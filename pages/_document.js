import Document, {Html, Main, NextScript} from 'next/document';
import Head from 'next/head';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang={'en'}>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
