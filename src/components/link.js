import React from 'react';

export default function Link({href, text, classList}) {
    return (
        <a href={href} class={classList ? classList : "font-semibold underline hover:text-gray-2"}>
            {text}
        </a>
    );
}