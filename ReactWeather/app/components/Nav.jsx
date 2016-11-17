var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavComponent = (props) => (
    <div>
        <h2>Nav</h2>
        <IndexLink to="/">Weather</IndexLink>
        <Link to="/about">About</Link>
        <Link to="/more">More</Link>
    </div>
);

module.exports = NavComponent;