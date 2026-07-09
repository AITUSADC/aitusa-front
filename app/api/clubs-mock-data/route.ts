import { NextResponse } from "next/server";
import type { ClubListItem } from "@/types/club";

// usage: fetch("/api/clubs-mock-data");
export async function GET() {
  const clubs: ClubListItem[] = [
    {
      id: 1,
      name: "Chess Club",
      description: "A club for chess enthusiasts to play and learn.",
      slug: "chess-club",
      categories: ["sports", "strategy"],
    },
    {
      id: 2,
      name: "Book Club",
      description:
        "A club for book lovers to discuss and share their favorite reads.",
      slug: "book-club",
      categories: ["literature", "discussion"],
    },
    {
      id: 3,
      name: "Cooking Club",
      description: "A club for foodies to share recipes and cook together.",
      slug: "cooking-club",
      categories: ["food", "cooking"],
    },
    {
      id: 4,
      name: "Hiking Club",
      description: "A club for outdoor enthusiasts to explore nature together.",
      slug: "hiking-club",
      categories: ["outdoors", "adventure"],
    },
    {
      id: 5,
      name: "Photography Club",
      description:
        "A club for photography enthusiasts to share tips and showcase their work.",
      slug: "photography-club",
      categories: ["art", "photography"],
    },
    {
      id: 6,
      name: "Coding Club",
      description:
        "A club for programmers to build projects and learn together.",
      slug: "coding-club",
      categories: ["technology", "programming"],
    },
    {
      id: 7,
      name: "Music Club",
      description:
        "A club for musicians to jam, perform, and improve their skills.",
      slug: "music-club",
      categories: ["music", "performance"],
    },
    {
      id: 8,
      name: "Art Club",
      description:
        "A club for artists to create, share, and discuss visual art.",
      slug: "art-club",
      categories: ["art", "creativity"],
    },
    {
      id: 9,
      name: "Robotics Club",
      description:
        "A club for students interested in building and programming robots.",
      slug: "robotics-club",
      categories: ["technology", "engineering"],
    },
    {
      id: 10,
      name: "Drama Club",
      description:
        "A club for theater enthusiasts to act, direct, and produce plays.",
      slug: "drama-club",
      categories: ["theater", "performance"],
    },
    {
      id: 11,
      name: "Debate Club",
      description:
        "A club for students to practice public speaking and critical thinking.",
      slug: "debate-club",
      categories: ["public speaking", "critical thinking"],
    },
    {
      id: 12,
      name: "Science Club",
      description:
        "A club for curious minds to explore experiments and discoveries.",
      slug: "science-club",
      categories: ["science", "experimentation"],
    },
    {
      id: 13,
      name: "Gaming Club",
      description:
        "A club for gamers to compete, collaborate, and discuss games.",
      slug: "gaming-club",
      categories: ["gaming", "entertainment"],
    },
    {
      id: 14,
      name: "Dance Club",
      description: "A club for dancers to learn routines and perform together.",
      slug: "dance-club",
      categories: ["dance", "performance"],
    },
    {
      id: 15,
      name: "Entrepreneurship Club",
      description:
        "A club for aspiring founders to develop and pitch business ideas.",
      slug: "entrepreneurship-club",
      categories: ["business", "innovation"],
    },
  ];

  return NextResponse.json(clubs);
}
