export type ValueOf<T> = T[keyof T];

export interface User {
  photoURL?: string;
  displayName: string;
  uid: string;
}

export interface Post {
  imageURL: string;
  ownerId: string;
  id: string;
}

export interface AppCache {
  posts: PostWithOwner[];
}

export interface PostWithOwner extends Post {
  owner: User;
}
