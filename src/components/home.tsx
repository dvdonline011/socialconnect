import React from "react";
import LeftSidebar from "./layout/LeftSidebar";
import RightSidebar from "./layout/RightSidebar";
import TopToolbar from "./layout/TopToolbar";
import CreatePost from "./feed/CreatePost";
import PostCard from "./feed/PostCard";

interface HomeProps {
  posts?: Array<{
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
  }>;
}

const defaultPosts = [
  {
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
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    content:
      "Just finished reading an amazing book! 📚 Would highly recommend it to everyone.",
    timestamp: "4 hours ago",
    likes: 23,
    comments: 5,
    shares: 1,
  },
  {
    id: "3",
    author: {
      name: "Mike Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    content: "Beautiful sunset at the beach today! 🌅",
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e"],
    timestamp: "6 hours ago",
    likes: 56,
    comments: 12,
    shares: 7,
  },
];

const Home: React.FC<HomeProps> = ({ posts = defaultPosts }) => {
  return (
    <div className="min-h-screen bg-background pt-14">
      <TopToolbar />
      <div className="container mx-auto flex gap-4">
        <LeftSidebar />

        <main className="flex-1 py-6 px-4 max-w-[680px]">
          <CreatePost />

          <div className="mt-6 space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
