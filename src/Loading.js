import React from 'react'


class Loading extends React.Component{

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render(){
        return(
            <p>cargado ...</p>
        )
    }
}

export{ Loading }