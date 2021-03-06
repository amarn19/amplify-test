import React, { Component } from 'react';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import { shopper_dashboard_title, shopper_dashboard_text,user } from '../../constants';
import { connect } from 'react-redux';
const { Title } = Typography;

const mapStateToProps = (state) => { 
    return {
    data: state.data===undefined?user:state.data,
    loading:state.loading,
    error:state.error
    }
};
class SODashboard extends Component {
    
    render() {
        console.log(this.props.data);
        return (
            <div>
                <div className="header">
                    <Title level={3} >{shopper_dashboard_title}</Title>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={8}>
                        <div className="card gn">
                            <p>{shopper_dashboard_text[0]}</p>
                            <p className="txt-center" >{this.props.data.dashboard.total_visits}</p></div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="card bl">
                            <p>{shopper_dashboard_text[1]}</p>
                            <p className="txt-center">{this.props.data.dashboard.upcoming_visits}</p></div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="card rd">
                            <p>{shopper_dashboard_text[2]}</p>
                            <p className="txt-center">{this.props.data.dashboard.cancelled_visits}</p></div>
                    </Col>
                </Row>
                <div className="pad" />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24}>
                        <div className="card wht">
                            <p>{shopper_dashboard_text[2]}</p>
                            {this.props.data.dashboard.messages.length > 0
                                &&
                                this.props.dashboard.messages.map(msg => (<p >{msg}</p>))}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default connect(mapStateToProps)(SODashboard);
