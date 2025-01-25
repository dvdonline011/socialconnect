import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users } from "lucide-react";

interface FriendSuggestion {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
}

interface TrendingTopic {
  id: string;
  topic: string;
  posts: number;
}

interface RightSidebarProps {
  friendSuggestions?: FriendSuggestion[];
  trendingTopics?: TrendingTopic[];
  onAddFriend?: (id: string) => void;
}

const defaultFriendSuggestions: FriendSuggestion[] = [
  {
    id: "1",
    name: "Sarah Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    mutualFriends: 12,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    mutualFriends: 8,
  },
  {
    id: "3",
    name: "Emma Thompson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    mutualFriends: 5,
  },
];

const defaultTrendingTopics: TrendingTopic[] = [
  {
    id: "1",
    topic: "#TechNews",
    posts: 1234,
  },
  {
    id: "2",
    topic: "#Photography",
    posts: 856,
  },
  {
    id: "3",
    topic: "#Travel",
    posts: 654,
  },
];

const RightSidebar: React.FC<RightSidebarProps> = ({
  friendSuggestions = defaultFriendSuggestions,
  trendingTopics = defaultTrendingTopics,
  onAddFriend = () => {},
}) => {
  return (
    <div className="w-[280px] h-full bg-background p-4 space-y-6 border-l">
      <Card className="p-4">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Users className="w-5 h-5" />
          Friend Suggestions
        </h3>
        <div className="space-y-4">
          {friendSuggestions.map((friend) => (
            <div key={friend.id} className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={friend.avatar} />
                <AvatarFallback>{friend.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{friend.name}</p>
                <p className="text-xs text-muted-foreground">
                  {friend.mutualFriends} mutual friends
                </p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onAddFriend(friend.id)}
              >
                Add
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Separator />

      <Card className="p-4">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5" />
          Trending Topics
        </h3>
        <div className="space-y-3">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="space-y-1">
              <p className="text-sm font-medium text-primary">{topic.topic}</p>
              <p className="text-xs text-muted-foreground">
                {topic.posts.toLocaleString()} posts
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RightSidebar;
