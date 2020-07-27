import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import '../styles/projects.scss'

const colors = ["#f1a9a080", "#6bb9f080", "#9b59b680", "#66cc9980", "#446cb380", "#c8f7c580", "#dcc6e080", "#c0392b80"]

const Projects = () => {

    const data = useStaticQuery(graphql`
        query {
            allMvpProjects(filter: {alternative_fields: {name: {ne: null}}}) {
                nodes {
                  alternative_fields {
                    name
                    about
                    website
                    status
                    MRR
                    pageviews
                    Launched(fromNow: true)
                    logo {
                      url
                    }
                    technology
                  }
                }
            }
        }
    `);

    const projectsList = data.allMvpProjects.nodes

    return (
        <div className="projects">
            <h3 className="h3-heading">Projects</h3>
            <div className="project-cards">
            {projectsList.map((project, key) => {
                const {name, about, website, status, pageviews, Launched, logo, technology} = project.alternative_fields
                return (
                    <a className="project-card" target="_blank" href={website} key={key}>
                        <div className="card-head" style={{backgroundColor: colors[key]}}>
                        <div className="logo"><img src={logo[0].url} width="50px" alt={name}/></div>
                        </div>
                        <div className="content">

                        <h2 className="name">{name}</h2>
                        <small>{status}</small>
                        <p>{about}</p>
                        </div>
                    </a>
                )
            })}
            </div>
        </div>
    )
}

export default Projects