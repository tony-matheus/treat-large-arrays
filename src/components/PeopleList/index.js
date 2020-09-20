import React, { useEffect, useState } from 'react'
import _, { debounce } from 'lodash'
import useSWR from 'swr'
import { useStore } from '../../stores/store'
import { usersFetch } from '../../config/api'
import { Spin } from '../../_UI/Loadings/Spin'
import { BlankState } from '../../_UI/BlankState'
import { List, AutoSizer } from "react-virtualized";
import { Container, NumberBlock, Wrapper } from './styles'
import { PersonItem } from './PersonItem'

export const PeopleList = () => {
  const { search } = useStore()
  const [people, setPeople] = useState([])

  const { data: personRequest, error } = useSWR('/users', usersFetch, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })

  const searchTerm = (term) => {
    if (personRequest) {
      const filteredItems = _.filter(people, (person) => {
        const response = person.name.toLowerCase().indexOf(term) > -1 || String(person.age).toLowerCase().indexOf(term) > -1
        return response
      })
      console.log(filteredItems)
      setPeople(filteredItems)
    }
  }

  const debounced = debounce((term) => searchTerm(term.toLowerCase()), 500)

  useEffect(() => {
    if (search) {
      debounced(search)
    } else if (personRequest) {
      setPeople(personRequest.data.data)
    }
  }, [search])


  useEffect(() => {
    if (personRequest) {
      setPeople(personRequest.data.data)
    }
  }, [personRequest])


  const renderRow = ({ index, key, style }) => (
    <div key={key} style={style}>
      <PersonItem id={index} {...people[index]} />
    </div>
  )

  if (!personRequest)
    return (
      <Wrapper>
        <Spin />
      </Wrapper>
    )

  if (error || people.length === 0)
    return (
      <Wrapper>
        <BlankState title={error ? 'Ocorreu um error': 'Nenhuma pessoa encontrada com sua pesquisa.'} />
      </Wrapper>
    )

  return (
    <Container>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowRenderer={renderRow}
            rowCount={people.length}
            rowHeight={70}
          />
        )}
      </AutoSizer>
      <NumberBlock>
        Resultados: {people.length}
      </NumberBlock>
    </Container>
  )
}
