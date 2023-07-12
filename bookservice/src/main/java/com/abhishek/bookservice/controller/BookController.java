package com.abhishek.bookservice.controller;

import com.abhishek.bookservice.model.Book;
import com.abhishek.bookservice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping(value = "/books")
    public List<Book> getAllBooks() {
        return bookRepository.getAllBooks();
    }

    @GetMapping(value = "/books/{bookId}")
    public Book getBookByBookId(@PathVariable("bookId") String bookId) {
        return bookRepository.getBookByBookId(bookId);
    }

    @PostMapping(value = "/books")
    public void saveBook(@RequestBody Book book) {
        bookRepository.saveBook(book);
    }

    @PutMapping(value = "/books")
    public void updateBook(@RequestBody Book book) {
        bookRepository.updateBook(book);
    }

    @DeleteMapping(value = "/books/{bookId}")
    public void deleteBook(@PathVariable("bookId") String bookId) {
        bookRepository.deleteBookByBookId(bookId);
    }

}
