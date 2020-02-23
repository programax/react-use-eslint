import React from 'react';
import ReactDom from 'react-dom';

const App = (props) => {
    return (
        <div>
            hello world
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
