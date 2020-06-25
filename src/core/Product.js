import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts, read } from './apiCore';
import Card from './Card';

const Product = (props) => {
    const [error, setError] = useState(false)
    const [product, setProduct] = useState({})

    const loadProduct = (productId) =>{
        read(productId).then(data =>{
            if(data.error){
                setError(data.error)
            }else{
                setProduct(data)
            }
        })
    }

    useEffect(() =>{
        const productId = props.match.params.productId
        loadProduct(productId)
    }, [])
    return (
        <Layout title={product && product.name} description={product && product.description && product.description.substring(0, 100)} className='container-fluid'>
            

            <div className='row'>
                {
                    product && 
                    product.description && 
                    <Card product={product} />
                }
            </div>

            
        </Layout>
    )
}

export default Product;