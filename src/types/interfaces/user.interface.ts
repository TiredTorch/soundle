import { Post } from "./posts.interface";

export type User = {
    id: string;
    username: string;
    email: string;
    userImage?: string;
    userDescription?: string;
    sharedPosts?: Array<Post>;
    musicHistory?: unknown;
}

export type Message = {
    from: string;
    content: string;
}