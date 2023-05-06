import React, { useState, useEffect } from 'react';
import './uploader.css'
import { MdCloudUpload, MdCheckCircle } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function Uploader() {
    const [file, setFile] = useState(null);
    const fileInputRef = React.createRef();

    const changeHandler = (event) => {
		setFile(event.target.files[0]);
	};

    const handleFormClick = (e) => {
        if (e.target !== fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    

    const handleSubmit = async () => {
        if (!file) return;
      
        const formData = new FormData();
        formData.append('file', file);
      
        try {
          const response = await fetch('/upload', { 
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            const result = await response.text();
            alert(result);
          } else {
            alert('Error uploading file.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error uploading file.');
        }
    };

    return (
        <main>
            <h3> Upload Image To Model </h3>
            <form action="" onClick={handleFormClick}>
                <input type="file" accept='image/*' onChange={changeHandler} ref={fileInputRef} style={{ display: 'none' }}/>
                {
                    file ?
                    <div className="file-selected">
                        <div className="file-icon">
                            <AiFillFileImage />
                        </div>
                        <div className="file-name">
                            {file.name}
                        </div>
                        <div className="file-size">
                            {file.size} bytes
                        </div>
                        <div className="file-status">
                            <MdCheckCircle />
                        </div>
                    </div>
                    :
                    <div className="file-not-selected">
                        <div className="file-icon">
                            <MdCloudUpload />
                        </div>
                        <div className="file-name">
                            No file selected
                        </div>
                    </div>
                }
            </form>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </main>
    )   
}

export default Uploader