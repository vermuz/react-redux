import { combineReducers } from 'redux';
import changeNumber from './number';
import toggleAlert from './alert';

export default combineReducers({
    changeNumber,
    toggleAlert,
});
