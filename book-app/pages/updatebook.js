import { getRequest, putRequest } from "@/service/bookservice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export default function UpdateBook(props) {

    const [alert, setAlert] = useState(false);
    const router = useRouter();
    const [bookId, setBookId] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [bookImageUrl, setBookImageUrl] = useState("");
    const [bookPrice, setBookPrice] = useState("");

    useEffect(()=>{
        getBookById();
    }, [])

    async function getBookById() {
        const book = await getRequest("/books/"+router.query.bookId);
        setBookId(book.bookId);
        setBookTitle(book.bookTitle);
        setBookImageUrl(book.bookImageUrl);
        setBookPrice(book.bookPrice);
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        const book = {
            bookId: bookId,
            bookTitle: bookTitle,
            bookImageUrl: bookImageUrl,
            bookPrice: bookPrice
        }
        console.log("Book: " + JSON.stringify(book));
        await putRequest("/books", book);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2500)
        await delay(2000);
        router.push("/");
    }

    return(
        <>
            <h1 className="mt-5 text-center text-success">Update Book</h1>
            <div className="container mt-5">
                {
                    alert ? <div className="alert alert-success" role="alert">
                        Book updated successfully!
                    </div> : <></>
                }
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <div className="mb-3">
                        <label htmlFor="bookId" className="form-label">Book ID</label>
                        <input type="text" className="form-control" id="bookId" value={bookId} onChange={(e) => setBookId(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bookTitle" className="form-label">Book Title</label>
                        <input type="text" className="form-control" id="bookTitle" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bookImageUrl" className="form-label">Book Image Url</label>
                        <input type="text" className="form-control" id="bookImageUrl" value={bookImageUrl} onChange={(e) => setBookImageUrl(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bookPrice" className="form-label">Book Price</label>
                        <input type="number" className="form-control" id="bookPrice" value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}