import React, { Component } from 'react'
import { fetchRepos } from '../../service/repos-api'
import ReposList from './ReposList'

class ReposContainer extends Component{

    constructor(props){
        super(props)

        this.state = {

            repositorios: [],
            username: '',
        }

        this.changeHandler = this.changeHandler.bind(this)
    }

    componentDidMount(){
        fetchRepos('lucasrc98').then(res => this.setState({repositorios: res.data}))
    }

    changeHandler(ev){
        this.setState({repositorios: ev.target.value})
    }

    render(){
        return(
            <div>
                <h1>Repositórios</h1>

                <form action="#">
                    <input 
                        type="search" 
                        onChange = {this.changeHandler}>

                    </input>
                    <input type="button" value="" onClick = {}></input>
                </form>



                <ReposList repositorios = {this.state.repositorios}></ReposList>
            </div>
        )
    }
}

export default ReposContainer