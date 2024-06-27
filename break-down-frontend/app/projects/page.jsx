import { Container } from 'postcss'
import React from 'react'
import Card from '../ui/layout/projects/card'
import Searchbar from '../ui/layout/projects/searchbar'

export default function Page() {


  try{

  }catch{
    return (
      <div className="container mx-auto bg-seasalt flex-col content-center">
        <Searchbar/>
        <div className="w-full flex-col mx-auto">
          <Card/>
          <Card/>
        </div>
      </div>
    )
  }
}
