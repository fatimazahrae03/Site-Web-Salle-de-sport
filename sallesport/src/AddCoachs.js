import Header from'./Header'
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCoachs()
{
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [description, setDescription] = useState("");
async function AddCoachs(){
    console.warn(name,file,description)
    const formData=new FormData();
    formData.append('file',file);
    formData.append('name',name);
    formData.append('description',description);
    let result=await fetch("http://localhost:8000/api/addcoachs",{
    method:'POST',
    body:formData
    });
    alert("Data has beem saved")
}
    const navigate = useNavigate();
    return (
        <div>
        
        <div className="col-sm-6 offset-sm-3">
            <br/>
        <input type="text" className="form-control"
        onChange={(e)=>setName(e.target.value)}
        placeholder="Name"/><br/>
        <input type="file" className="form-control"
        onChange={(e)=>setFile(e.target.files[0])}
        placeholder="file"/><br/>
        <input type="text" className="form-control"
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="description"/><br/>
        <button onClick ={AddCoachs} className="btn btn-primary">Add Coachs</button>
        </div>
        </div>
        
    );
}
export default AddCoachs