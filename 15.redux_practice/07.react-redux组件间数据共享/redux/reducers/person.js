import { ADD_PERSON } from "../constant"

const initState = [{ id: '001', name: '甲', age: 18 }]
export default function addPerson (preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}