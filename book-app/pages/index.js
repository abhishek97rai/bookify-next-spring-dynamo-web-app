import Card from '@/components/card';
import { getRequest } from '@/service/bookservice';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const [refresh, setRefresh] = useState(false);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, [refresh])

  async function getAllBooks() {
    const allbooks = await getRequest("/books");
    setBookList(allbooks)
  }

  function isRefreshRequired() {
    setRefresh(!refresh);
  }

  return (
    <>
      <div className='container'>
        <div className='row gy-5 mt-5'>
          {
            bookList.map((book, key) => {
              return (
                <div className='col-md-4' key={key}>
                  <Card bookId={book.bookId}
                  bookTitle={book.bookTitle}
                  bookImageUrl={book.bookImageUrl}
                  bookPrice={book.bookPrice}
                  isRefreshRequired={isRefreshRequired}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      Abhishek Rai
      Total Books : {bookList.length}
    </>
  )
}
