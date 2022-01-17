import React from "react"
import {withRouter} from 'react-router-dom'

class LadingPage extends React.Component{
    goToHomePage = () =>{
        this.props.history.push("/home")
    }

    render(){
        return(
            
                <div className="container text-center">
                    <h2>Bem vindo ao Sistema de Finanças Pessoal</h2>
                    Este é seu sistema de finanças pessoais,
                    clique no botão abaixo para acessar o sistema:<br /><br/>

                    <div className="offset-md-4 col-md-4">
                        <button style={{width: '100%'}} onClick={this.goToHomePage} className="btn btn-success">
                            <i className="pi pi-sign-in"></i> Acessar
                        </button>
                    </div>
                </div>
            
        )
    }

}
export default LadingPage;