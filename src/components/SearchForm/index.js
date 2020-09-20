import React, { useContext } from 'react'
import { useStore } from '../../stores/store'
import { Header } from '../../_UI/Header';
import { Input } from '../../_UI/Input'
import { Container, InputWrapper, Label, Wrapper } from './styles'

export const SearchForm = () => {
  const { search, setSearch } = useStore()


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Header>
      <Container>
        <Wrapper>
          <InputWrapper>
            <Label>
              Busca
            </Label>
            <Input
              name='search'
              placeholder='Digite para pesquisar'
              value={search}
              onChange={handleChange}
            />
          </InputWrapper>
        </Wrapper>
      </Container>
    </Header>
  )
}
