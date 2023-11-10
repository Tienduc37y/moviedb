import React from 'react'
import "./style.scss"

import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/detailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'
const Details = () => {
  const {mediaType, id} = useParams()
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data : credits, loading : creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)
  return (
    <>
      <DetailsBanner video={data?.results?.[0]} crew = {credits?.crew}></DetailsBanner>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading}></VideosSection>
      <Similar mediaType={mediaType} id={id}></Similar>
      <Recommendation mediaType={mediaType} id={id}></Recommendation>
    </>
  )
}

export default Details