interface Book {
  id: number;
  title: string;
  autor: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: string;
  description: string;
  color: string;
  cover: string;
  video: string;
  summart: string;
  isLoanedBook: boolean;
}

interface AuthCredentials{
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}