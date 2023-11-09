import React from 'react'
import "./style.scss"

import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/detailsBanner'

const Details = () => {
  const {mediaType, id} = useParams()
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data : credits, loading : creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)
  return (
    <>
      <DetailsBanner video={data?.results?.[0]} crew = {credits?.crew}></DetailsBanner>
    </>
  )
}

export default Details