import {getMediaURL} from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getMediaURL(media.url)
    : media.url;
  return imageUrl;
}
