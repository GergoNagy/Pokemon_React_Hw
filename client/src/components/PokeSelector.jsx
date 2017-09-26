import React from 'react'

class PokeSelector extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            selectName: undefined
        }
    }

    handleChange(e) {
        this.setState({ selectedIndex: e.target.value });
        this.props.onChangePoke(this.props.pokemons.results[e.target.value])
    }

    render() {

        if (this.props.pokemons.length === 0) {
            return null
        }
        const popDropDown = this.props.pokemons.results.map((poke, index) => {
            return <option value={index} key={index}>{poke.name}</option>
        });

        return (
            <select id='pokemons' 
            value={this.state.selectName}
            onChange={this.handleChange.bind(this)}
            >
            {popDropDown}
            </select>
        )
    }
}

export default PokeSelector;