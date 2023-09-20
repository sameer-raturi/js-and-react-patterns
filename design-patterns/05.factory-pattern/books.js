const createBook = (title, author, isbn) => ({ title, author, isbn });

export default {
  book1: createBook("Harry Potter", "JK Rowling", "AB123"),
  book2: createBook("The Great Gatsby", "F. Scott Fitzgerald", "CD456"),
  book3: createBook("Moby-Dick", "Herman Melville", "EF789"),
  book4: createBook("Harry Potter", "JK Rowling", "AB123"),
  book5: createBook("The Great Gatsby", "F. Scott Fitzgerald", "CD456"),
};
