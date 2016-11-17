var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //object destructuring
var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');
var More = require('./components/More');

// load css by require
//load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        {/*/root router*/}
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component={About}/>
            <Route path="more" component={More}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
