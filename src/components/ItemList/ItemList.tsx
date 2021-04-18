import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {updateItem} from '../../actions/actions'
import Item from './Item/Item';
import {getVisibleTodos} from "../../reducers/visibility";
import {ItemType} from "../../reducers/items";
import './itemList.scss';

function ItemsList(props: { items: ItemType[] }) {
    const dispatch = useDispatch()
    const {items} = props;

    return (
        <>
            {items.length !== 0 ?
                <div className={'item-list'}>
                    {items.map((item: ItemType) => (
                        <Item key={item.id} {...item} onClick={() => dispatch(updateItem(item.id))} id={item.id}/>
                    ))}
                </div> :
                <span className={`done-all-task`}>Don`t have any task :)</span>}
        </>
    );
}

export interface StateType {
    items: ItemType[];
    visibilityFilter: string
    text?: string
}

const mapStateToProps = (state: StateType) => ({
    items: getVisibleTodos({todos: state.items, filter: state.visibilityFilter})
});

export default connect(mapStateToProps,)(ItemsList);


