import InitialState from "./InitialState";

export interface ItemType {
    id: number,
    text: string,
    completed: boolean
}

export interface ActionType {
    id: number,
    text: string,
    type: string,
    payload: number,
}

const items = (state: ItemType[] = InitialState.todo, action: ActionType): ItemType[] => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return InitialState.todo = [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'UPDATE_ITEM':
            return InitialState.todo = state.map((item) => item.id == action.id ? {
                ...item,
                completed: !item.completed
            } : item)
        case 'DELETE_ITEM':
            return InitialState.todo = state.filter((item) => item.id !== action.id)
        case 'SEARCH_ITEM': {
             return InitialState.filtered = InitialState.todo.filter((item) => item.text.includes(action.text));
        }
        default:
            return state
    }
}
export default items;
