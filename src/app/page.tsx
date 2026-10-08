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
    <>
      <div style={{ display: "flex", width: "100%", height: "50dvh" }}>
        {loaded ? (
          <VideoImageMask
            videoUrl="./video-1.mp4"
            videoBlur={false}
            videoScrim={false}
            fallbackUrl="./image-1.jpg"
            fallbackBlur={false}
            fallbackScrim={true}
            maskUrl="./mask-1.svg"

          />
        ) : <></>}

      </div>

      <div style={{ display: "flex", width: "100%", height: "50dvh" }}>
        {loaded ? (
          <VideoImageMask
            videoUrl="./video-1.mp4"
            videoBlur={true}
            videoScrim={false}
            fallbackUrl="./image-2.jpg"
            fallbackBlur={false}
            fallbackScrim={true}
            maskUrl="./mask-2.svg"

          />
        ) : <></>}

      </div>

      <div style={{ display: "flex", width: "100%", height: "50dvh" }}>
        {loaded ? (
          <VideoImageMask
            videoUrl="./video-1.mp4"
            videoBlur={true}
            videoScrim={true}
            fallbackUrl="./image-1.jpg"
            fallbackBlur={true}
            fallbackScrim={true}
            maskUrl="./mask-2.svg"

          />
        ) : <></>}
      </div>
    </>
  );
}
