import LandingContainer from '@/components/LandingContainer';
import { Comment } from '@/types/Landing/Comments';
import { getHouseComment } from '@/utils/services/api/Landing/Comments/HouseComments';
export default async function HomePage() {
  const comments: Comment[] = await getHouseComment();
  return (
    <div className='contain-content px-4 '>
      <LandingContainer comments={comments}/>
    </div>
  );
} 