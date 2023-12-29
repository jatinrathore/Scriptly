// mockData.js

export interface Comment {
  id: number;
  username: string;
  text: string;
}

export interface Bookmarked {
  id: number;
  userId: number;
  isBookmarked: boolean;
}
export interface Post {
  id: number;
  name: string;
  profilePic: string;
  createdAt: string;
  content: string;
  comments: Comment[];
  likes: number;
  bookmarked: Bookmarked;
}

const mockData: Post[] = [
  {
    id: 1,
    name: "John Doe",
    profilePic: "url/to/john-doe-pic.jpg",
    createdAt: "date-here",
    content: "This is a sample post.",
    comments: [
      { id: 1, username: "Alice", text: "Great post!" },
      { id: 2, username: "Bob", text: "Nice one!" },
    ],
    likes: 20,
    bookmarked: { id: 1, userId: 1, isBookmarked: false },
  },
  {
    id: 1,
    name: "John Doe",
    profilePic: "../assets/anonymous_user.jpg",
    createdAt: "date-here",
    content: "This is a sample post.",
    comments: [
      { id: 1, username: "Alice", text: "Great post!" },
      { id: 2, username: "Bob", text: "Nice one!" },
    ],
    likes: 20,
    bookmarked: { id: 1, userId: 1, isBookmarked: false },
  },
  {
    id: 4,
    name: "Alex Turner",
    profilePic: "../assets/anonymous_user.jpg",
    createdAt: "date-here",
    content: "Listening to some great music!",
    comments: [
      { id: 1, username: "Olivia", text: "Which song is your favorite?" },
      { id: 2, username: "Liam", text: "Music is life!" },
    ],
    likes: 20,
    bookmarked: { id: 1, userId: 1, isBookmarked: false },
  },
  {
    id: 5,
    name: "Sophie Anderson",
    profilePic: "../assets/anonymous_user.jpg",
    createdAt: "date-here",
    content: "Exploring new places!",
    comments: [
      { id: 1, username: "Noah", text: "Travel goals!" },
      { id: 2, username: "Ava", text: "Where are you right now?" },
    ],
    likes: 20,
    bookmarked: { id: 1, userId: 1, isBookmarked: false },
  },
  {
    id: 6,
    name: "William Harris",
    profilePic: "../assets/anonymous_user.jpg",
    createdAt: "date-here",
    content: "Coding and coffee!",
    comments: [
      { id: 1, username: "Emma", text: "Code on!" },
      { id: 2, username: "Mia", text: "I love coffee too!" },
    ],
    likes: 20,
    bookmarked: { id: 1, userId: 1, isBookmarked: false },
  },
  // Add more mock posts as needed
];

export default mockData;
