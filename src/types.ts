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

export interface PostWithOwner extends Post {
  owner: User;
}
