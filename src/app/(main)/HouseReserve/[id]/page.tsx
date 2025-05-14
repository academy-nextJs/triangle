import ReserveDetail from "@/components/HouseReserveDetail/ReserveDetail";
import httpServer from "@/utils/services/interceptor/httpServer";
import { Metadata } from "next";

type Params = { params: { id: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = params;
  const res = await httpServer.get(`/houses/${id}`);
  const house = res.data;

  return {
    title: `رزرو ${house.title} - ${house.address}`,
    description: `رزرو ${house.title} در ${house.address} با ظرفیت ${house.capacity} نفر`,
  };
}

export default async function Page({ params }: Params) {
  const { id } = params;

  try {
    const res = await httpServer.get(`/houses/${id}`);
    const house = res.data;

    return <ReserveDetail house={house} />;
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-red-500">
        خطا در بارگیری اطلاعات اقامتگاه
      </div>
    );
  }
}
