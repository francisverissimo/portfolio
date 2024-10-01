import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from './firebase'

export async function getAboutImageFromStorage() {
  const imageAboutRef = ref(storage, 'me.png')

  try {
    return await getDownloadURL(imageAboutRef)
  } catch (error) {
    console.error(error)
  }
}
