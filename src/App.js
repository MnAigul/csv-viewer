import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './App.css';
import iconv from 'iconv-lite';
import MainScreen from './components/MainScreen/MainScreen';
import DataScreen from './components/DataScreen/DataScreen';


function App() {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('csvData');
    if (storedData) {
      setFileData(JSON.parse(storedData));
    }
  }, []);

  const handleFileSelect = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const textData = event.target.result;

        Papa.parse(textData, {
          header: false,
          skipEmptyLines: true,
          complete: (result) => {
            const parsedData = result.data.slice(1).map((columns) => ({
              name: columns[0].trim(),
              phone: columns[1].trim(),
              email: columns[2].trim(),
              bday: columns[3].trim(),
              address: columns[4].trim(),
            }));
  
            setFileData(parsedData);
            localStorage.setItem('csvData', JSON.stringify(parsedData));
          },
        });
      } catch (error) {
        console.log(error);
        alert('Ошибка при чтении файла.');
      }
    };

    reader.readAsText(file, 'cp1251');
  };

  const handleUploadNewFile = () => {
    setFileData(null);
    localStorage.removeItem('csvData');
  };

  return (
    <div className="App">
      {fileData ? (
        <DataScreen data={fileData} onUploadNewFile={handleUploadNewFile} />
      ) : (
        <MainScreen onFileSelect={handleFileSelect} />
      )}
    </div>
  );
}

export default App;