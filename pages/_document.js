import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang={'en'}>
                <Head>
                    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
                          as="style" onLoad="this.onload=null;this.rel='stylesheet'"/>
                    <noscript>
                        <link rel="stylesheet"
                              href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"/>
                    </noscript>
                    <meta name={'description'}
                          content={'Mathys Simion\'s  website with a brief presentation and a contact form'}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
