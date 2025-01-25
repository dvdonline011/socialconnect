import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  MessageCircle,
  Home,
  Search,
  Menu,
  Facebook,
} from "lucide-react";

interface TopToolbarProps {
  userAvatar?: string;
  userName?: string;
  onSearch?: (query: string) => void;
}

const TopToolbar: React.FC<TopToolbarProps> = ({
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  userName = "John Doe",
  onSearch = () => {},
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-background border-b z-50">
      <div className="container h-full mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-[320px]">
          <Facebook className="h-8 w-8 text-primary" />
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search on Facebook"
              className="pl-8 bg-secondary"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-1">
          <Button variant="ghost" size="lg" className="px-12" asChild>
            <Link to="/">
              <Home className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="px-12">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex items-center gap-2 w-[320px] justify-end">
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarImage src={userAvatar} />
            <AvatarFallback>{userName[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default TopToolbar;
