import React from 'react';
import './App.css';
import {connect} from "react-redux";
import ItemsList from "../components/ItemList/ItemList";
import Link from "../components/Link/Link";
import {Filters} from "../reducers/visibility";
import Search from "../components/Search/Search";
import TodoInput from '../components/TodoInput/TodoInput';

function App(): JSX.Element {
    return (
        <div className="ToDoContainer">
            <TodoInput/>
            <div className={`FiltersContainer`}>
                <Link filter={Filters.SHOW_ALL}>Все</Link>
                <Link filter={Filters.SHOW_ACTIVE}>Активные</Link>
                <Link filter={Filters.SHOW_COMPLETED}>Сделано</Link>
            </div>
            <Search/>
            <ItemsList/>
        </div>
    );
}

export default connect()(App)

