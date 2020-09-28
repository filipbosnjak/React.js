import React, { Component } from "react";

class Todos extends Component{
    render(){
        console.log(this.props.todos);/* We access the props with props keyword */
        return(
            <div>
                <h1 className="title">Todos</h1>
                
            </div>
        );
    }
}

export default Todos;