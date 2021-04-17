import {ItemType} from "./items";

type InitialStateType = {
    todo: ItemType[];
    filtered: [] | ItemType[];
}
const InitialState: InitialStateType = {
    todo: [{
        id: 0,
        text: "Использовать TypeScript, eslint, функции-компоненты",
        completed: true
    },
        {
            id: 1,
            text: "Добавление/удаление задачи",
            completed: true
        },
        {
            id: 2,
            text: "Возможность отметить задачу как готовую",
            completed: false
        },
        {
            id: 3,
            text: "Хранить состояния приложения в сторе (Redux)",
            completed: true
        },
        {
            id: 4,
            text: "Сортировка задач по флагам",
            completed:true
        },
        {
            id: 5,
            text: "Реализование поиска по названию задачи",
            completed:true
        },
    ],
    filtered: []
}


export default InitialState;
