"use client";

import { Container } from 'postcss'
import React, {useState, useEffect} from 'react'
import Card, { SquareCard } from '../ui/projects/card'
import Searchbar from '../ui/projects/searchbar'
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
  console.log(projects)
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
          {projects.map(project =>
          <div key={project.id}>
            <SquareCard project = {project}/>
          </div>
          )}
        </div>
      </div>
    )
  }catch{
    return (
      <div className="container mx-auto bg-seasalt flex-col content-center">
        <Searchbar/>
        <div className='flex justify-center'>
        <FilterButton name = "Exercise"/>

        </div>
        <div className="w-full grid grid-cols-3 gap-5 mx-auto justify-self-center max-md:grid-cols-1 max-w-screen-lgo">
          <SquareCard project = {{title: "default", description: "This is a post", length: "Maximum", difficulty:"a lot"}}/>
          <SquareCard project = {{title: "default", description: "This is a post", length: "Maximum", difficulty:"a lot"}}/>
          <SquareCard project = {{title: "default", description: "This is a post", length: "Maximum", difficulty:"a lot"}}/>
        </div>
      </div>
    )
  }
}
