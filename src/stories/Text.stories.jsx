import React from 'react';

export default {
    title: 'Theme/Text',
    args: {
        title: 'A little title',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        navigation: 'Go to Home',
    },
};

export const Text = ({ title, body, navigation }) => (
    <>
        <h1 className="title">{title}</h1>
        <p className="body">{body}</p>
        <a className="navigation">{navigation}</a>
    </>
);
