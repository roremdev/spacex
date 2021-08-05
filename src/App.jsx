import React from 'react';

import IconWebpack from '@svg/icon-webpack.svg';
import Icon from '@components/Icon.jsx';

const App = () => (
    <>
        <img src={IconWebpack} alt="icon webpack" width="150" height="150" />
        <h1 className="title">Hello World</h1>
        <Icon vector="Wikipedia" />
    </>
);
export default App;
