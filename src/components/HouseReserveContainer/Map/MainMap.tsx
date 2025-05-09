"use client";

import MapSvg from "@/components/Svg/MapSvg";
import L from "leaflet";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

const createMarkerIcon = (url: string) =>
  L.divIcon({
    className: "",
    html: `
        <div style="width:42px;height:42px;border-radius:9999px;overflow:hidden;border:2px solid blue;box-shadow:0 0 6px rgba(0,0,0,0.3);background:white;">
          <img src="${url}" style="width:100%;height:100%;object-fit:cover;" />
        </div>
      `,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -42],
  });

type MarkerData = {
  id: number;
  position: [number, number];
  title: string;
  oldPrice: string;
  price: string;
  address: string;
  image: string;
};
export default function MainMap() {
  const center: [number, number] = [36.5948, 53.0625];

  const markers: MarkerData[] = [
    {
      id: 1,
      position: [36.5922, 53.0641],
      title: "آپارتمان لوکس زعفرانیه",
      oldPrice: "۵۰٬۵۰۰٬۰۰۰ تومان ",
      price: "۱۵٬۵۰۰٬۰۰۰ تومان ",
      address: "تهران، زعفرانیه، میدان انقلاب",
      image:
        "https://images.adsttc.com/media/images/6636/c29f/c734/945c/42c2/96ed/large_jpg/architecture-as-a-product-what-makes-a-building-worth-repeating_1.jpg?1714864858",
    },
    {
      id: 2,
      position: [36.5962, 53.0621],
      title: "آپارتمان لوکس زعفرانیه",
      price: "۱۵٬۵۰۰٬۰۰۰ تومان ",
      oldPrice: "۵۰٬۵۰۰٬۰۰۰ تومان",
      image:
        "https://airfixture.com/hubfs/Imported_Blog_Media/Designing-a-high-rise-building-1.jpg",
      address: "تهران، زعفرانیه، میدان انقلاب",
    },
    {
      id: 3,
      position: [35.6962, 51.4621],
      title: "آپارتمان لوکس زعفرانیه",
      price: "۱۵٬۵۰۰٬۰۰۰ تومان ",
      oldPrice: "۵۰٬۵۰۰٬۰۰۰ تومان",
      image:
        "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg",
      address: "تهران، زعفرانیه، میدان انقلاب",
    },
  ];

  return (
    <MapContainer
      className="rounded-r-4xl"
      center={center}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={createMarkerIcon(marker.image)}
        >
          <Popup className="rounded-4xl  w-80 bg-blue-500 relative top-[-75px] right-[15px] ">
            <div dir="rtl" className="text-right text-white flex gap-2">
              <img
                src={marker.image}
                className="size-8 bg-gray-950 rounded-full"
              ></img>
              <div>
                <div className="flex gap-16 w-full">
                  <strong className="text-base  font-bold">
                    {marker.title}
                  </strong>
                  <Link href="/">
                    <div className="flex items-center">
                      <div className="text-white text-base"> بیشتر</div>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 15C12.5 15 7.5 11.3176 7.5 10C7.5 8.68233 12.5 5 12.5 5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-4">
                    <MapSvg />
                  </div>
                  <div className=" text-sm ">{marker.address}</div>
                </div>
                <div className="flex pt-2  items-end">
                  <div className="relative inline-block">
                    <span className="text-sm font-bold ">
                      {marker.oldPrice}
                    </span>

                    <div className="absolute inset-0 w-full h-full">
                      <div className="w-full h-[1px] bg-red-500 rotate-[-10deg] absolute top-1/2 left-0"></div>
                    </div>
                    <span className="font-bold  px-1">/</span>
                  </div>
                  <span className="text-sm  font-bold ">{marker.price}</span>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
