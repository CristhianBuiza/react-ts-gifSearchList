export interface RootObject {
  data: Datum[];
  meta: Meta;
  pagination: Pagination;
}

export interface Datum {
  analytics: Analytics;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: Images;
  import_datetime: Date;
  is_sticker: number;
  rating: Rating;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: Type;
  url: string;
  user?: User;
  username: Username;
}

export interface Analytics {
  onclick: Onclick;
  onload: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  "480w_still": The480_WStill;
  "4k"?: The4_K;
  downsized: The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  downsized_small: The4_K;
  downsized_still: The480_WStill;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_still: The480_WStill;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
  fixed_width_small_still: The480_WStill;
  fixed_width_still: The480_WStill;
  hd?: The4_K;
  looping: Looping;
  original: FixedHeight;
  original_mp4: The4_K;
  original_still: The480_WStill;
  preview: The4_K;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
}

export interface The480_WStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface The4_K {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface FixedHeight {
  frames?: string;
  hash?: string;
  height: string;
  mp4?: string;
  mp4_size?: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface Looping {
  mp4: string;
  mp4_size: string;
}

export enum Rating {
  G = "g",
  PG = "pg",
  PG13 = "pg-13",
}

export enum Type {
  GIF = "gif",
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  description: string;
  display_name: string;
  instagram_url: string;
  is_verified: boolean;
  profile_url: string;
  username: Username;
  website_url: string;
}

export enum Username {
  ColoreG = "colore_g",
  Empty = "",
}

export interface Meta {
  msg: string;
  response_id: string;
  status: number;
}

export interface Pagination {
  count: number;
  offset: number;
  total_count: number;
}
