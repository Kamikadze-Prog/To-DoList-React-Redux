import {ItemType} from "./items";

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function getVisibleTodos(todos: any, filter: string) {
    switch (filter) {
        case Filters.SHOW_ALL:
            return todos;
        case Filters.SHOW_COMPLETED:
            console.log(todos)
            return todos.filter((task: ItemType) => task.completed);
        case Filters.SHOW_ACTIVE:
            return todos.filter((task: ItemType) => !task.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}

type ActionType = {
    filter: string;
    type: string
}

function visibilityFilter(state = Filters.SHOW_ALL, action: ActionType): string {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;

