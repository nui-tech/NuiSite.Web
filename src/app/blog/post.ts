export class Post {
    id: number;
    title: string;
    content: string;
    author: string;
    createdBy: number;
    createdOn: string;
    updatedBy: number;
    updatedOn: string;
    isActive: boolean;

}

export interface IPost {
    id: number;
    title: string;
    content: string;
    author: string;
    createdBy: number;
    createdOn: string;
    updatedBy: number;
    updatedOn: string;
    isActive: boolean;

}