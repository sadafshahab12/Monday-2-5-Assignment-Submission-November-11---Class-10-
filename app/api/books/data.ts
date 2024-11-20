export const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    shortIntro:
      "A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
    price: 12.99,
    availability: true,
    src: "/images/book1.jpg",
  },
  {
    id: 2,
    title: "1984",
    shortIntro:
      "A dystopian novel about totalitarianism and surveillance, written by George Orwell.",
    price: 14.99,
    availability: false,
    src: "/images/book2.jpg",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    shortIntro:
      "A classic novel that deals with racial injustice in the Deep South, written by Harper Lee.",
    price: 10.99,
    availability: true,
    src: "/images/book3.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    shortIntro:
      "A romantic novel that explores the manners and marriage in the British Regency, by Jane Austen.",
    price: 9.99,
    availability: true,
    src: "/images/book4.jpg",
  },
  {
    id: 5,
    title: "Moby-Dick",
    shortIntro:
      "A novel about the obsessive quest of Captain Ahab to seek revenge on the giant white whale, Moby-Dick.",
    price: 13.5,
    availability: true,
    src: "/images/book5.jpg",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    shortIntro:
      "A coming-of-age novel that explores themes of alienation and adolescent angst, by J.D. Salinger.",
    price: 11.5,
    availability: false,
    src: "/images/book6.png",
  },
  {
    id: 7,
    title: "Brave New World",
    shortIntro:
      "A dystopian novel exploring the effects of a controlled, perfect society.",
    price: 11.99,
    availability: true,
    src: "https://cdn2.penguin.com.au/covers/original/9781784877736.jpg",
  },
  {
    id: 8,
    title: "Jane Eyre",
    shortIntro:
      "A story of love, resilience, and self-discovery in 19th century England.",
    price: 16.99,
    availability: true,
    src: "https://cdn.penguin.co.uk/dam-assets/books/9780241570029/9780241570029-jacket-large.jpg",
  },
  {
    id: 9,
    title: "The Lord of the Rings",
    shortIntro:
      "A legendary epic fantasy tale about the battle to destroy the One Ring.",
    price: 25.99,
    availability: true,
    src: "https://www.pagesofhackney.co.uk/wp-content/uploads/2023/03/710iAkPYPzL.jpg",
  },
  {
    id: 10,
    title: "The Hobbit",
    shortIntro:
      "A prequel to The Lord of the Rings, following Bilbo Baggins on his adventure.",
    price: 19.99,
    availability: true,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUktpuWlWdgUoakBw6-lOCEOj4o1TSps05A&s",
  },
  {
    id: 11,
    title: "War and Peace",
    shortIntro:
      "A historical epic covering the Napoleonic wars and the Russian aristocracy.",
    price: 29.99,
    availability: true,
    src: "https://cdn.kobo.com/book-images/3ac03eac-d437-47e3-9b15-52542edabd56/1200/1200/False/war-and-peace-34.jpg",
  },
  {
    id: 12,
    title: "Crime and Punishment",
    shortIntro:
      "A philosophical exploration of morality, guilt, and redemption in 19th century Russia.",
    price: 17.99,
    availability: false,
    src: "https://cdn.kobo.com/book-images/2293d740-178e-4da1-a849-b11d6308fbaa/353/569/90/False/crime-and-punishment-35.jpg",
  },
  {
    id: 13,
    title: "The Picture of Dorian Gray",
    shortIntro:
      "A novel exploring vanity, morality, and the consequences of a hedonistic life.",
    price: 14.49,
    availability: true,
    src: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476788128/the-picture-of-dorian-gray-9781476788128_hr.jpg",
  },
  {
    id: 14,
    title: "Frankenstein",
    shortIntro:
      "The classic tale of a scientist who creates life and faces the consequences of playing God.",
    price: 13.49,
    availability: true,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CMwKlMgGfz3RCLhodrjeTQwucjjsK0Unug&s",
  },
  {
    id: 15,
    title: "The Odyssey",
    shortIntro:
      "An epic journey home after the Trojan War, filled with gods, monsters, and trials.",
    price: 21.99,
    availability: true,
    src: "https://www.bookonline.pk/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-21-at-14.14.41.jpg",
  },
  {
    id: 16,
    title: "The Chronicles of Narnia",
    shortIntro:
      "A fantasy series where children travel to a magical land filled with talking animals and epic adventures.",
    price: 35.99,
    availability: true,
    src: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg",
  },
];

export interface Book {
  id: number;
  title: string;
  shortIntro: string;
  price: number;
  availability: boolean;
  src: string;
}
