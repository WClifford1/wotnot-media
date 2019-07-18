import api from '../utils/api'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import {
    SET_CURRENT_USER,
    USER_LOADING,
    GET_ERRORS
} from "../actions/types"

//register user
export const registerUser = (userData, history) => dispatch => {
    api
    .post("/users/register", userData)
    .then(res => history.push("/login"))  //re-direct to login on successful register
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        )
}

//login -get user token
export const loginUser = userData => dispatch => {
    api
        .post("/users/login", userData)
        .then(res => {
            //save to localStorage

            //set token to localstorage
            const { token } = res.data
            localStorage.setItem("jwt", token)
            //set token to auth header
            setAuthToken(token)
            //decode token to get user data
            const decoded = jwt_decode(token)
            //set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
    )
}

//set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//user loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

//logout user
export const logoutUser = () => dispatch => {
    //remove token from local storage
    
    localStorage.removeItem("jwt")
    //remove auth header for future requests
    setAuthToken(false)
    //set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
}

const isEmpty = require('is-empty')

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type){ 
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
            case USER_LOADING:
                return {
                    ...state,
                    loading: true
                }
                default:
                    return state
    }
}