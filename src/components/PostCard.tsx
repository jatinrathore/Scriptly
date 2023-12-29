// // PostCard.js
// import { useState } from "react";
// import { Card, Avatar, Button, Input } from "antd";
// import {
//   HeartOutlined,
//   HeartFilled,
//   BookOutlined,
//   BookFilled,
//   EditOutlined,
//   DeleteOutlined,
//   CommentOutlined,
// } from "@ant-design/icons";
// import { Post } from "../mock/posts";

// const { Meta } = Card;

// interface Props {
//   post: Post;
//   isCurrentUser: boolean;
//   onUpdatePost: (postId: number) => void;
//   onDeletePost: (postId: number) => void;
//   onAddComment: (postId: number, comment: string) => void;
// }

// const PostCard = ({
//   post,
//   isCurrentUser,
//   onUpdatePost,
//   onDeletePost,
//   onAddComment,
// }: Props) => {
//   const [liked, setLiked] = useState(post.likes);
//   const [bookmarked, setBookmarked] = useState(post.bookmarked);
//   const [comment, setComment] = useState("");
//   const [showComments, setShowComments] = useState(false);

//   const handleLike = () => {
//     setLiked(!liked);
//     // Update the like count in the backend if needed
//   };

//   const handleBookmark = () => {
//     setBookmarked(!bookmarked);
//     // Update the bookmark count in the backend if needed
//   };

//   const handleAddComment = () => {
//     if (comment.trim() !== "") {
//       onAddComment(post.id, comment);
//       setComment("");
//     }
//   };

//   return (
//     <Card
//       style={{ marginBottom: "16px" }}
//       actions={[
//         liked ? (
//           <HeartFilled key="heart" onClick={handleLike} />
//         ) : (
//           <HeartOutlined key="heart" onClick={handleLike} />
//         ),
//         bookmarked ? (
//           <BookFilled key="bookmark" onClick={handleBookmark} />
//         ) : (
//           <BookOutlined key="bookmark" onClick={handleBookmark} />
//         ),
//         <CommentOutlined
//           key="comment"
//           onClick={() => setShowComments(!showComments)}
//         />,
//         isCurrentUser && (
//           <EditOutlined key="edit" onClick={() => onUpdatePost(post.id)} />
//         ),
//         isCurrentUser && (
//           <DeleteOutlined key="delete" onClick={() => onDeletePost(post.id)} />
//         ),
//       ]}
//     >
//       <Meta
//         avatar={<Avatar src={post.profilePic} />}
//         title={post.name}
//         description={`Posted on ${post.createdAt}`}
//       />
//       <p>{post.content}</p>
//       {showComments && (
//         <div>
//           {post.comments.map((comment) => (
//             <Comment
//               key={comment.id}
//               author={comment.username}
//               content={comment.text}
//             />
//           ))}
//         </div>
//       )}
//       <Input
//         placeholder="Add a comment..."
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         onPressEnter={handleAddComment}
//         style={{ marginTop: "8px" }}
//       />
//     </Card>
//   );
// };

// export default PostCard;
