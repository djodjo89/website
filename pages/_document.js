import Document, {Html, Head, Main, NextScript} from 'next/document';

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
                    <meta name={'description'} content={'Mathys Simion\'s  website with a brief presentation and a contact form'} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
