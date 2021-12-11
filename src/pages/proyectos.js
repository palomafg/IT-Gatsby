import React from 'react';
import Layout from "../components/layout"
import CirclePath from "../components/circlePath"
import "./proyectos.scss"
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle ,  faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import {graphql} from "gatsby"

const Proyectos = ({
    data:{allStrapiProyectos: {edges:proyectos} }
}) => {
    console.log(proyectos);
    return (
        <Layout>
            <CirclePath text=" Proyectos •" textColor="#000000" />
            <div className="proyectosContainer">
                <div className="galeria">
                    {proyectos.map((e, i) => {
                        var current = e.node;
                        console.log(current.id)
                        return(
                            <Link  key={current.id} className="box proyectsBox" to={`../${current.id}`} >
                    
                                    <div className="contentProyectos">
                                        <h1>{current.titulo}</h1>
                                        <h2>{current.subtitulo}</h2>
                                    </div>
                                    
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
  {
    allStrapiProyectos {
      edges {
        node {
          id
          titulo
          subtitulo
          strapiId
          contenido
          imagenes {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1200
                  height: 600
                  )
              }
            }
          }
        }
      }
    }
  }
`


export default Proyectos;


