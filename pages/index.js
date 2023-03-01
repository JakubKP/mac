import React, { useEffect, useRef, useState } from "react"
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Baner from "@/components/Baner"
import MainPage from "@/components/MainPage"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Wypożyczalnia samochodów</title>
        <meta name="description" content="Wypożyczalnia samochodów" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Baner />
      <MainPage />
    </>
  )
}
