var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.handleSearch(showCompleted, searchText);
    },

    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="search Todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>Show completed Todos
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;