class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    public getInfo(): string {
        return `${this.title} - ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }
    public viewBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (const book of this.books) {
            console.log(book.getInfo());
        }
    }
}
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
const book3 = new Book("Số Đỏ", "Vũ Trọng Phụng");
const book4 = new Book("Lão Hạc", "Nam Cao");
const book5 = new Book("Chiếc Thuyền Ngoài Xa", "Nguyễn Minh Châu");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();