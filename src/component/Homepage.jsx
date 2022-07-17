import React from 'react'
import millify from "millify"  
import {Typography, Row, Col, Statistic} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import Loader from './Loader'


const {Title} = Typography

const Homepage = () => {
  const{data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) return <Loader />;
  console.log(data)
  
  return (
    <>
    <Title level={2} className="heading">Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={data?.data?.stats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={data?.data?.stats.totalExchanges}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(data?.data?.stats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24th Volume" value={millify(data?.data?.stats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={data?.data?.stats.totalMarkets}/></Col>     
    </Row>

    <div className="home-heading-container">
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
      <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/>

    <div className="home-heading-container">
      <Title level={2} className="home-title">Latest Crypto News</Title>
      <Title level={3} className="show-more"><Link to='/news'>Show More</Link></Title>
    </div>
    <News simplified/>
    
    </>
  )
}

export default Homepage