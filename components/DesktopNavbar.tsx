'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const homeIcon = (  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z"></path>
                    </svg> );
const aboutIcon = ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
                    </svg>);
const projectsIcon = (  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M18.0049 6.99979H21.0049C21.5572 6.99979 22.0049 7.4475 22.0049 7.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H18.0049V6.99979ZM4.00488 8.99979V18.9998H20.0049V8.99979H4.00488ZM4.00488 4.99979V6.99979H16.0049V4.99979H4.00488ZM15.0049 12.9998H18.0049V14.9998H15.0049V12.9998Z"></path>
                        </svg>);

const contactIcon = (   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                        </svg>);

export default function DesktopNavbar() {
    const pathname = usePathname();
    
    const navItems = [
        { name: 'Home', icon: homeIcon, href: '/' },
        { name: 'About', icon: aboutIcon, href: '/about' },
        { name: 'Projects', icon: projectsIcon, href: '/projects' },
        { name: 'Contact', icon: contactIcon, href: '/contact' },
    ];

    return (
        <aside className="w-14 bg-(--color-accent)">
            <nav className="w-full">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name} className={`py-2 ${
                                    pathname === item.href 
                                        ? 'bg-(--color-primary) text-(--color-background)' 
                                        : 'hover:bg-(--color-secondary) text-(--color-foreground)'
                                }`}>
                            <Link
                                href={item.href}
                                className={`flex items-center justify-center w-full h-10 transition-all `}
                                title={item.name}
                            >
                                {item.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
