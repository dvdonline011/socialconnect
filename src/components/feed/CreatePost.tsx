import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Image, Video, Smile, Send } from "lucide-react";

interface CreatePostProps {
  onSubmit?: (content: string, media?: File[]) => void;
  userAvatar?: string;
  userName?: string;
}

const CreatePost: React.FC<CreatePostProps> = ({
  onSubmit = () => {},
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  userName = "John Doe",
}) => {
  const [content, setContent] = useState("");

  return (
    <Card className="w-full bg-background p-4 space-y-4">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userAvatar} />
          <AvatarFallback>{userName[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-4">
          <textarea
            placeholder="What's on your mind?"
            className="w-full min-h-[100px] resize-none rounded-lg p-3 text-sm via-slate-400 to-orange-200 to-[35%] from-[#FFFFFF] text-[#4a5677]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Image className="h-4 w-4" />
                Photo
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Video className="h-4 w-4" />
                Video
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Smile className="h-4 w-4" />
                Feeling
              </Button>
            </div>

            <Button
              className="flex items-center gap-2"
              onClick={() => onSubmit(content)}
            >
              <Send className="h-4 w-4" />
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
