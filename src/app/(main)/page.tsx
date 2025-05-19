import LandingContainer from "@/components/LandingContainer";
import { Comment } from "@/types/Landing/Comments";
import { getHouseComment } from "@/utils/services/api/Landing/Comments/HouseComments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پیزا - خرید و فروش خانه و رزرو هتل",
  description: "خرید و فروش و رهن و اجاره خانه",
};

export default async function HomePage() {
  const comments: Comment[] = await getHouseComment();
  return (
    <div className="contain-content px-4 ">
      <LandingContainer comments={comments} />
    </div>
  );
}
