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

export const MODIFICA_ACCOUNT = 'MODIFICA_ACCOUNT';
export const MODIFICA_ACCOUNT_REJECTED = `${MODIFICA_ACCOUNT}_${ActionType.Rejected}`;
export const MODIFICA_ACCOUNT_PENDING_ACTION = createAction(
    `${MODIFICA_ACCOUNT}_${ActionType.Pending}`);
export const MODIFICA_ACCOUNT_FULFILLED_ACTION = createAction(
    `${MODIFICA_ACCOUNT}_${ActionType.Fulfilled}`);
export const MODIFICA_ACCOUNT_REJECTED_ACTION = createAction(
    `${MODIFICA_ACCOUNT}_${ActionType.Rejected}`);

export const GET_BOOKINGS = 'BOOKINGS';
export const GET_BOOKINGS_REJECTED = `${GET_BOOKINGS}_${ActionType.Rejected}`;
export const GET_BOOKINGS_PENDING_ACTION = createAction(
    `${GET_BOOKINGS}_${ActionType.Pending}`);
export const GET_BOOKINGS_FULFILLED_ACTION = createAction(
    `${GET_BOOKINGS}_${ActionType.Fulfilled}`);
export const GET_BOOKINGS_REJECTED_ACTION = createAction(
    `${GET_BOOKINGS}_${ActionType.Rejected}`);

export const PATCH_BOOKINGS = 'PATCH_BOOKINGS';
export const PATCH_BOOKINGS_REJECTED = `${PATCH_BOOKINGS}_${ActionType.Rejected}`;
export const PATCH_BOOKINGS_PENDING_ACTION = createAction(
    `${PATCH_BOOKINGS}_${ActionType.Pending}`);
export const PATCH_BOOKINGS_FULFILLED_ACTION = createAction(
    `${PATCH_BOOKINGS}_${ActionType.Fulfilled}`);
export const PATCH_BOOKINGS_REJECTED_ACTION = createAction(
    `${PATCH_BOOKINGS}_${ActionType.Rejected}`);

export const CREATE_BOOKINGS = 'PATCH_BOOKINGS';
export const CREATE_BOOKINGS_REJECTED = `${CREATE_BOOKINGS}_${ActionType.Rejected}`;
export const CREATE_BOOKINGS_PENDING_ACTION = createAction(
    `${CREATE_BOOKINGS}_${ActionType.Pending}`);
export const CREATE_BOOKINGS_FULFILLED_ACTION = createAction(
    `${CREATE_BOOKINGS}_${ActionType.Fulfilled}`);
export const CREATE_BOOKINGS_REJECTED_ACTION = createAction(
    `${CREATE_BOOKINGS}_${ActionType.Rejected}`);

export const GET_HOME = 'GET_HOME';
export const GET_HOME_REJECTED = `${GET_HOME}_${ActionType.Rejected}`;
export const GET_HOME_PENDING_ACTION = createAction(
    `${GET_HOME}_${ActionType.Pending}`);
export const GET_HOME_FULFILLED_ACTION = createAction(
    `${GET_HOME}_${ActionType.Fulfilled}`);
export const GET_HOME_REJECTED_ACTION = createAction(
    `${GET_HOME}_${ActionType.Rejected}`);

export const GET_RISTORANTE = 'GET_RISTORANTE';
export const GET_RISTORANTE_REJECTED = `${GET_HOME}_${ActionType.Rejected}`;
export const GET_RISTORANTE_PENDING_ACTION = createAction(
    `${GET_RISTORANTE}_${ActionType.Pending}`);
export const GET_RISTORANTE_FULFILLED_ACTION = createAction(
    `${GET_RISTORANTE}_${ActionType.Fulfilled}`);
export const GET_RISTORANTE_REJECTED_ACTION = createAction(
    `${GET_RISTORANTE}_${ActionType.Rejected}`);

export const RICERCA = 'RICERCA';
export const RICERCA_REJECTED = `${RICERCA}_${ActionType.Rejected}`;
export const RICERCA_PENDING_ACTION = createAction(
    `${RICERCA}_${ActionType.Pending}`);
export const RICERCA_FULFILLED_ACTION = createAction(
    `${RICERCA}_${ActionType.Fulfilled}`);
export const RICERCA_REJECTED_ACTION = createAction(
    `${RICERCA}_${ActionType.Rejected}`);
