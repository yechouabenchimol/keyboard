import React from 'react'

function KeyBoardButtons(props) {
    const keys = props.keys;

    const onButtonClick = (k) => {
        props.onKeyBoardClick(k);
    };
    const clear = ()=>{
        props.clear();
    }

    const undoLast = ()=>{
        props.undoLast();
    }

    const numbers = (props.numbers).map((k, i) => <button key={i} onClick={() => { onButtonClick(k) }} >{k}</button>)
    const keysButtons = keys.map((k, i) => <button key={i} onClick={() => { onButtonClick(k) }} >{k}</button>)

    return (
        <div>
            <h1>keyBoard</h1>
            <div>
                {numbers}
                <br />
                {keysButtons}
            </div>
            <button onClick={undoLast} >UNDO LAST</button>
            <button onClick={clear} >DELETE</button>
        </div>

    )
}

export default KeyBoardButtons
