import React from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

import { firebaseConfig } from '../../utils/util'

import * as Styled from "./styled"
import Header from '../../components/Header'

export function Home() {
  return (
    <Styled.Container>
      <Header />
      <p>teste</p>
    </Styled.Container>
  )
}
