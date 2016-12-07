var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;

        var renderDate = ()=>{
            if (!completed){
                return 'Created at: ' + moment.unix(createdAt).format('YYYY-MM-DD HH:mm');
            }else{
                return 'Finished at ' + moment.unix(completedAt).format('YYYY-MM-DD HH:mm');
            }
        };

        return (
            <div onClick={() => {
                this.props.handleToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                content: {text}<br/>
                {renderDate()}
            </div>
        )
    }
});

module.exports = Todo;