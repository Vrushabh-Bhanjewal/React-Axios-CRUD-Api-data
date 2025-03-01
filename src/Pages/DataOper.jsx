import React, { useEffect, useState } from 'react'
import { delPost, getPost } from '../API/PostAPI'
import style from './data.module.css'
import Forms from '../Component/Forms'

function DataOper() {
    const [data,setData] =useState([])
    const getData= async ()=>{
        try{
            const res= await getPost()
            console.log(res.data)
            setData(res.data)
        }catch(error){
            console.log(error.message)
            // console.log(error.response.data)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    
    // delete list
    const handleDelete = async(id) =>{
        try{
            const res = await delPost(id)
            console.log(res)
            if(res.status == 200){
                const arr=data.filter((curr)=>curr.id != id)
                setData(arr) 
            }
        }catch(error){
            console.log(error.message)
        }
    }
    
  return (
    <div className={style.mainDiv}>
        <Forms setData={setData} data={data}/>
        <ul className={style.uldata}>
            {
                data.map((curr)=>{
                    return (
                    <li className={style.list} key={curr.id}>
                        <p>{curr.id}</p>
                        <p>{curr.title}</p>
                        <p>{curr.body}</p>
                        <div>
                            <button>Edit</button>
                            <button onClick={()=>{handleDelete(curr.id)}}>Delete</button>
                        </div>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}

export default DataOper