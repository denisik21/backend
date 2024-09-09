import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    async getBooks() {
        return this.booksService.getBooks();
    }

    @Post()
    async createBook(@Body() bookData: { id: number, title: string, author: string, publishedYear: number, genre: string, isbn: string }) {
      return this.booksService.createBook(bookData);
    }

}
