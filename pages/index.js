import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Header/>
      <Layout>
        <div className = "font-bold">
          hello world
        </div>
      </Layout>
    </>
      

  )
}
