import { NextResponse } from "next/server";
import type { Club } from "@/types/club";

// usage: fetch("/api/clubs-mock-data");
export async function GET() {
  const clubs: Club[] = [
    {
      id: 1,
      name: "Chess Club",
      description: "A club for chess enthusiasts to play and learn.",
      nameUrl: "chess-club",
    },
    {
      id: 2,
      name: "Book Club",
      description:
        "A club for book lovers to discuss and share their favorite reads.",
      nameUrl: "book-club",
    },
    {
      id: 3,
      name: "Cooking Club",
      description: "A club for foodies to share recipes and cook together.",
      nameUrl: "cooking-club",
    },
    {
      id: 4,
      name: "Hiking Club",
      description: "A club for outdoor enthusiasts to explore nature together.",
      nameUrl: "hiking-club",
    },
    {
      id: 5,
      name: "Photography Club",
      description:
        "A club for photography enthusiasts to share tips and showcase their work.",
      nameUrl: "photography-club",
    },
    {
      id: 6,
      name: "Coding Club",
      description:
        "A club for programmers to build projects and learn together.",
      nameUrl: "coding-club",
    },
    {
      id: 7,
      name: "Music Club",
      description:
        "A club for musicians to jam, perform, and improve their skills.",
      nameUrl: "music-club",
    },
    {
      id: 8,
      name: "Art Club",
      description:
        "A club for artists to create, share, and discuss visual art.",
      nameUrl: "art-club",
    },
    {
      id: 9,
      name: "Robotics Club",
      description:
        "A club for students interested in building and programming robots.",
      nameUrl: "robotics-club",
    },
    {
      id: 10,
      name: "Drama Club",
      description:
        "A club for theater enthusiasts to act, direct, and produce plays.",
      nameUrl: "drama-club",
    },
    {
      id: 11,
      name: "Debate Club",
      description:
        "A club for students to practice public speaking and critical thinking.",
      nameUrl: "debate-club",
    },
    {
      id: 12,
      name: "Science Club",
      description:
        "A club for curious minds to explore experiments and discoveries.",
      nameUrl: "science-club",
    },
    {
      id: 13,
      name: "Gaming Club",
      description:
        "A club for gamers to compete, collaborate, and discuss games.",
      nameUrl: "gaming-club",
    },
    {
      id: 14,
      name: "Dance Club",
      description: "A club for dancers to learn routines and perform together.",
      nameUrl: "dance-club",
    },
    {
      id: 15,
      name: "Entrepreneurship Club",
      description:
        "A club for aspiring founders to develop and pitch business ideas.",
      nameUrl: "entrepreneurship-club",
    },
  ];

  return NextResponse.json(clubs);
}
