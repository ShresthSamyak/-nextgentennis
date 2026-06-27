import Image from "next/image";
import { unsplash, type Shot as ShotData } from "./photos";

type ShotProps = {
  shot: ShotData;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** subtle zoom on hover when inside a `group` */
  zoom?: boolean;
};

/** Fill-style image for a positioned/sized parent. Parent must be `relative`. */
export default function Shot({
  shot,
  className = "",
  sizes = "100vw",
  priority = false,
  zoom = false,
}: ShotProps) {
  return (
    <Image
      src={unsplash(shot.id)}
      alt={shot.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${
        zoom ? "transition-transform duration-700 ease-out group-hover:scale-105" : ""
      } ${className}`}
      style={{ objectPosition: shot.position ?? "50% 50%" }}
    />
  );
}
