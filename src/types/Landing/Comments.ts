export interface Comment {
  id: string;
  house_id: string | null;
  user_id: string | null;
  title: string | null;
  caption: string | null;
  rating: number | null;
  created_at: string;
  user: User;
  parent_comment_id: string | null;

  parent_comment: Comment | null;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePicture: string | null;
}
