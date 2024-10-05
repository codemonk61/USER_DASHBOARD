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


const Dashboard = () => {
    const summaryCardData = useSelector(state => state.orderSummaryData)
    return (
        <Row gutter={0}>
            <Col xl={19} xs={24} sm={24} lg={19} xxl={19} md={24}>
                <Header />
                <main className={css`padding: 20px 28px`}>
                    <Text fontStyleGuide="heading2" mb="lg">eCommerce</Text>
                    {/* 1st Row */}
                    <Row gutter={[8, 0]} justify={'space-between'} align={'stretch'}>
                        <Col span={11}>
                            <Row gutter={[0, 12]} justify={'space-between'}>
                                {
                                    summaryCardData.map((datum) => {
                                        return <Col span={11}>
                                            <SummaryCard {...datum} key={datum.title} />
                                        </Col>
                                    })
                                }
                            </Row>
                        </Col>
                        <Col span={12} >
                            <div className={css`background: #F7F9FB; border-radius: 16px; padding: 24px`}>
                                <BarChart />
                            </div>

                        </Col>

                        <Col span={14}>
                            <LineChart />
                        </Col>
                        <Col span={9}>
                            <RevenueByLocation />
                        </Col>
                        <Col span={14}>
                            <Table />
                        </Col>
                        <Col span={9}>
                            <Donut />
                        </Col>
                    </Row>
                </main>
            </Col>
            <Col xl={4} xs={24} sm={24} lg={4} xxl={4} md={24}>
                <RightSidebar />
            </Col>
        </Row>
    )
}

export default Dashboard