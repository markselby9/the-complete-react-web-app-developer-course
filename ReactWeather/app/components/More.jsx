var React = require('react');
var {Link} = require('react-router');

var MoreComponent = (props) => (
    <div>
        <h3 className="text-center page-title">More content</h3>
        <p>More</p>
        <ol>
            <li>
                <Link to="/?cityName=Albuquerque">Albuquerque</Link>
            </li>
        </ol>
    </div>
);

module.exports = MoreComponent;