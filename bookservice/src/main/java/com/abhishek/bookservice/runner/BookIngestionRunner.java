package com.abhishek.bookservice.runner;

import com.abhishek.bookservice.model.Book;
import com.abhishek.bookservice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class BookIngestionRunner implements ApplicationRunner {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        bookRepository.saveBook(new Book("1", "Java", "https://img.thriftbooks.com/api/images/m/504c69f9469a2aae2feb298b8b695a38b1b75e65.jpg", 30d));
        bookRepository.saveBook(new Book("2", "Python", "https://m.media-amazon.com/images/I/519YsN69yEL._AC_UF1000,1000_QL80_.jpg", 25d));
        bookRepository.saveBook(new Book("3", "JavaScript", "https://m.media-amazon.com/images/I/81CWQcOS43L._AC_UF1000,1000_QL80_.jpg", 42.5d));
        bookRepository.saveBook(new Book("4", "Ruby", "https://m.media-amazon.com/images/I/61nYRmgrrOL._AC_UF1000,1000_QL80_.jpg", 20d));
    }
}
