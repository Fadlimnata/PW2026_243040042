export interface Buku {
    id: number;
    judul: string;
    penulis: string;
    penerbit: string;
    tahunTerbit: number;
    genre: string;
}

export const bukuList: Buku[] = [
    {
        id: 1,
        judul: "The Great Gatsby",
        penulis: "F. Scott Fitzgerald",
        penerbit: "Scribner",
        tahunTerbit: 1925,
        genre: "Fiction"
    },
    {
        id: 2,
        judul: "To Kill a Mockingbird",
        penulis: "Harper Lee",
        penerbit: "J.B. Lippincott & Co.",
        tahunTerbit: 1960,
        genre: "Fiction"
        
    },
    {
        id: 3,
        judul: "1984",
        penulis: "George Orwell",
        penerbit: "Secker & Warburg",
        tahunTerbit: 1948,
        genre: "Dystopian Fiction"
    }
];