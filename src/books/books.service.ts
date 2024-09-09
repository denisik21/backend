import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
    constructor(private prisma: PrismaService) {}

    async getBooks() {
        return this.prisma.books.findMany();
    }

    async createBook(data: { title: string, author: string, publishedYear: number, genre: string, isbn: string }) {
        return this.prisma.books.create({
          data,
        });
    }

}
