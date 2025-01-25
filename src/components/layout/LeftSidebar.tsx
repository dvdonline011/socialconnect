import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  User,
  Users,
  Bookmark,
  MessageCircle,
  Calendar,
  Image,
  Settings,
  HelpCircle,
} from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface LeftSidebarProps {
  items?: NavItem[];
  activeItem?: string;
  onNavItemClick?: (path: string) => void;
}

const defaultNavItems: NavItem[] = [
  { icon: <Home size={20} />, label: "Home", path: "/" },
  { icon: <User size={20} />, label: "Profile", path: "/profile" },
  { icon: <Users size={20} />, label: "Friends", path: "/friends" },
  { icon: <MessageCircle size={20} />, label: "Messages", path: "/messages" },
  { icon: <Calendar size={20} />, label: "Events", path: "/events" },
  { icon: <Image size={20} />, label: "Photos", path: "/photos" },
  { icon: <Bookmark size={20} />, label: "Saved", path: "/saved" },
  { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  { icon: <HelpCircle size={20} />, label: "Help", path: "/help" },
];

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  items = defaultNavItems,
  activeItem = "/",
  onNavItemClick = () => {},
}) => {
  return (
    <div className="w-[280px] h-full bg-background border-r">
      <ScrollArea className="h-full px-4 py-6">
        <nav className="space-y-2">
          {items.map((item) => (
            <Button
              key={item.path}
              variant={activeItem === item.path ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
              asChild
            >
              <Link to={item.path} onClick={() => onNavItemClick(item.path)}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-muted-foreground px-4">
            © 2024 Social Network
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
