import React from 'react';

export default function Header({ children }) {
    return (
        <header>
            {children}
            <style jsx>{`
                header {
                    background-color: blue;
                    display: block;
                    position: sticky;
                    position: -websit-sticky;
                    top: 0;
                    width: 100%;  
                    height: 64px;
                }
            `}</style>
        </header>
    );
}
