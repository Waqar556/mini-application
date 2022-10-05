import React, { useState } from 'react'

const FormInput = (props) => {
    const {data}=props;
    const tableData=[];
    const [input,setinput]=useState();




    const addData=(e)=>{
          return(
            setinput(e.target.value)
          )
    }
    
      return (
        <form>

            <h1>
                {input}
            </h1>
          {data.map((users)=>{
             return(
                <>
                <label>{users.name}</label>
                <input type={users.type}/>
                </>
             )
          })
        }
        <button type='sunmit' onClick={addData} >Add</button>
        </form>
      )
}

export default FormInput