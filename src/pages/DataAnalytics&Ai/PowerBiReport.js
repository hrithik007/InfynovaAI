import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faChartBar, faCogs, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './PowerBIReport.css'; // Updated responsive and professional styling

function PowerBIReport() {
  return (
    <div className="power-bi-page">
      <header className="power-bi-header">
        <h1>Power BI Report</h1>
        <p>
          Unlock the potential of your data with Power BI, a powerful business intelligence tool
          designed to deliver interactive reports and real-time insights.
        </p>
      </header>

      <section className="power-bi-services">
        <h2>Services Offered by Power BI</h2>
        <div className="services-list">
          <div className="service-item">
            <img
              src="/img/dataAnalytics/dash2.png"
              alt="Interactive Dashboards"
              className="service-image"
            />
            <h3>Interactive Dashboards</h3>
            <p>
              Create visually stunning dashboards that display real-time metrics and KPIs. Monitor
              your company's performance at a glance with easy-to-navigate visuals.
            </p>
          </div>

          <div className="service-item">
            <img
              src="/img/dataAnalytics/finance.jpg"
              alt="Financial Analysis"
              className="service-image"
            />
            <h3>Comprehensive Financial Analysis</h3>
            <p>
              Analyze your company's net profit, revenue trends, and cost structures. Power BI
              enables you to dig deeper into your financial data to make informed decisions.
            </p>
          </div>

          <div className="service-item">
            <img
              src="/img/dataAnalytics/data.jpg"
              alt="Data Forecasting"
              className="service-image"
            />
            <h3>Data Modeling and Forecasting</h3>
            <p>
              Leverage advanced analytics to model your business data and forecast future trends.
              Predict sales growth, customer demand, and market trends with ease.
            </p>
          </div>

          <div className="service-item">
            <img
              src="/img/dataAnalytics/excel.jpg"
              alt="Seamless Integration"
              className="service-image"
            />
            <h3>Seamless Integration</h3>
            <p>
              Integrate Power BI with various data sources such as Excel, SQL Server, and cloud-based
              platforms. Consolidate all your business data into a single, unified platform for
              better analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="use-case-section">
        <h2>How Power BI Can Transform Your Business</h2>
        <div className="use-case-content">
          <p>
            With Power BI, you can drive smarter decision-making, gain actionable insights, and boost
            productivity across all departments. From visualizing your sales performance to understanding
            your operational efficiency, Power BI offers endless possibilities.
          </p>
        </div>
      </section>

      <section className="data-process-section">
        <h2>Power BI Data Process Flow</h2>
        <div className="process-flow">
          <div className="process-step">
            <FontAwesomeIcon icon={faFileExcel} size="3x" className="process-icon" />
            <p>Import Data (Excel, SQL, etc.)</p>
          </div>
          <FontAwesomeIcon icon={faCogs} size="2x" className="process-arrow" />
          <div className="process-step">
            <FontAwesomeIcon icon={faChartBar} size="3x" className="process-icon" />
            <p>Data Analysis</p>
          </div>
          <FontAwesomeIcon icon={faCogs} size="2x" className="process-arrow" />
          <div className="process-step">
            <FontAwesomeIcon icon={faChartLine} size="3x" className="process-icon" />
            <p>Modeling & Forecasting</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PowerBIReport;
