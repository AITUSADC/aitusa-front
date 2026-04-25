import { NextResponse } from "next/server";
import type { ClubBySlug } from "@/types/club";

function createClubGoals(clubName: string): ClubBySlug["goals"] {
  return {
    description: `This semester, ${clubName} is focused on practical growth and consistent participation.`,
    list: [
      {
        id: 1,
        title: "Core Skills",
        description: `Run weekly sessions to help members build core ${clubName.toLowerCase()} skills through guided practice.`,
        imageUrl: "/images/placeholder2.jpg",
      },
      {
        id: 2,
        title: "Team Projects",
        description:
          "Create collaborative activities where members solve challenges together and learn from peers.",
        imageUrl: "/images/placeholder.png",
        },
      {
        id: 3,
        title: "Public Showcase",
        description:
          "Present outcomes in a showcase event so members can demonstrate progress and gain confidence.",
      },
    ],
  };
}

// usage:
// - fetch("/api/club-mock-data?slug=chess-club") -> single club by slug
export async function GET(request: Request) {
  const clubs: ClubBySlug[] = [
    {
      id: 1,
      name: "Chess Club",
      description:
        "A welcoming community for beginners and experienced players to practice games, study famous openings, analyze strategies, and compete in friendly tournaments throughout the semester.",
      slug: "chess-club",
      goals: createClubGoals("Chess Club"),
    },
    {
      id: 2,
      name: "Book Club",
      description:
        "A space for passionate readers to explore diverse genres, discuss themes and characters, share recommendations, and build thoughtful conversations around classic and modern literature.",
      slug: "book-club",
      goals: createClubGoals("Book Club"),
    },
    {
      id: 3,
      name: "Cooking Club",
      description:
        "A hands-on club where members discover new cuisines, exchange family recipes, learn practical kitchen techniques, and cook together during themed sessions and collaborative food events.",
      slug: "cooking-club",
      goals: createClubGoals("Cooking Club"),
    },
    {
      id: 4,
      name: "Hiking Club",
      description:
        "An outdoor-focused group that organizes scenic hikes, nature walks, and weekend trips while promoting fitness, trail safety, environmental awareness, and team-based adventure experiences.",
      slug: "hiking-club",
      goals: createClubGoals("Hiking Club"),
    },
    {
      id: 5,
      name: "Photography Club",
      description:
        "A creative community for photographers to improve composition and lighting skills, join photo walks, review each other’s work, and showcase portfolios through campus exhibits and contests.",
      slug: "photography-club",
      goals: createClubGoals("Photography Club"),
    },
    {
      id: 6,
      name: "Coding Club",
      description:
        "A collaborative environment for programmers of all levels to build real projects, practice algorithms, prepare for interviews, and learn modern tools, frameworks, and software engineering workflows.",
      slug: "coding-club",
      goals: createClubGoals("Coding Club"),
    },
    {
      id: 7,
      name: "Music Club",
      description:
        "A vibrant club where instrumentalists, vocalists, and producers rehearse together, explore different styles, perform at campus events, and support each other’s musical growth and confidence.",
      slug: "music-club",
      goals: createClubGoals("Music Club"),
    },
    {
      id: 8,
      name: "Art Club",
      description:
        "An inclusive space for visual artists to experiment with drawing, painting, and mixed media, receive constructive feedback, and present artwork in collaborative exhibitions and creative workshops.",
      slug: "art-club",
      goals: createClubGoals("Art Club"),
    },
    {
      id: 9,
      name: "Robotics Club",
      description:
        "A technical club for students interested in designing, assembling, and programming robots, with opportunities to learn electronics, automation, teamwork, and participate in robotics competitions.",
      slug: "robotics-club",
      goals: createClubGoals("Robotics Club"),
    },
    {
      id: 10,
      name: "Drama Club",
      description:
        "A performance-based community where members develop acting, directing, and stagecraft skills, rehearse original and classic productions, and present engaging theater experiences for campus audiences.",
      slug: "drama-club",
      goals: createClubGoals("Drama Club"),
    },
    {
      id: 11,
      name: "Debate Club",
      description:
        "A forum for students to sharpen public speaking, argumentation, and critical thinking through structured debates, research-driven preparation, and practice rounds on current social and global issues.",
      slug: "debate-club",
      goals: createClubGoals("Debate Club"),
    },
    {
      id: 12,
      name: "Science Club",
      description:
        "A curiosity-driven club that explores scientific ideas through experiments, demonstrations, and discussions, encouraging members to connect classroom concepts with real-world discoveries and innovations.",
      slug: "science-club",
      goals: createClubGoals("Science Club"),
    },
    {
      id: 13,
      name: "Gaming Club",
      description:
        "A social and competitive hub for gamers to enjoy multiplayer sessions, strategy discussions, and tournaments while building teamwork, communication, and a welcoming community around shared interests.",
      slug: "gaming-club",
      goals: createClubGoals("Gaming Club"),
    },
    {
      id: 14,
      name: "Dance Club",
      description:
        "An energetic group for dancers of all backgrounds to learn choreography, practice technique, collaborate on routines, and perform in showcases that celebrate creativity, rhythm, and expression.",
      slug: "dance-club",
      goals: createClubGoals("Dance Club"),
    },
    {
      id: 15,
      name: "Entrepreneurship Club",
      description:
        "A growth-oriented community for aspiring founders to validate ideas, develop business models, learn pitching skills, and collaborate on startup projects with guidance from peers and guest mentors.",
      slug: "entrepreneurship-club",
      goals: createClubGoals("Entrepreneurship Club"),
    },
  ];

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? searchParams.get("nameUrl");

  if (!slug) {
    return NextResponse.json(clubs);
  }

  const club = clubs.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!club) {
    return NextResponse.json(
      { message: `Club with slug "${slug}" not found` },
      { status: 404 },
    );
  }

  return NextResponse.json(club);
}
