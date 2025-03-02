import axios from 'axios'

const json_API='https://jsonplaceholder.typicode.com';

const japi= axios.create({
    baseURL:json_API
})
// get data
export const getPost=()=>{
    return japi.get('/posts')
}
// delete data
export const delPost=(id)=>{
    return japi.delete(`/posts/${id}`)
}
// post data
export const dataPost=(data)=>{
    return japi.post('/posts', data)
}
// update data
export const updatePost=(id,data)=>{
    return japi.put(`/posts/${id}`,data)
}