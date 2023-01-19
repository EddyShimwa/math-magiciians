import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Calculator from './components/Calculator';
import Layout from './components/interface/Layout';
import Home from './Pages/Home';
import QuotePage from './Pages/quote';
import CalculatorPage from './Pages/calculatorPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </Layout>
    );
  }
}
export default App;
