export type PostItemProps = {
    author: string;
    authorImage: string;
    content: string;
    likesAmount: number;
    onLikeClick: VoidFunction;
    onRepostClick: VoidFunction;
    isLiked: boolean;
    isReposted: boolean;
}