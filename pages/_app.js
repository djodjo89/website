import withDarkMode from 'next-dark-mode';

function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default withDarkMode(App);
