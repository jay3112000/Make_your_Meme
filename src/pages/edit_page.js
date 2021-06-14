import React from 'react'
import '../pages/edit_page.css'
import { useState, useEffect } from 'react';
const EditPage=(props)=> {

    const [captions, setCaptions] = useState([]);
    const [link,setLink]=useState('');



    const generateMeme = () => {
      const currentMeme = props.location.state.props.id;
      const formData = new FormData();
  
      formData.append('username', 'JaySharma69');
      formData.append('password', 'bhulgaya2');
      formData.append('template_id', currentMeme);
      captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));
  
      fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        body: formData
      }).then(res => {
        res.json().then(res => {
          console.log(res);
          setLink(res.data.url);
        });
      });
    };




    const updateCaption = (e, index) => {
        const text = e.target.value || '';
        setCaptions(
          captions.map((c, i) => {
            if(index === i) {
              return text;
            } else {
              return c;
            }
          })
        );
      };

    useEffect(() => {
        
          setCaptions(Array(props.location.state.props.box).fill(''));
        
      }, []);
    useEffect(()=>{
        console.log(captions);
    },
    [captions]);
    console.log(props.location.state.props)
    return (
        <div className='main'> 
            <div className='page-background'>
            <img  src={'https://wallpaperaccess.com/full/85327.png'}/>
            </div>
            <div className='img_input_container'>
            <div className='meme_img'>
            <img  src={props.location.state.props.image}/>
            </div>
            <div className='inputs'>
            {
                captions.map((c, index) => (
                <input 
                onChange={(e) => updateCaption(e, index)}
                key={index} />
                ))
            }
            <button onClick={generateMeme}  class="name noselect">Generate</button>
           
            <h3 className='neon'>{link}</h3>
            </div>
               
            </div>
           
            
        </div>
    )
}

export default EditPage
