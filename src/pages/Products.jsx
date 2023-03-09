import React from 'react'
import { useStateContext } from '../context/StateContext'
import Card from '../components/Card';
import Spinner from '../components/Spinner/Spinner';

const Products = () => {
    const { state: { Products } } = useStateContext();
  return (
      <div className='flex flex-wrap gap-5 my-6 justify-center items-center'>{
          Products.length>0?
              Products?.map(product => <Card key={product.id} product={product} />) :
              <Spinner/>
      } </div>
  )
}

export default Products