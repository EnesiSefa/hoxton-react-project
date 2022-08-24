export type User = {
  id: number;
  name: string;
  username: string;
  profilePic: string;
  password: string;
  email: string;
};
export type Post = {
  id?: number;
  image: string;
  description: string;
  likes: number;
  userId: number;
  user?: User;
  comments?: Comment[];
};
export type Comment = {
  id?: number;
  content: string;
  likes: number;
  userId: number;
  postId: number;
  user?: User;
  post?: Post;
};
export type Story = {
  id: number;
  storyPic: string;
  storyTitle: string;
};

export type Id = {
  id: number
}

export type StoryHighlight = {};
