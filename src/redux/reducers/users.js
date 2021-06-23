const initialState = {  
    fetchUsers:{
        isFulfilled: false,
        isPending: false,
        isRejected: false,
        rejected: {},
        data:{},
    }
}

function Users(state = initialState, action) {
    switch (action.type) {
        case 'GET_USERS_PENDING':
            return {
                ...state,
                fetchUsers: {
                    isFulfilled: false,
                    isPending: true,
                    isRejected: false,
                    rejected: {},
                    data:{},
                }
            }
        case 'GET_USERS_REJECTED':
            return {
                ...state,
                fetchUsers: {
                    isFulfilled: false,
                    isPending: false,
                    isRejected: true,
                    rejected: action.payload.response === undefined
                    ? action.payload.isAxiosError 
                        ? { status: action.payload.request.status, message: "Network to Api's Service is Error" } 
                        : { status: action.payload.request.status, message: action.payload.message }
                    :{
                        status: action.payload.response.status,
                        message: action.payload.response.data.message
                    },
                    data:{},
                }
            }
        case 'GET_USERS_FULFILLED':
            return {
                ...state,
                fetchUsers: {
                    isFulfilled: true,
                    isPending: false,
                    isRejected: false,
                    rejected: {},
                    data: action.payload.data.results,
                }
            } 
        default:
        return state
    }
}

export default Users;