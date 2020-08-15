import React, { Component } from "react";
import * as actions from "./../../actions/service.action";
import { httpClient } from "./../../utils/HttpClient";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _, { result } from "lodash";
import Sweetalerts from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Table, Tag, Space, Popconfirm } from "antd";
import "antd/dist/antd.css";
import "./service.scss";


const mySweetAlerts = withReactContent(Sweetalerts);


class Service extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        result: [],
        pagination: {
          current: 1,
          pageSize: 10,
        },
        loading: false,
      };
    }
  }

async  componentDidMount() {
  httpClient.get('http://localhost:8085/api/v1/service/service/').then(e => this.setState({result:e.data}))
  // this.debounceSearch = _.debounce(this.props.getServiceByKeyword, 500);
  }
onDelete =  async (id) => {
    console.log(id);
    await httpClient.delete(`http://localhost:8085/api/v1/service/service/${id}`)
    await this.componentDidMount()

  }

  
    render() {
      const columns = [
        {
          title: "ID",
          dataIndex: "id",
        },
        {
          title: "รหัสรายการบริการ",
          // dataIndex: "sv_name",
        },
        {
          title: "ชื่อรายการ",
          dataIndex: "sv_name",
        },
        {
          title: "Price",
          dataIndex: "sv_price",
        },
        {
          title: "Member",
          dataIndex: "sv_member",
        },
        {
          title: "Detail",
          dataIndex: "sv_detail",
        },
        {
          title: 'Action',
          render: (text , record) => (
                  <Space size="middle">
                    <a onClick={()=> this.onDelete(record.id)}>
                      Delete
                    </a>
                  </Space>
                  
              
          ),
        },
      ];
    const { pagination } = this.props;
    return (
      <div className="content-wrapper">
        <div className="boxContent">
          <div className="contentService">
            <Table  
              // {...this.props}
              dataSource={this.state.result} 
              columns={columns} 
              pagination={pagination}
              >
              </Table>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = ({ serviceReducer }) => ({
  serviceReducer,
});

const mapDispatchToProps = {
  ...actions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Service);
