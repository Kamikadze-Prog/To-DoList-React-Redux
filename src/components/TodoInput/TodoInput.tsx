import React from 'react'
import {useDispatch} from 'react-redux'
import {addItems} from "../../actions/actions";

function TodoInput(): JSX.Element {
    let newValue: HTMLInputElement | null;
    const dispatch = useDispatch()

    function addTask(e: { preventDefault: () => void; }) {
        e.preventDefault()
        if (newValue?.value){
          const item = {
                text: newValue.value
            }
            dispatch(addItems(item))
            newValue.value= '';
        }
    }
    return (
        <>
            <input id={`inputTask`} type={`text`} ref={ (prevValue) => newValue = prevValue}/>
            <button value={`submit`} onClick={addTask}>Добавить таску</button>
        </>
    );
}

export default TodoInput;


