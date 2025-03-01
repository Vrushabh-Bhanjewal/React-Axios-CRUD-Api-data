import axios from 'axios'

const api=axios.create({
    baseURL:'https://www.omdbapi.com/'
})

export const moviesData=()=>{
    return api.get('?i=tt3896198&apikey=8026880d&s=titanic')
}
