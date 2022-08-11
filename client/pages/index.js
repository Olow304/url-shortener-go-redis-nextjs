import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import UrlShortenerComponent from '../components/UrlShortenerComponent'
import { useEffect, useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [emptyFieldErrorMessage, setEmptyFieldErrorMessage] = useState(false)

  useEffect(() => {
    // list any call made to the localhost:3000/ url
    fetch('http://localhost:3000/*', {  
      method: 'GET',
      })
      .then(res => {
        console.log("res", res);
      })
      .then(data => {
        console.log(data)
        //setUrl(data.url)
        //setShortUrl(data.shortUrl)
      })
  } , [])

  const onSubmitFunc = (e) => {
    e.preventDefault()
    // check if input is empty
    if (e.target.url.value === '') {
      setEmptyFieldErrorMessage(true)
      return
    } else {
      fetch('http://localhost:8080/url-shortener', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: e.target.url.value,
        })
      }).then(res => {
        return res.json()
      }).then(data => {
        setShortUrl(data.short_url)
        console.log("data", data)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        setUrl('')
      })
    }
  }

  return (
    <div className="flex gap-4 bg-[#f1efef]">
      <div className="flex gap-4">
        <Sidebar />
      </div>
      <div className='w-full'>
        <Navbar/>
        <UrlShortenerComponent 
          onSubmitFunc={onSubmitFunc} 
          shortUrl={shortUrl} 
          emptyFieldErrorMessage={emptyFieldErrorMessage}
          setEmptyFieldErrorMessage={setEmptyFieldErrorMessage}/>
      </div>
    </div>
  )
}
