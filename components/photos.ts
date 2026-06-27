/**
 * Verified Unsplash photography for NextGen Tennis.
 * Each `id` is the `photo-…` path on images.unsplash.com (confirmed 200 OK).
 * Alt text is written as voice, not filler.
 */
export type Shot = {
  id: string;
  alt: string;
  /** focal point for object-position when cropped */
  position?: string;
};

export const PHOTOS = {
  heroWall: {
    id: "photo-1635620634574-2fa867bdaf34",
    alt: "A young player chases down a ball alone against a tall green handball wall, friends watching from the shade",
    position: "70% 50%",
  },
  overhead: {
    id: "photo-1545151414-8a948e1ea54f",
    alt: "Overhead view of a player loading up a backhand, long shadow stretching across a green hard court",
    position: "50% 35%",
  },
  indoorCoaching: {
    id: "photo-1660463529151-68497641aa96",
    alt: "A junior at an indoor academy waits with racquet ready while a coach feeds balls from a basket",
    position: "50% 40%",
  },
  girlRacquet: {
    id: "photo-1723980856085-8f8e725329a7",
    alt: "A young girl grips her racquet two-handed, focused, on a sunlit court",
    position: "50% 30%",
  },
  ballsCourt: {
    id: "photo-1723533653857-48df78f57254",
    alt: "Dozens of practice balls scattered across a court mid-session",
    position: "50% 60%",
  },
  fence: {
    id: "photo-1645093366794-34ff5ac19b50",
    alt: "A small child watches an older player train through the court fence",
    position: "50% 40%",
  },
} satisfies Record<string, Shot>;

export function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}
