import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadPhoto = async (file) => {
  const storageRef = ref(storage, `photos/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
