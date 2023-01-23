import { createAvatar } from "@dicebear/core";
import { micah } from "@dicebear/collection";

export const getUserAvatar = async (userName: string) => {
  const avatar = createAvatar(micah, {
    seed: userName,
    backgroundColor: ["#eae7e2"],
  });
  return await avatar.toDataUri();
};
