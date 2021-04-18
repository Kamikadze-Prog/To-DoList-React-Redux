import React from 'react'
import {useDispatch} from "react-redux";
import { deleteItem } from '../../../actions/actions';
import './item.scss'
import cx from "classnames";

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
        <div
            className={cx('item-wrapper', {
                "done": completed
            })}
        >
            <div className={`item-text`}>
            <input defaultChecked={completed} type={`checkBox`} onClick={onClick}/>
            <label
                className={cx('btn-ripple', {
                "done": completed
            })}
            >{text}</label>
            </div>
            <span className={`item-delete`} onClick={onDelete}>×</span>
        </div>
    );
}

export default Item
