import React, { useState } from 'react'
import style from '../Pages/data.module.css'
import { dataPost } from '../API/PostAPI'

function Forms({setData,data}) {
    const [user,setUser] =useState({
        title:"",
        body:""
    })
    const handleChange= (e)=>{
        const {name,value} = e.target
        setUser( (prev => { return {...prev,[name]:value}}))
        // console.log(user)
    }
    const addpostData = async ()=>{
        const res=await dataPost(user)
        console.log(res)
        if (res.status == 201){
            setData([...data,res.data])
            setUser({title:'',body:''})
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addpostData()
    }
  return (
    <form className={style.form1} onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='Title' name='title' value={user.title} onChange={(e)=>{handleChange(e)}} />
        <input type="text" placeholder='Body' name='body' value={user.body} onChange={(e)=>{handleChange(e)}} />
        <button>Add</button>
    </form>
  )
}
export default Forms