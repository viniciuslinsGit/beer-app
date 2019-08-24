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
              <a href={beer.image_url} target="_blank">
                <img src={beer.image_url} width="250" title={beer.description} />
              </a>
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