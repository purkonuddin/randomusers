import axios from 'axios';
require('dotenv').config();
const react_app_url = "https://randomuser.me/api/?results=28"
 
export const fetchUsers = () => {
    return {
      type: 'GET_USERS',
      payload: axios({
        method: 'GET',
        url: `${react_app_url}` 
      })
    }
}