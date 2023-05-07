import React, { useState, useEffect } from 'react';
import './downloader.css'
import { MdCloudUpload, MdCheckCircle } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function Uploader() {
    const label = 'Enter Passkey';
    const [text, setText] = useState('');

    const changeHandler = (event) => {
        setText(event.target.value);
	};

    const handleSubmit = async () => {
        try {
          const response = await fetch('/request', { 
            method: 'POST',
            body: text,
          });
      
          if (response.ok) {
            const result = await response.text();
            alert(result);
          } else {
            alert('Error sending request.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error sending request.');
        }
    };

    return (
        <div className='form-box'>
            <h3> Generate Image From Model </h3>
            <div className="field">
                <input
                    type="text"
                    placeholder={label}
                    onChange={changeHandler}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )   
}

export default Uploader