import React, { useReducer } from 'react'

function useFetchProperty(params, page) {

    function reducer(state, action) {
        
    }

    const [state, dispatch] = useReducer(reducer, {
        properties: [],
        loading: true
    })

  return (
    {
        properties: [],
        loading: false,
        error: true
    }
  )
}

export default useFetchProperty