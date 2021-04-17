import {combineReducers} from 'redux';
import items from './items';
import visibilityFilter from "./visibility";

export default combineReducers({
    items,
    visibilityFilter
});
