import React from 'react';

import IconWebpack from '@assets-svg/icon-webpack.svg';

const App = () => (
    <>
        <img src={IconWebpack} alt="icon webpack" width="150" height="150" />
        <h1 className="title">Hello World</h1>
        <div className="tag">
            <span className="text">1.0</span>
        </div>
    </>
);
export default App;
