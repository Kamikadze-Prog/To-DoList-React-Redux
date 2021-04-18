import React from 'react';
import './App.css';
import {connect} from "react-redux";
import ItemsList from "../components/ItemList/ItemList";
import FilterButton from "../components/FilterButton/FilterButton";
import {Filters} from "../reducers/visibility";
import Search from "../components/Search/Search";
import TodoInput from '../components/TodoInput/TodoInput';

function App(): JSX.Element {
    return (
        <div className="ToDoContainer">
            <TodoInput/>
            <div className={`FiltersContainer`}>
                <FilterButton filter={Filters.SHOW_ALL}>Все</FilterButton>
                <FilterButton filter={Filters.SHOW_ACTIVE}>Активные</FilterButton>
                <FilterButton filter={Filters.SHOW_COMPLETED}>Сделано</FilterButton>
            </div>
            <Search/>
            <ItemsList/>
        </div>
    );
}

export default connect()(App)

