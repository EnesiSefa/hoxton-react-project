export type User = {
  id: number;
  name: string;
  username: string;
  profilePic: string;
  numberOfPosts: number;
  following: number;
  followers: number;
  bio: string;
  storyHighlights: [
    {
      id: number;
      storyPic: string;
      storyTitle: string;
    },
    {
      id: number;
      storyPic: string;
      storyTitle: string;
    },
    {
      id: number;
      storyPic: string;
      storyTitle: string;
    }
  ];

  posts: [
    {
      id: number;
      postPhoto: string;
      description: string;
      comments: [
        { id: number; comment: string; likes: number },
        { id: number; comment: string; likes: number }
      ];
      likes: number;
    }
  ];
};

export type StoryHighlight = {};
