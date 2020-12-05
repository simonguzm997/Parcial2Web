import React from 'react';
import {FormattedNumber, FormattedMessage} from 'react-intl';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';

export default class Pokemon extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.pokemon.number}</th>
                <td><img src={this.props.pokemon.ThumbnailImage} 
                alt={this.props.pokemon.ThumbnailAltText}/></td>
      			<td>{this.props.pokemon.name}</td>
  				<td>{this.props.pokemon.description}</td>
                <td><FormattedNumber value={this.props.pokemon.height}/></td>
                <td><FormattedNumber value={this.props.pokemon.weight}/></td>
      			<td>{this.props.pokemon.type && this.props.pokemon.type.map(t => (
                      <Badge variant="secondary">{t}</Badge>
                      ))}</td>	
  			</tr>
  		);
	}
}