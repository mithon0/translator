import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
    const [option,setOption]=useState([]);
    const [to,setTo]=useState("en");
    const [from,setFrom]=useState("en");
    const [input,setInput]=useState("");
    const [output,setOutput]=useState("");

    const translete =()=>{
        
    }

        useEffect(()=>{
            axios.get("https://libretranslate.com/languages",{
                headers:{'accept': 'application/json'}
            }).then(res=>{
                setOption(res.data);
            })
        },[])

        console.log(option)
    // curl -X 'GET' \'https://libretranslate.com/languages' \-H 'accept: application/json'
    return (
        <div className='pb-20 pt-10'>
            <h1 className='text-center text-5xl font-bold text-rose-600 uppercase'>Chip copy Of Google Translator</h1>
            <div className='grid grid-cols-2  mt-5 gap-10 '>
               <div className=' ms-14'>
               <h2 className='text-2xl font-semibold'>From ({from})  </h2>
                <select onChange={(e)=>setFrom(e.target.value)} className='text-3xl w-30 border rounded-lg  px-2' name="" id="">
                    {
                        option.map(opt=><option value={opt.code}>{opt.name}</option>)
                    }
                    
                </select>
               </div>
               <div className='ms-10'>
               <h3 className='text-2xl font-semibold ps-4'>To ({to})</h3>
                <select onChange={(e)=>setTo(e.target.value)} className='text-3xl border rounded-lg w-30  px-2' name="" id="">
                {
                        option.map(opt=><option value={opt.code}>{opt.name}</option>)
                    }
                </select>
               </div>
            </div>
            <div className='grid grid-cols-2  '>
                <div className='mx-auto'>
                <textarea onInput={(e)=>setInput(e.target.value)} className='border p-10 rounded-2xl' name="from" id="" cols="60" rows="10" placeholder='Type Here'></textarea>
                </div>
                <div className='mx-auto'>
                <textarea value={output} className='border p-10 rounded-2xl ' name="to" id="" cols="60" rows="10" placeholder='Results'></textarea><br />
                <button className='px-4 py-2 bg-rose-600 rounded-lg  '>Translate</button>
                </div>
            </div>
        </div>
    ); 
};

export default Home;