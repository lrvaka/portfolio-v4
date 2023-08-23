import { getRecentlyPlayed } from "@/lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  const recentlyPlayed = items.slice(0, 10).map((track: any) => ({
    artist: track.track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.track.external_urls.spotify,
    title: track.track.name,
    image: track.track.album.images[0].url,
  }));

  return res.status(200).json({ recentlyPlayed });
};

export default handler;
