import { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import CreateProject from '@/components/CreateProject'
import AddButton from '@/components/AddButton'
import { isWallectConnected, loadProjects } from '@/services/blockchain'
import { ToastContainer } from 'react-toastify'
import { useGlobalState } from '@/store'


export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [projects] = useGlobalState('projects')

  useEffect(() => {
    const fetch= async()=>{
      await isWallectConnected()
      console.log('Blockchain loaded')
      setLoaded(true)
      await loadProjects()
    }
    fetch()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>CrowdDicer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header/>
        {loaded ?
          (<>
          <Hero />
          <Projects projects={projects}/>
          <CreateProject />
          <AddButton / >
          </> ) : null
        }
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>


  )
}
