import React from 'react'

const ReposList = props => {

    return (

        <ul>
            {props.repositorios.map(repositorio => (
                    <li key={repositorio.id}>{repositorio.name }</li>
                ) 
            )}
        </ul>
    )
}

export default ReposList