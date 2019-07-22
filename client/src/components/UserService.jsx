import axios from 'axios'

export function register(user) {
    return axios.post('http://localhost:4000/api/users',{
        name: user.name,
        password: user.password
    })
}