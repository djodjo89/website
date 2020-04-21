import Nav from '../nav';
import Header from '../header';

export default function Layout({ children }) {
    return (
        <div>
            <Header>
                <Nav/>
            </Header>
            <div className={'container'}>
                {children}
            </div>
            <style jsx>{`
                .container {
                    max-width: 36rem;
                    padding: 0 1rem;
                    margin: 3rem auto 6rem;
                }
            `}</style>
            <style global jsx>{`
                body {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
        </div>
    );
}
