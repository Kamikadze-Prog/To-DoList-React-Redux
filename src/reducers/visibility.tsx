import {ItemType} from "./items";

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

interface VisibleTodos {
    todos: ItemType[];
    filter: string;
}

export function getVisibleTodos({todos, filter}: VisibleTodos): ItemType[]{
    switch (filter) {
        case Filters.SHOW_ALL:
            return todos;
        case Filters.SHOW_COMPLETED:
            return todos.filter((task) => task.completed);
        case Filters.SHOW_ACTIVE:
            return todos.filter((task) => !task.completed);
        default:
            return todos;
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

