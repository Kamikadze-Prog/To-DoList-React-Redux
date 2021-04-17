let itemId = 6;

type ReturnType = {
    type: string;
    id?: number;
    text?: string;
    value?: string;
}
export const addItems = (item: { text: string }): ReturnType => ({
    type: 'ADD_ITEMS',
    id: itemId++,
    text: item.text
});

export const updateItem = (id: number): ReturnType => ({
    type: 'UPDATE_ITEM',
    id: id
});

export const deleteItem = (id: number): ReturnType => ({
    type: 'DELETE_ITEM',
    id: id
});

export const searchItem = (text: string): ReturnType => ({
    type: 'SEARCH_ITEM',
    text: text
});

export const setVisibilityFilter = ( filter: string): { filter: string; type: string; } => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
