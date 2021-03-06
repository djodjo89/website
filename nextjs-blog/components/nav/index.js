import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                nav {
                    padding-left: 1rem;
                }
                ul { 
                    margin: 0;
                    padding-top: 7%;
                    padding-left: 0;
                    list-style: none; 
                    display: flex; 
                    justify-content: flex-start; 
                }
                li { 
                    margin-right: 5%;
                    font-weight: bold;
                }
                a { 
                    text-decoration: none; 
                    color: white; 
                }
            `}</style>
        </nav>
    )
}
