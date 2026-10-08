"use client"

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { styles } from "./styles.css";

export default function VideoImageMask({
  videoUrl,
  videoBlur,
  fallbackUrl,
  fallbackBlur,
  maskUrl,
  videoScrim,
  fallbackScrim,
  children
}: {
  videoUrl: string;
  videoBlur?: boolean;
  fallbackUrl?: string;
  fallbackBlur?: boolean;
  maskUrl?: string;
  videoScrim?: boolean;
  fallbackScrim?: boolean;
  children?: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const [videoReady, setVideoReady] = useState(false)
  const [fallbackReady, setFallbackReady] = useState(false)
  const [fallbackPath, setFallbackPath] = useState<string | undefined>(undefined)
  const [styleFallback, setStyleFallback] = useState({})
  const [styleMask, setStyleMask] = useState({})

  useEffect(() => {
    if (fallbackUrl) {
      setFallbackPath(fallbackUrl);

      setStyleFallback({
        backgroundImage: `url(${fallbackUrl})`,
        filter: fallbackBlur ? "blur(30px)" : "",
      });
    } else {
      setFallbackReady(true);
    }
  }, [fallbackUrl, fallbackBlur]);

  useEffect(() => {
    setStyleMask({
      maskImage: `url(${maskUrl})`,
      maskPosition: "center",
      maskRepeat: "contain",
      maskSize: "cover",
      WebkitMaskImage: `url(${maskUrl})`,
      WebkitMaskPosition: "center",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      filter: videoBlur ? "blur(30px)" : "",
    });
  }, [maskUrl, videoBlur]);

  return (
    <div
      ref={ref}
      className={styles.recipeVideoBackgroundContainer({
        contentLoaded: videoReady && fallbackReady,
      })}
      style={{
        visibility: inView ? "visible" : "hidden",
      }}
    >
      <div
        className={styles.styleFallbackBackgroundFallback}
        style={styleFallback}
      />

      {fallbackScrim && (
        <div className={styles.styleFallbackScrim} />
      )}

      {fallbackPath && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={fallbackPath}
          className={styles.styleImage}
          onLoad={() => setFallbackReady(true)}
          alt=""
        />
      )}

      <video
        className={styles.styleVideoBackgroundPlayer}
        muted
        preload="true"
        autoPlay
        playsInline
        loop
        style={styleMask}
        onPlay={() => setVideoReady(true)}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {videoScrim && (
        <div className={styles.styleVideoBackgroundScrim} style={styleMask} />
      )}

      <div className={styles.styleVideoBackgroundContent}>{children}</div>
    </div>
  );
}
