import React, { Component } from 'react'
import { fetchRepos } from '../../service/repos-api'
import ReposList from './ReposList'

class ReposContainer extends Component{

    constructor(props){
        super(props)

        this.state = {

            repositorios: []
        }
    }

    componentDidMount(){
        fetchRepos('lucasrc98').then(res => this.setState({repositorios: res.data}))
    }

    render(){
        return(
            <div>
                <h1>Repositórios</h1>
                <ReposList repositorios = {this.state.repositorios}></ReposList>
            </div>
        )
    }
}

export default ReposContainer