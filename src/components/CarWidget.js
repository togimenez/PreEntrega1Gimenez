import React, { useEffect, useState } from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import useGetDocuments from '../hooks/useGetDocuments';


const MyComponent = () => {
  const {zapatillas} = useGetDocuments("ordenes")
  const [ordenes, setOrdenes] = useState(0)
  useEffect(() => {
    setOrdenes(zapatillas.length)
  }, [zapatillas])
  
  return (
    <div className='contenedorBoton'>
      <button type='button' className='boton'> <LocalGroceryStoreIcon/>{ordenes}</button>
    </div>

  );
};

export default MyComponent;
