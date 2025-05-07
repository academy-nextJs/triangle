export interface Comment {
    id: string;
    house_id: string | null;
    user_id: string | null;
    title: string | null;
    caption: string | null;
    rating: number | null;
    created_at: string;
    parent_comment_id: string | null;
  }