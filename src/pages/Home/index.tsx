import React from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

import { firebaseConfig } from '../../utils/util'

import * as Styled from "./styled"
import Header from '../../components/Header'

export function Home() {
  const [data, setData] = React.useState<any>('')

  React.useEffect(() => {
    get().catch((e) => { console.log(e) })
  }, [])

  async function get() {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const collec = collection(db, 'Products')
    const getCollec = await getDocs(collec)
    const list = getCollec.docs.map(doc => doc.data())

    setData(JSON.stringify(list))
  }
  console.log(data)

  return (
    <Styled.Container>
      <Header />
    </Styled.Container>
  )
}
