import React from 'react';

import IconWebpack from '@svg/icon-webpack.svg';
import Icon from '@components/Icon.jsx';

const App = () => (
    <>
        <img src={IconWebpack} alt="icon webpack" width="150" height="150" />
        <h1 className="title">Hello World</h1>
        <p className="body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            reiciendis id, amet itaque blanditiis quaerat quibusdam adipisci!
            Voluptatem ab laborum animi aliquid vero impedit, consequatur
            suscipit qui autem nesciunt molestiae!
        </p>
        <a className="navigation">Volver a casa</a>
        <Icon vector="Wikipedia" />
        <div className="btn btn-blue">Button</div>
    </>
);
export default App;
