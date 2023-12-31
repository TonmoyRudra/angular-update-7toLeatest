export interface IStore {
  CID: Number;
  MemberID: any;
  SessionID: string;
  Cart_Date: any;
  Product_ID: Number;
  Product_Count: Number;
}

export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    state: string;
    city: string;
    zip: string;
    password: string;
    confirmpass: string;
    notifyme: string;
    acceptpolicy: string;
}

export interface IManufacturer {
   ID: Number;
   CID: Number;
   Company_Name:string;
   First_Name: string;
   Last_Name: string;
   Email_Address: string;
   Mobile_Phone: string;
   Address: string;
   Address2: string;
   State: string;
   City: string;
   ZIP: string;
   Country:string;
   password: string;
   confirmpass: string;
   notifyme: string;
   acceptpolicy: string;
}

export interface IUserAddress {
   ID: Number;
   CID: Number;
   CustomerID: Number;
   Company_Name:string;
   First_Name: string;
   Last_Name: string;
   Email_Address: string;
   Phone_Number: string;
   Address: string;
   Address2: string;
   State: string;
   City: string;
   ZipCode: string;
   Country:string;
}

export interface IStorePayment {
   cid: Number;
   CustomerID: Number;
}

export interface IForgotPassword {
    email: string;
}

export interface IResetPassword {
    passwordToken: string;
    newPassword: string;
}

export interface IWishList {
   CID: Number;
   userId: any;
   Wishlist_ID:any;
   Product_ID: any;
}

export interface IProductReview {
   CID: Number;
   CustomerID: any;
   Product_ID:any;
   Rating: any;
   Title: any;
   Message: any;
}

export interface IProductQA {
   CID: Number;
   CustomerID: any;
   Product_ID:any;
   QID: any;
   Message: any;
   Helpful: any;
   Votes: any;
}

export interface IBlogPostComment {
   CID: Number;
   PostID: any;
   name:any;
   email: any;
   comment: any;
   commented_by: any;
}

export interface IContactRequest {
   CID: Number;
   name: any;
   email:any;
   phone: any;
   company: any;
   message: any;
}

export interface ILikeVideo {
   CID: Number; CustomerID: any; VideoID: Number; Liked: any;
}
export interface IFavoriteVideo {
   CID: Number; CustomerID: any; VideoID: any;
}
export interface IQueueVideo {
   CID: Number; CustomerID: any; VideoID: any;
}
export interface IPinVideo {
   CID: Number; CustomerID: any; PostID: Number; Pinned: any;
}
