import React from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { buttonBaseClasses } from '@mui/material';


const MyComponent = () => {
  return (
    <div className='contenedorBoton'>
      <button type='button' className='boton'> <LocalGroceryStoreIcon/>5</button>
    </div>

  );
};

export default MyComponent;
