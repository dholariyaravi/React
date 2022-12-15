import axios from 'axios'

const autho1 = axios.create({
baseURL: "http://localhost:4000"

})

autho1.interceptors.request.use((request) =>{
   
      let data = localStorage.getItem('user1')
      let f = JSON.parse(data) 

        axios.defaults.headers['Accept'] = 'application/json';
        axios.defaults.headers['Authorization'] = "bearer "+ f?.jwtToken;

        return request;

    },(error) => {
        console.log(error)
        
        return Promise.reject(error);
    })

    autho1.interceptors.response.use( (response) => {
        
        console.log("got response ")
        return response ;

    },(error) => {

        if (error.response.status === 404) {
            console.log('NOT FOUND')
        }
        if (error.response.status === 401) {
            console.log('NOT FOUND')
        }
        console.log(error);

        return Promise.reject(error);

    })

    export default autho1;
   