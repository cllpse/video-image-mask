import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const styles = {
  recipeVideoBackgroundContainer: recipe({
    base: {
      display: "flex",
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 0,
      opacity: 0,
      filter: "blur(30px)",
      transition: "filter, opacity 0.25s cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    },

    variants: {
      contentLoaded: {
        true: {
          opacity: 1,
          filter: "blur(0px)",
        },
      },
    },
  }),

  styleImage: style({
    display: "flex",
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
    zIndex: 0,
  }),

  styleFallbackBackgroundFallback: style({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 1,
  }),

  styleVideoBackgroundFallback: style({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 1,
  }),

  styleFallbackScrim: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    content: "",
    background:
      "linear-gradient(black 0%, transparent 33%)",
    zIndex: 2,
    mixBlendMode: "multiply",
    opacity: 0.75,
  }),

  styleVideoBackgroundPlayer: style({
    display: "flex",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    pointerEvents: "none",
    userSelect: "none",
    zIndex: 3,
  }),

  styleVideoBackgroundScrim: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    content: "",
    background:
      "linear-gradient(cyan 50%, transparent 50%)",
    zIndex: 4,
    opacity: 0.5,
  }),

  styleVideoBackgroundContent: style({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  }),
}
