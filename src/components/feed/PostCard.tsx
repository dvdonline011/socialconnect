import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import CommentSection from "./CommentSection";

interface PostCardProps {
  post?: {
    id: string;
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    images?: string[];
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
  };
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

const defaultPost = {
  id: "1",
  author: {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  },
  content:
    "Just had an amazing day exploring the city! 🌆 Check out these awesome views!",
  images: [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9",
  ],
  timestamp: "2 hours ago",
  likes: 42,
  comments: 8,
  shares: 3,
};

const PostCard: React.FC<PostCardProps> = ({
  post = defaultPost,
  onLike = () => {},
  onComment = () => {},
  onShare = () => {},
}) => {
  const [showComments, setShowComments] = React.useState(false);

  return (
    <Card className="w-full bg-background p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{post.author.name}</h3>
            <p className="text-sm text-muted-foreground">{post.timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-4">
        <p>{post.content}</p>
        {post.images && post.images.length > 0 && (
          <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-2 border-t">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
          onClick={onLike}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>{post.likes}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="h-4 w-4" />
          <span>{post.comments}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2"
          onClick={onShare}
        >
          <Share2 className="h-4 w-4" />
          <span>{post.shares}</span>
        </Button>
      </div>

      {showComments && <CommentSection />}
    </Card>
  );
};

export default PostCard;
