import axios from 'axios'

let data = localStorage.getItem('user1')
let f = JSON.parse(data);

const autho1 = axios.create({
baseURL:"http://localhost:4000",
headers:{
    Accept: 'application/json',
    Authorization : "bearer "+ f?.jwtToken
}

});
export default autho1;
