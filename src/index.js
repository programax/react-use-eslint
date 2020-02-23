import React from 'react';
import ReactDom from 'react-dom';

const App = (props) => {
    return (
        <h1>
            Hola Mundo eslint!!!
        </h1>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
