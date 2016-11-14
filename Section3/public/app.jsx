var GreaterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Greetings, {name}</h1>
                <p>{message + ' ...'}</p>
            </div>
        );
    }
});

var GreaterForm = React.createClass({
    onFormSubmit: function(event){
        event.preventDefault();
        var updateData = this.refs;
        var newData = {};
        if (updateData.inputName.value){
            newData.name = updateData.inputName.value;
        }
        if (updateData.inputMessage.value){
            newData.message = updateData.inputMessage.value;
        }
        updateData.inputName.value = "";
        updateData.inputMessage.value = "";
        this.props.onNewData(newData)
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name:</label><input type="text" ref="inputName"/>
                <label>Message:</label><textarea ref="inputMessage"></textarea>
                <button>Update</button>
            </form>
        )
    }
});


var Greeter = React.createClass({
    handleNewData: function(data){
        if (data.hasOwnProperty("name")){
            this.setState({
                name: data.name,
            });
        }
        if (data.hasOwnProperty("message")){
            this.setState({
                message: data.message,
            });
        }
    },
    getDefaultProps: function () {
        console.log("getDefaultProps");
        return {
            name: "default",
            message: "message"
        };
    },
    getInitialState: function () {
        console.log("getInitialState");
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreaterMessage name={name} message={message}/>

                <GreaterForm onNewData = {this.handleNewData}/>
            </div>
        );
    }
});

var firstname = 'Andrew';
var mymessage = "I'm a message";

ReactDOM.render(
    <Greeter name={firstname} message={mymessage}/>,
    document.getElementById('app')
);