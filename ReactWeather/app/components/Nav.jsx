var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavComponent = React.createClass({
        onSearch: function (e) {
            e.preventDefault();

            var searchCityName = this.refs.searchCityName.value;
            var encodedSearchCityName = encodeURIComponent(searchCityName);
            if (searchCityName){
                window.location.hash = '#/?cityName='+encodedSearchCityName;
                this.refs.searchCityName.value = '';
            }
        },

        render: function () {
            return (
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Weather app!</li>
                            <li><IndexLink to="/">Weather</IndexLink></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/more">More</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li>
                                    <input type="search" ref="searchCityName" placeholder="Search Weather"/>
                                </li>
                                <li>
                                    <input type="submit" className="button" value="Get weather"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            );
        }
    }
);

module.exports = NavComponent;
