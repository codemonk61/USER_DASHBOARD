import { Global, css } from '@emotion/react';
import Row from './atoms/layout/Row';
import Col from './atoms/layout/Col';
import LeftSidebar from './layouts/LeftSidebar';
import Header from './layouts/Header';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import { store } from './redux/redux';
import OrderList from './pages/OrderList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter'
  }
`;



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Global styles={globalStyles} />
        <Row gutter={0}>
          <Col xl={4} xs={0} sm={0} lg={4} xxl={4} md={0}>
            <LeftSidebar />
          </Col>
          <Col xl={20} xs={0} sm={12} lg={20} xxl={24} md={24}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orderlist" element={<OrderList />} />
          </Routes>
          </Col>
        </Row>
      </Router>
    </Provider>
  );
}

export default App;
