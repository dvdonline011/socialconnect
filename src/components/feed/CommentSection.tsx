import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  comments?: Comment[];
  onAddComment?: (comment: string) => void;
  onLike?: (commentId: string) => void;
  onReply?: (commentId: string, reply: string) => void;
}

const defaultComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    content: "This is a great post! Thanks for sharing.",
    timestamp: "2h ago",
    likes: 5,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Jane Smith",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
        },
        content: "I totally agree!",
        timestamp: "1h ago",
        likes: 2,
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Alice Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
    },
    content: "Very insightful discussion here.",
    timestamp: "3h ago",
    likes: 3,
  },
];

const CommentComponent: React.FC<{ comment: Comment; level?: number }> = ({
  comment,
  level = 0,
}) => {
  return (
    <div className={`flex gap-3 ${level > 0 ? "ml-12" : ""}`}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={comment.author.avatar} />
        <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="rounded-lg bg-secondary p-3">
          <div className="font-semibold">{comment.author.name}</div>
          <p className="text-sm">{comment.content}</p>
        </div>
        <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
          <button className="hover:text-primary">Like ({comment.likes})</button>
          <button className="hover:text-primary">Reply</button>
          <span>{comment.timestamp}</span>
        </div>
        {comment.replies?.map((reply) => (
          <CommentComponent key={reply.id} comment={reply} level={level + 1} />
        ))}
      </div>
    </div>
  );
};

const CommentSection: React.FC<CommentSectionProps> = ({
  comments = defaultComments,
  onAddComment = () => {},
  onLike = () => {},
  onReply = () => {},
}) => {
  return (
    <div className="w-full bg-background p-4 rounded-lg space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=current" />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
        <input
          type="text"
          placeholder="Write a comment..."
          className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm"
        />
      </div>

      <Separator />

      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
