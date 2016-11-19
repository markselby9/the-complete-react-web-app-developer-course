var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    {/*<div className="top-bar-title">Timer</div>*/}
                    <ul className="menu">
                        <li className="menu-text">Timer</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/timer">Timer</Link></li>
                        <li><Link to="/countdown">Countdown</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Nav;