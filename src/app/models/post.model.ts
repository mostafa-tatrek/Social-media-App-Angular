export interface IPost {
  id: number;
  userId: number;
  name?: string;
  body: string;
  imgurl: string;
  islike: boolean;
  date: Date;
  likes: number;
  comments: string[];
}
