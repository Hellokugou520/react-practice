/**
 * 将所有reducer统一在index中合并
 */
import { combineReducers } from 'redux'
import countReducer from './count'
import personReducer from './person'

export default combineReducers({ countReducer, personReducer })