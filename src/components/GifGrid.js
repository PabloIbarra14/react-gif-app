import React from 'react'
import { useAxiosGifs } from '../hooks/useAxiosGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const {data:images,loading}=useAxiosGifs(category);

    return (
        <>
        <h3 className='animate__animated animate__fadeInDown'>{category}</h3>
        {loading?'Cargando...':'Fin de carga'}
         <div className='card-grid'>
            
                {
                    images.map(img=>(
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
        </div> 
        </>
        
    )
}
