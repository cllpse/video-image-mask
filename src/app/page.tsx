"use client"

import VideoImageMask from "@/components/VideoImageMask";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)

  }, [])

  return (
    <div style={{ display: "flex", width: "100%", height: "50dvh" }}>
      {loaded ? (
        <VideoImageMask
          videoUrl="./video-1.mp4"
          videoBlur={true}
          fallbackUrl="./image-2.jpg"
          fallbackBlur={false}
          maskUrl="./mask-1.svg"
          scrim={true}
        />
      ) : <></>}

    </div>
  );
}
