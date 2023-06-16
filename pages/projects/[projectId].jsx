import Header from '@/components/Header'
import ProjectDetails from '@/components/ProjectDetails'
import ProjectBackers from '@/components/ProjectBackers'
import React, { useEffect, useState } from 'react'
import UpdateProject from '@/components/UpdateProject'
import BackProject from '@/components/BackProject'
import DeleteProject from '@/components/DeleteProject'
import Head from 'next/head'
import { useGlobalState } from '@/store'
import { getBackers, loadProject } from '@/services/blockchain'
import { useRouter } from 'next/router'


const Project = () => {
  const router = useRouter()
  const {projectId}  = router.query
  const id = projectId
  const [loaded, setLoaded] = useState(false)
  const [project] = useGlobalState('project')
  const [backers] = useGlobalState('backers')

  useEffect(() => {
    const data = async()=>{
      await loadProject(id)
      await getBackers(id)
      setLoaded(true)
    }
    data()
  }, [])

  return (
    <div>

    <Head>
      <title>CrowdDicer - {project?.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <Header />
        <ProjectDetails project={project} />
        <UpdateProject project={project} />
        <DeleteProject project={project} />
        <BackProject project={project} />
        <ProjectBackers backers={backers} />
    </div>
  )
}

export default Project
