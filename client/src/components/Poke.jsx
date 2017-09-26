import React from 'react'

const Poke = (props) => {
    if (!props.poke) {
        return null
    }

    console.log('main',props.poke)
    console.log('select', props.poke.sprites.back_default)
    return (
        <div>
            <h2>{props.poke.name}</h2>
            <img src={props.poke.sprites.front_default} alt="" />
            <img src={props.poke.sprites.back_default} alt=""/>
        </div>
    );
}

export default Poke;