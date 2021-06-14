import React from 'react';
import '../pages/home.css';
import { useState, useEffect } from 'react';
import MemeCards from '../components/meme_cards';
const Home=()=> {

    const[Meme,setdata]=useState([]);
    const[filter,filterdata]=useState([]);
    const getdata=async()=>{
        const res=await fetch('https://api.imgflip.com/get_memes');
        const data= await res.json();
        console.log(data.data.memes);
        setdata(data.data.memes);
      
        
    }
   useEffect(()=>{
       getdata();
   },[])

  /*useEffect(() => {
    filterdata(
      Meme.filter((curr) =>
        
        console.log(curr.width.find(500))
      )
    );
      }, []);
*/


    return (
        <div className='home'>
            <img  className='home-back_image' src='https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/03/Rick-Cropped.jpg'  alt='logo'/>
            
            {Meme.filter(
               curr=>curr.width<='650'
            ).map((curr,index)=>{
                
                return(
                    <MemeCards image={curr.url} id={curr.id} box={curr.box_count} key={index}/>
                )

            })

            }
            
            
        </div>
    )
}

export default Home
