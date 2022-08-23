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

  postsPhotos: [
    {
      id: number;
      postPhoto: string;
      comments: [
        { id: number; comment: string; likes: number },
        { id: number; comment: string; likes: number }
      ];
      likes: number;
    },
    {
      id: number;
      postPhoto: string;
      comments: [
        { id: number; comment: string },
        { id: number; comment: string }
      ];
      likes: number;
    },
    {
      id: number;
      postPhoto: string;
      comments: [
        { id: number; comment: string },
        { id: number; comment: string }
      ];
      likes: number;
    }
  ];
};

export type StoryHighlight = {};
