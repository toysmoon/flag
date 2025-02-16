export function formatDateDirectory(updatedAt: string) {
  const splittedDate = updatedAt.split("-");
  return `${splittedDate[1]}${splittedDate[2]}`;
}
