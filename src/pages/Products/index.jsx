import React from 'react'
import Card from '../../components/Card'
import { Grid } from '@chakra-ui/react'
import {  useQuery } from '@tanstack/react-query'

function Products() {
    const {isLoading, error, data }= useQuery({
        queryKey: ['repoData'],
        queryFn: () => 
        fetch('http://localhost:4000/products').then((res) => res.json())

    })

    if(isLoading) return 'Loading...'

    if (error) return 'An error has occured: ' + error.message 
     console.log("data", data);
    return (
    <div>
        
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
</Grid>
        </div>
  )
}

export default Products