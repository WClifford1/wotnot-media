import axios from 'axios'

const setAuthToken = token => {
    if (token){
        //apply authorisation token to every request if logged in
        axios.defaults.headers.common["Authorisation"] = token
    } else {
        //Delete auth header
        delete axios.defaults.headers.common["Authorisation"]
    }
}

export default setAuthToken