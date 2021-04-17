import React from 'react'
import {useDispatch} from "react-redux";
import { deleteItem } from '../../actions/actions';

interface ItemProps {
    onClick: React.MouseEventHandler<HTMLInputElement> | undefined,
    completed: boolean,
    text: string,
    id: number
}

function Item(props: ItemProps): JSX.Element {
    const {onClick, completed, text, id} = props;
    const dispatch = useDispatch()

    function onDelete() {
        dispatch(deleteItem(id))
    }

    return (
        <li className={'item'}>
            <input defaultChecked={completed} type={`checkBox`} onClick={onClick}/>
            <label>{text}</label>
            <span onClick={onDelete}> X</span>
        </li>
    );
}

export default Item
