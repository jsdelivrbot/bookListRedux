export function selectBook(book) {
    console.log('kirja:', book.title);

    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
