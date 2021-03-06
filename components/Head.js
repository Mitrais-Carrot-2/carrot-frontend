import React from 'react';

export default function Head({title}) {
    return (
        <head>
            <title>Mitrais Carrot - {title}</title>
            <meta
                name="description"
                content="Mitrais Carrot is a system used for administrative task of all company trainings."
            />
            <link rel="icon" href="/favicon.ico" />
        </head>
    );
}