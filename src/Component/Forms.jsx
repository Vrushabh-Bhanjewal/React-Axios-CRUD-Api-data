import React, { useEffect, useRef, useState } from 'react'
import style from '../Pages/data.module.css'
import { dataPost, updatePost } from '../API/PostAPI'

function Forms({setData,data,update,setUpdate}) {
    const btn =useRef()
    // console.log(btn)
    const [user,setUser] =useState({
        title:"",
        body:""
    })
    const handleChange= (e)=>{
        const {name,value} = e.target
        setUser( (prev => { return {...prev,[name]:value}}))
        // console.log(user)
    }

    // post data 
    const addpostData = async ()=>{
        const res=await dataPost(user)
        console.log(res)
        if (res.status == 201){
            setData([...data,res.data])
            setUser({title:'',body:''})
        }
    }
    // update data
    const updatePostData= async()=>{
        try{
            const res= await updatePost(update.id,user)
            if(res.status ==200){
                setData((prev)=>{
                    return prev.map((curr)=>{
                        return curr.id == res.data.id ? res.data : curr ;
                    })
                })
            }
            setUser({
                title:'',
                body:""
            })
            setUpdate({})
        }catch(error){
            console.log(error)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let action=btn.current.value
        // console.log(action)
        if(action =='add'){
            addpostData()
        }else if(action =='edit'){
            updatePostData()
        }
    }
    // edit data in form input 
    let isEmpty=Object.keys(update).length==0;
    useEffect(()=>{
        update && setUser({
            title:update.title || "",
            body:update.body || ""
        })
    },[update])

  return (
    <form className={style.form1} onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" required autoComplete='off' placeholder='Title' name='title' value={user.title} onChange={(e)=>{handleChange(e)}} />
        <input type="text" required autoComplete='off' placeholder='Body' name='body' value={user.body} onChange={(e)=>{handleChange(e)}} />
        <button ref={btn} value={isEmpty ? "add" : 'edit'}>{isEmpty ? 'Add' : 'Edit'}</button>
    </form>
  )
}
export default Forms