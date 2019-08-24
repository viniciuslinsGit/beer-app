import React from 'react'
import PropTypes from 'prop-types'

const EmptySate = () => <p>Não existem cervejas cadastrado</p>

const Beer = ({ beer }) => {
  return(
    <> 
      {
        beer.map(beer => (
          <div key={beer.id}>
            <p>
              Nome:<b> {beer.name} </b>
              Tag:<b> {beer.tagline} </b>
              URL Imagem:<b> {beer.image_url} </b>
              Descricao:<b> {beer.description} </b>
            </p>
          </div>
        ))
      }
    </>
)}

Beer.propTypes = {
  beer: PropTypes.arrayOf(PropTypes.object)
}

Beer.defaultProps = {
  beer: []
}

export default Beer