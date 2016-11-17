var React = require('react');
var Nav = require('./Nav');

var MainComponent = (props) => (
    <div>
        <Nav/>
        {props.children}
    </div>
);

module.exports = MainComponent;
