import { doc, getDoc } from 'firebase/firestore'
import { db } from './firebase'
import { PortfolioData } from '../types'

export async function getPortfolioData() {
  try {
    const docRef = doc(db, 'data-page', 'francissverissimo')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as PortfolioData
    }
  } catch (error) {
    console.error(error)
  }
}
