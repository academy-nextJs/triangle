import Image from "next/image";

type Props = {
  house: {
    title: string;
    price: string;
    rate: string;
    capacity: number;
    rooms: number;
    bathrooms: number;
    parking: number;
    yard_type: string;
    tags: string[];
    photos: string[];
  };
};

export function ReserveInfo({ house }: Props) {
  return (
    <div className=" rounded pb-4 pl-2  flex flex-col gap-4 text-right">
      <div className="text-4xl font-bold">چرا {house.title}؟</div>
      <p className="min-h-[192px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <Image
        src={house.photos[1]}
        alt={`No Image`}
        width={600}
        height={250}
        className="w-full h-[250px] rounded-4xl object-cover"
      />
      <div className="text-4xl font-bold">چرا {house.title}؟</div>

      <p className="min-h-[192px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
      <p className="text-blue-500 pt-5">امکانات هتل</p>

      <div className="flex gap-2 [&>*]:flex [&>*]:text-gray-500 [&>*]:[&>*]:text-black [&>*]:[&>*]:dark:text-white [&>*]:[&>*]:pr-1 [&>*]:border [&>*]:p-2 [&>*]:rounded-3xl">
        <p>
          ظرفیت: <p>{house.capacity}نفر</p>
        </p>
        <p>
          اتاق خواب: <p>{house.rooms}</p>
        </p>
        <p>
          حمام: <p>{house.bathrooms}</p>
        </p>
        <p>
          پارکینگ: <p>{house.parking}</p>
        </p>
        <p>
          نوع حیاط: <p>{house.yard_type}</p>
        </p>
        <p>
          امتیاز: <p>{house.rate}</p>
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {house.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-indigo-100 text-indigo-700 text-sm px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
