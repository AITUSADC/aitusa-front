import Header from "@/components/layout/Header";
import ClubsView from "@/components/sections/Clubs";
// localhost:3000/clubs

export default function Clubs() {
  return (
    <div className="bg-[#f5f5f5]">
      <Header variant="solid" />
      <ClubsView />
    </div>
  );
}
