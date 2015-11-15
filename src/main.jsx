import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    render: function(){
        return (
            <h1>Hello from component-1 </h1>
        );
    }
});

class HelloMessage extends React.Component{
    render() {
        return <h1>Hello from component-2!</h1>
    }
}

ReactDOM.render(<App />, document.getElementById("example1"));

ReactDOM.render(<HelloMessage />, document.getElementById("example2"));
