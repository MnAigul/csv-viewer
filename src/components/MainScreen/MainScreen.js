import React, { useState, useEffect } from 'react';
import './MainScreen.css';

const MainScreen = ({ onFileSelect }) => {
    const [showRectangle, setShowRectangle] = useState(false);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file && file.name.endsWith('.csv')) {
        onFileSelect(file);
      } else {
        setShowRectangle(true);
        setTimeout(() => {
            setShowRectangle(false);
        }, 2000);
       
      }
    };
  
    return (
        <div>
            <div className='header'></div>
            <div>
                {showRectangle && (<div className="alert-rectangle"><p className="alert-text">Неправильный формат файла, разрешены только файлы .CSV</p></div>)}
            </div>
            <div className="box">
                <p>Выберите файл в формате CSV</p>
                <div className="filecontainer">
                    <input type="file" id="fileInput" className="hidden-input" onChange={handleFileChange} />
                    <label htmlFor="fileInput" className="custom-file-button">Выберите файл</label>
                </div>
            </div>
        </div>
      
    );
  };

  export default MainScreen;