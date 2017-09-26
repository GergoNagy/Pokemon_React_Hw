import React, { Component } from 'react';
import PokeSelector from '../components/PokeSelector'
import Poke from '../components/Poke'

class PokeCountainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            selectedPokemon: null,
            pokemon: null
        };
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then((res) => res.json())
            .then((res) => this.setState({ pokemons: res }))
    }

    onChangePoke(poke) {
        this.setState({ selectedPokemon: poke })
        pokeReq(poke, this)
    }
    
    onChangeSinglePoke(poke){
        this.setState({pokemon: poke})
    }

    render() {
        return (
            <div>
                <PokeSelector 
                    pokemons={this.state.pokemons} 
                    onChangePoke={this.onChangePoke.bind(this)}/>
                <Poke poke={this.state.pokemon} />
            </div>
        );
    }
}

export default PokeCountainer;

var pokeReq = (props, _this) => {
    let name = props.name
    console.log(name)
    fetch("https://pokeapi.co/api/v2/pokemon/" + props.name + "/")
        .then((res) => res.json())
        .then((res) => _this.setState({ pokemon: res }))

}