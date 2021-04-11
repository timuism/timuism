import React from 'react';

export default function Card ({children}) {
    return (
        <section className={"border-2 rounded-md border-primary-1 text-gray-1 m-5 p-12"}>
            {children}
        </section>
    );
};