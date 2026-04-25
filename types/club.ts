export type ClubListItem = {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  slug: string;
};

export type ClubGoal = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
};

export type ClubBySlug = {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  slug: string;
  goals: {
    description: string;
    list: ClubGoal[]
  };
};
