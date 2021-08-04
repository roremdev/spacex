import React from 'react';

import Tag from '@components/Tag';
import IconWebpack from '@assets-svg/icon-webpack.svg';

const App = () => (
    <>
        <img src={IconWebpack} alt="icon webpack" width="150" height="150" />
        <h1 className="title">Hello World</h1>
        <Tag text="1.0.0" />
    </>
);
export default App;
