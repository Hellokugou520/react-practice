/**
 * 该文件专门用于为Count组件生成Action对象
 */
import { ADD, REDUCE } from '../constant'

// 同步action，就是指action的值为Object类型的一般对象
export const add = (data) => ({ type: ADD, data })
export const reduce = (data) => ({ type: REDUCE, data })

// 异步action，就是指action的值为函数，异步action中一般都会调用同步action
export const addAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add(data))
        }, time)
    }
}