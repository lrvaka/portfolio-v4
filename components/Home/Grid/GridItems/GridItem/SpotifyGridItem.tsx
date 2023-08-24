import { useEffect } from "react";
import useSWR from "swr";
import spotifyLogo from "@/public/spotify.png";
import Image from "next/image";

const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
  const res = await fetch(...args);
  return res.json();
};

const SpotifyGridItem = () => {
  const { data, error } = useSWR("/api/recently-played", fetcher);

  useEffect(() => {
    console.log(data || error);
  }, [data, error]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className=" px-11 py-9 flex flex-col justify-between py-2 h-full">
      <Image src={spotifyLogo} alt="spotify logo" width={75} />
      <div>
        <h2 className="flex text-green-600 items-center gap-2">
          <span className="flex gap-1 rotate-180">
            <span className="bg-green-600 w-1 h-4 rounded-sm animate-[wiggle_1s_ease-in-out_infinite]"></span>
            <span className="bg-green-600 w-1 h-4 rounded-sm animate-[wiggle_1.8s_ease-in-out_infinite]"></span>
            <span className="bg-green-600 w-1 h-4 rounded-sm animate-[wiggle_1.3s_ease-in-out_infinite]"></span>
          </span>
          Last played
        </h2>
        <a
          href={data.recentlyPlayed[0].songUrl}
          className=" cursor-pointer leading-none hover:text-gray-500"
        >
          <p className="truncate">
            <span className=" font-bold text-xl">
              {data.recentlyPlayed[0].title}{" "}
            </span>
            <br />
            <span className="">{data.recentlyPlayed[0].artist}</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default SpotifyGridItem;
