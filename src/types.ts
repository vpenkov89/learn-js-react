export interface IDish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}
export interface IReview {
  id: string;
  userId: string;
  text: string;
  rating: number;
}
export interface IRestaurant {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}

export interface IUserShort {
  id: string;
  name: string;
}

export interface IUser extends IUserShort {
  email: string;
  // authToken?: string;
}
