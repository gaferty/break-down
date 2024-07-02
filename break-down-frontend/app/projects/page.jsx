"use client";

import { Container } from 'postcss'
import React, {useState, useEffect} from 'react'
import Card, { SquareCard } from '../ui/layout/projects/card'
import Searchbar from '../ui/layout/projects/searchbar'
import { FilterButton } from '../ui/layout/Buttons'
import {getProjects} from '../lib/data'



export default function Page() {
const [projects, setProjects] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data)
    };

    fetchData().catch(console.error);
  }, [])

  try{
    return (
      <div className="container mx-auto bg-seasalt flex-col content-center">
        <Searchbar/>
        <div className="flex justify-center">
          <FilterButton name = "Exercise"/>
          <FilterButton name = "Exercise"/>
          <FilterButton name = "Exercise"/>
        </div>
        <div className="w-full grid grid-cols-3 gap-5 mx-auto justify-self-center max-md:grid-cols-1 max-w-screen-lg">
          <div className='justify-center'>
            <SquareCard/>
          </div>
          <div>
            <SquareCard/>
          </div>
          <div>
            <SquareCard/>
          </div>
        </div>
      </div>
    )
  }catch{
    return (
      <div className="container mx-auto bg-seasalt flex-col content-center">
        <Searchbar/>
        <div>
        <FilterButton name = "Exercise"/>
        There is something
        </div>
        <div className="w-full flex-col mx-auto">
          <Card/>
          <Card/>
        </div>
      </div>
    )
  }
}
