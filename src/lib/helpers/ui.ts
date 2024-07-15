export const emailToInitials = (mail: string) => {
  const frags = mail
    .split("@")[0]
    .split(".")
    .map((elem) => elem.charAt(0))
    .join("");
  return frags;
};
