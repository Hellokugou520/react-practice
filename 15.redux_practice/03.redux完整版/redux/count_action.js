/**
 * 该文件专门用于为Count组件生成Action对象
 */
import { ADD, REDUCE } from './constant'

export const addAction = (data) => ({ type: ADD, data })
export const reduceAction = (data) => ({ type: REDUCE, data })