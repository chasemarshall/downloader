export function isCompilationAlbum(
  albumArtist: string | null | undefined,
  albumType?: string | null,
): boolean {
  if (albumType?.trim().toLowerCase() === "compilation") return true;
  if (!albumArtist) return false;

  return albumArtist
    .split(/[;,]/)
    .some((artist) => artist.trim().toLowerCase() === "various artists");
}
