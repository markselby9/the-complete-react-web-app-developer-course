var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    {/*<div className="top-bar-title">Timer</div>*/}
                    <ul className="menu">
                        <li className="menu-text">Timer</li>
                        <li><IndexLink to="/" activeClassName="activeLink">Home</IndexLink></li>
                        <li><Link to="/timer" activeClassName="activeLink">Timer</Link></li>
                        <li><Link to="/countdown" activeClassName="activeLink">Countdown</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Nav;