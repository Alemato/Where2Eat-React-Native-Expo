import {ActionType} from 'redux-promise-middleware';
import {createAction} from '@reduxjs/toolkit';

export const LOGIN = 'LOGIN';
export const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;
export const LOGIN_PENDING_ACTION = createAction(
    `${LOGIN}_${ActionType.Pending}`);
export const LOGIN_FULFILLED_ACTION = createAction(
    `${LOGIN}_${ActionType.Fulfilled}`);
export const LOGIN_REJECTED_ACTION = createAction(
    `${LOGIN}_${ActionType.Rejected}`);

export const REGISTRAZIONE = 'REGISTRAZIONE';
export const REGISTRAZIONE_REJECTED = `${REGISTRAZIONE}_${ActionType.Rejected}`;
export const REGISTRAZIONE_PENDING_ACTION = createAction(
    `${REGISTRAZIONE}_${ActionType.Pending}`);
export const REGISTRAZIONE_FULFILLED_ACTION = createAction(
    `${REGISTRAZIONE}_${ActionType.Fulfilled}`);
export const REGISTRAZIONE_REJECTED_ACTION = createAction(
    `${REGISTRAZIONE}_${ActionType.Rejected}`);
