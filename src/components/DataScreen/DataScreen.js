import React from 'react';
import "./DataScreen.css"
const DataScreen = ({ data, onUploadNewFile }) => {
  return (
    <div>
      <button onClick={onUploadNewFile}><p className='button-text'>Загрузить новый файл</p></button>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Номер телефона</th>
            <th>email</th>
            <th>Дата рождения</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.bday}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataScreen;