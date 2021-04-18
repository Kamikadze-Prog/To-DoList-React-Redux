import React from 'react';
import './App.scss';
import {connect} from "react-redux";
import ItemsList from "../components/ItemList/ItemList";
import FilterButton from "../components/FilterButton/FilterButton";
import {Filters} from "../reducers/visibility";
import Search from "../components/Search/Search";
import TodoInput from '../components/TodoInput/TodoInput';

function App(): JSX.Element {
    return (
        <div className="todo-list-wrapper">
            <div className={`main-wrapper`}>
                <h1>TO DO</h1>
            </div>
            <TodoInput/>
            <div className={`filters-wrapper`}>
                <div className={`filters-button-wrapper`}>
                    <FilterButton filter={Filters.SHOW_ALL}>All</FilterButton>
                    <FilterButton filter={Filters.SHOW_ACTIVE}>Active</FilterButton>
                    <FilterButton filter={Filters.SHOW_COMPLETED}>Done</FilterButton>
                </div>
            </div>
            <Search/>
            <div className={`items-list-wrapper`}>
                <ItemsList/>
            </div>
        </div>
    );
}

export default connect()(App)

