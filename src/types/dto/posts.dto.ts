export type PostDto = {
    userName: string;
    userImage: string;

    content: string;
    likesAmount: number;

    isLiked: boolean;
    isReposted: boolean;
}