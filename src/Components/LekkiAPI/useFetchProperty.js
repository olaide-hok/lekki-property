import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const LEKKI_API_URL = 'https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property'

const ACTIONS = {
    GET_PROPERTIES: 'get-properties',
    SET_LOADING: 'set-loading',
    ERROR: 'error',
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.GET_PROPERTIES:
            return {
                ...state,
                loading: false,
                properties: action.payload.properties
            }
        case ACTIONS.SET_LOADING:
            return {
                loading: true,
                properties: [],
            }
        case ACTIONS.ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                properties: []
            }
        default:
            return state;
    }
        
}

function useFetchProperty(params) {

    const [state, dispatch] = useReducer(reducer, {
        properties: [],
        loading: true
    })

    useEffect(() => {

        const cancelToken = axios.CancelToken.source()

        dispatch({ type: ACTIONS.SET_LOADING})
        axios.get(LEKKI_API_URL, {
            cancelToken: cancelToken.token,
            params: {
                ...params
            }
        })
        .then(res => {
            dispatch({ 
                type: ACTIONS.GET_PROPERTIES, 
                payload:{ properties: res.data.data }
            })
        })
        .catch(error => {
            if (axios.isCancel(error)) return
            dispatch({ 
                type: ACTIONS.ERROR, 
                payload:{ error: error }
            })
        })

        
        return () => {
            cancelToken.cancel()
        }

    }, [params])

  return state
}

export default useFetchProperty;