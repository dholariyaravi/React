import axios from 'axios'

let data = localStorage.getItem('user1')
let f = JSON.parse(data)
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = "bearer "+ f?.jwtToken;



