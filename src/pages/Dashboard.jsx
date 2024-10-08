import { css } from '@emotion/css'
import React from 'react'
import Text from '../atoms/Text'
import { useSelector } from 'react-redux'
import SummaryCard from '../molecules/SummaryCard'
import Row from '../atoms/layout/Row'
import Col from '../atoms/layout/Col'
import BarChart from '../atoms/charts/BarChart'
import LineChart from '../atoms/charts/LineChart'
import RevenueByLocation from '../atoms/RevenueByLocation'
import Table from '../atoms/Table'
import Donut from '../atoms/Donut'
import RightSidebar from '../layouts/RightSidebar'
import Header from '../layouts/Header'
import ResponsiveDiv from '../molecules/ResponsiveDiv'
import Breadcrumb from '../atoms/Breadcrumb'

const data = [
    {
        title: "Dashboards",
        id: "qwerty1"
    },
    {
        title: "Default",
        id: "qwerty2"
    }
]

const Dashboard = () => {
    const summaryCardData = useSelector(state => state.orderSummaryData)
    return (
        <Row gutter={0}>
            <Col xl={18} xs={24} sm={17} lg={18} xxl={18} md={17}>
                <Header />
                <main className={css`padding: 20px 28px`}>
                <ResponsiveDiv className={css`margin-bottom: 20px`}><Breadcrumb data={data} /></ResponsiveDiv>
                    <Text fontStyleGuide="heading2" mb="lg">eCommerce</Text>
                    {/* 1st Row */}
                    <Row gutter={[0, 12]} justify={'space-between'}>
                        <Col  xl={11} xs={24} sm={24} lg={11} xxl={11} md={24}>
                            <Row gutter={[0, 12]} justify={'space-between'}>
                                {
                                    summaryCardData.map((datum, index) => {
                                        return <Col  xl={11} xs={24} sm={11} lg={11} xxl={11} md={11} key={index}>
                                            <SummaryCard {...datum} key={datum.title} />
                                        </Col>
                                    })
                                }
                            </Row>
                        </Col>
                        <Col Col  xl={12} xs={24} sm={24} lg={9} xxl={11} md={24}> 
                            <div className={css`background: #F7F9FB; border-radius: 16px; padding: 24px`}>
                                <BarChart />
                            </div>

                        </Col>

                        <Col xl={11} xs={24} sm={24} lg={11} xxl={11} md={12}>
                            <LineChart />
                        </Col>
                        <Col   xl={11} xs={24} sm={24} lg={11} xxl={11} md={12}>
                            <RevenueByLocation />
                        </Col>
                        <Col xl={11} xs={24} sm={24} lg={9} xxl={11} md={12}>
                            <Table />
                        </Col>
                        <Col  xl={11} xs={24} sm={24} lg={9} xxl={11} md={12}>
                            <Donut />
                        </Col>
                    </Row>
                </main>
            </Col>
            <Col xl={4} xs={24} sm={4} lg={4} xxl={4} md={4}>
                <RightSidebar />
            </Col>
        </Row>
    )
}

export default Dashboard