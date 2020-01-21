import * as types from './types';
import { emptyActionCreator } from '../../utils';

export const onLogin = () => emptyActionCreator(types.AUTH_LOGIN_SUCCESS);

export const onLogOut = () => emptyActionCreator(types.AUTH_LOGOUT);
