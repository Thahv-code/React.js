class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getInfo(): string {
        return `${this.id} - ${this.title} - ${this.author}`;
    }

    public updateInfo(newTitle: string, newAuthor: string): void {
        this.title = newTitle;
        this.author = newAuthor;
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

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`✅ Đã cập nhật sách có ID ${id}`);
        } else {
            console.log(`❌ Không tìm thấy sách có ID ${id}`);
        }
    }
    public searchBookByTitle(keyword: string): void {
        const foundBooks = this.books.filter(b =>
            b.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`📚 Kết quả tìm kiếm với từ khóa "${keyword}":`);
            for (const book of foundBooks) {
                console.log(book.getInfo());
            }
        } else {
            console.log(`❌ Không tìm thấy sách với từ khóa "${keyword}"`);
        }
    }
}
const book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book(2, "Tuổi Thơ Dữ Dội", "Phùng Quán");
const book3 = new Book(3, "Số Đỏ", "Vũ Trọng Phụng");
const book4 = new Book(4, "Lão Hạc", "Nam Cao");
const book5 = new Book(5, "Chiếc Thuyền Ngoài Xa", "Nguyễn Minh Châu");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
console.log("\n🔍 Tìm kiếm:");
library.searchBookByTitle("thuyền");
library.searchBookByTitle("dế");
library.searchBookByTitle("Harry Potter");