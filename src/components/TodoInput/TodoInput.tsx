import React from 'react'
import {useDispatch} from 'react-redux'
import {addItems} from "../../actions/actions";
import './todoInput.scss';
import '../Ripple/ripple.scss'

function TodoInput(): JSX.Element {
    let newValue: HTMLInputElement | null;
    const dispatch = useDispatch()

    function addTask() {
        if (newValue?.value) {
            const item = {
                text: newValue.value
            }
            dispatch(addItems(item))
            newValue.value = '';
        }
    }

    return (
        <div className={`new-task-wrapper`}>
            <input
                id={`inputTask`}
                type={`text`}
                placeholder={`Enter task`}
                onKeyPress={e => {
                    (e.key === "Enter") && addTask()
                }}
                ref={(prevValue) => newValue = prevValue}/>
            <button
                className={`btn-ripple`}
                value={`submit`}
                onClick={addTask}
            >Add
            </button>
        </div>
    );
}

export default TodoInput;


