import React, { useState } from 'react'
import { SearchForm } from '../../components/SearchForm'
import { PeopleList } from '../../components/PeopleList'
import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <SearchForm />
      <PeopleList />
    </Container>
  )
}

export default Home
