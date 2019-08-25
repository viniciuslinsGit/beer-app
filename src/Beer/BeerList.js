import React, { Component } from 'react'
import { Paper, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import AppHeader from '../component/AppHeader/AppHeader'
import MainTemplate  from '../template/MainTemplate'
import beerApi from '../api/beer'

class BeerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listBeerGrid : []
    }
  }

  componentDidMount() {
    this.getBeerList()
  }

  getBeerList = () => {
    beerApi.all()
      .then(beerList => this.setState({ listBeerGrid: beerList }))
      .catch(error => console.error(error))
  }

  render() {

    return(
      <MainTemplate>
        <AppHeader title="Página de listagem" />
        <Paper>
          <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="right">Tagline</TableCell>
                    <TableCell align="right">URL da Imagem</TableCell>
                    <TableCell align="right">Opções</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.listBeerGrid.map(beer => (
                    <TableRow key={beer.id}>
                    <TableCell component="th" scope="row">
                      {beer.name}
                    </TableCell>
                    <TableCell align="right">{beer.tagline}</TableCell>
                    <TableCell align="right">{beer.image_url}</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" >
                        Detalhar
                      </Button>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </MainTemplate>
    )
  }
}

export default BeerList