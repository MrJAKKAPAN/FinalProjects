import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";

import { Bar } from "react-chartjs-2";
import moment from "moment";
import {
  Tabs,
  List,
  Tag
} from "antd";
import InfiniteScroll from 'react-infinite-scroller';


const { TabPane } = Tabs;
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasMore: true,
// Revenue

      GetRevenue:[],
      GetRevenuing:[],
      January:[],
      February:[],
      March:[],
      April:[],
      May:[],
      June:[],
      July:[],
      August:[],
      September:[],
      October:[],
      November:[],
      December:[],
// Expenditure
      GetExpenditure:[],
      GetExpendituring:[],
      ExJanuary:[],
      ExFebruary:[],
      ExMarch:[],
      ExApril:[],
      ExMay:[],
      ExJune:[],
      ExJuly:[],
      ExAugust:[],
      ExSeptember:[],
      ExOctober:[],
      ExNovember:[],
      ExDecember:[],
      

      Type: "bar",
      total: 0,
      Expenditure:[],
      Revenues:[],
   }
  }

  componentDidMount = async() => {
    // Revenues
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/revenue")
        .then((e) => this.setState({GetRevenue: e.data}));
        console.log(this.state)

      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/revenuelimit/")
        .then((e) => this.setState({GetRevenuing: e.data}));
        
    // month
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/January")
        .then((e) => this.setState({January: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/February")
        .then((e) => this.setState({February: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/March")
        .then((e) => this.setState({March: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/April")
        .then((e) => this.setState({April: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/May")
        .then((e) => this.setState({May: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/June")
        .then((e) => this.setState({June: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/July")
        .then((e) => this.setState({July: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/August")
        .then((e) => this.setState({August: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/September")
        .then((e) => this.setState({September: e.data}));
      await httpClient
        .get("http://localhost:8085/api/v1/revenue/October")
        .then((e) => this.setState({October: e.data }));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/November")
        .then((e) => this.setState({November: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/revenue/December")
        .then((e) => this.setState({December: e.data}));

        // expenditure
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/expenditure")
        .then((e) => this.setState({GetExpenditure: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/expenditures")
        .then((e) => this.setState({GetExpendituring: e.data}));
        // month
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/January")
        .then((e) => this.setState({ExJanuary: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/February")
        .then((e) => this.setState({ExFebruary: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/March")
        .then((e) => this.setState({ExMarch: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/April")
        .then((e) => this.setState({ExApril: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/May")
        .then((e) => this.setState({ExMay: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/June")
        .then((e) => this.setState({ExJune: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/July")
        .then((e) => this.setState({ExJuly: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/August")
        .then((e) => this.setState({ExAugust: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/September")
        .then((e) => this.setState({ExSeptember: e.data}));
      await httpClient
        .get("http://localhost:8085/api/v1/expenditure/October")
        .then((e) => this.setState({ExOctober: e.data }));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/November")
        .then((e) => this.setState({ExNovember: e.data}));
      await httpClient
        .get ("http://localhost:8085/api/v1/expenditure/December")
        .then((e) => this.setState({ExDecember: e.data}));
  }


  getYear() {
    return new Date().getFullYear();
}
  render() {
    console.log(this.state)
      // Revenue
      const { January, February, March, April, May, June, July, August, September, October, November, December, Revenues, GetRevenue, GetRevenuing } = this.state;
      
      const GetRevenues =  GetRevenue.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Januarys =  January.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Februarys =  February.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Marchs =  March.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Aprils =  April.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Mays =  May.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Junes =  June.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Julys =  July.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Augusts =  August.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Septembers =  September.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Octobers =  October.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Novembers =  November.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      const Decembers =  December.reduce(( sum,{price, quantity}) =>  sum + price * quantity ,0);
      
      Revenues.push(Januarys)
      Revenues.push(Februarys)
      Revenues.push(Marchs)
      Revenues.push(Aprils)
      Revenues.push(Mays)
      Revenues.push(Junes)
      Revenues.push(Julys)
      Revenues.push(Augusts)
      Revenues.push(Septembers)
      Revenues.push(Octobers)
      Revenues.push(Novembers)
      Revenues.push(Decembers)

    // const Dates = new Date(this.Revenues())
    // console.log(Dates.getFullYear())


      // Expenditure
      const { ExJanuary, ExFebruary, ExMarch, ExApril, ExMay, ExJune, ExJuly, ExAugust, ExSeptember, ExOctober, ExNovember, ExDecember, Expenditure, GetExpenditure, GetExpendituring } = this.state;
      
      const GetExpenditures = GetExpenditure.reduce((sum, { ex_price }) => sum + ex_price ,0);
      const ExJanuarys =  ExJanuary.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExFebruarys =  ExFebruary.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExMarchs =  ExMarch.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExAprils =  ExApril.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExMays =  ExMay.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExJunes =  ExJune.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExJulys =  ExJuly.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExAugusts =  ExAugust.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExSeptembers =  ExSeptember.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExOctobers =  ExOctober.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExNovembers =  ExNovember.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);
      const ExDecembers =  ExDecember.reduce(( sum,{ex_price}) =>  sum + ex_price  ,0);

      Expenditure.push(ExJanuarys)
      Expenditure.push(ExFebruarys)
      Expenditure.push(ExMarchs)
      Expenditure.push(ExAprils)
      Expenditure.push(ExMays)
      Expenditure.push(ExJunes)
      Expenditure.push(ExJulys)
      Expenditure.push(ExAugusts)
      Expenditure.push(ExSeptembers)
      Expenditure.push(ExOctobers)
      Expenditure.push(ExNovembers)
      Expenditure.push(ExDecembers)
      
      
    console.log(GetExpenditure, GetExpendituring)
    const data = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'],
      datasets: [
        {
          label: 'รายรับ',
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ Januarys ,
                  Februarys,
                  Marchs,
                  Aprils,
                  Mays,
                  Junes,
                  Julys,
                  Augusts,
                  Septembers,
                  Octobers,
                  Novembers,
                  Decembers
                ]
        },
        {
          label: 'รายจ่าย',
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'red',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ 
            ExJanuarys ,
            ExFebruarys,
            ExMarchs,
            ExAprils,
            ExMays,
            ExJunes,
            ExJulys,
            ExAugusts,
            ExSeptembers,
            ExOctobers,
            ExNovembers,
            ExDecembers
          ]
        } 
      ]
    };
    const chartConfig = {
      responsive: true,
      scales: {
        yAxes: [{
          // stacked: true,
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          ticks: {
            callback: function (value, index, values) {
              return value + ' ฿.';
            },
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        }],
        xAxes: [{
          // stacked: true,
          ticks: {
          },
          gridLines: {
            offsetGridLines: false
          }
        }],
      }
    };
    const tableExpenditrue = GetExpenditure.map((expenditure) => (
      <tr key={expenditure.id}>
        <td>{expenditure.createAt}</td>
        <td>{expenditure.ex_name}</td>
        <td>{expenditure.ex_price}</td>
        <td>{expenditure.ex_detail}</td>
      </tr>
    ))
    const colorRevenue = 'green';
    const color = 'volcano';
 
    return (
      <div className="content-wrapper">

        {/* <div>
      {this.getYear()} 
        </div> */}

        <section className="content" style={{ marginTop: "1%" }}>
          {/* /.container-fluid */}
          <div  className="overflow-auto" style={{height:'85vh'}}>
          <div className="container-fluid" style={{ marginTop: "1%" }}>
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="small-box bg">
                  <div className="inner">
                    <Bar
                      data={data}
                      width={100}
                      height={45}
                      options={chartConfig}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

              <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="small-box bg">
                  <div className="inner">
                  <Tabs
                      defaultActiveKey="1"
                      onChange={this.callback}
                      type="card"
                       >
                      <TabPane tab="รายรับ" key="1">
                      <div className="demo-infinite-container">
                            <InfiniteScroll
                              initialLoad={false}
                              pageStart={0}
                              useWindow={false}
                            >
                              <List
                              style={{backgroundColor:'#f4f4f4'}}
                                dataSource={this.state.GetRevenuing}
                                renderItem={item => (
                                  <List.Item 
                                    key={item.re_id} 
                                    style={{padding:'0.8rem'}}
                                  >
                                    <List.Item.Meta
                                      title={<a >{item.name} {item.type} {item.quantity}</a>}
                                      description={item.detail}
                                    />
                                    <div style={{marginRight:'10rem', }}>
                                      {item.createdAt}
                                    </div>
                                    <Tag style={{marginRight:'10rem', }} color={colorRevenue}>
                                      รายรับ
                                    </Tag>
                                    <div>{item.total.toFixed(2)} บาท</div>
                                  </List.Item>
                                )}
                              >

                              </List>
                            </InfiniteScroll>
                            </div>
                      </TabPane>
                      <TabPane tab="รายจ่าย" key="2">
                          <div className="demo-infinite-container">
                            <InfiniteScroll
                              initialLoad={false}
                              pageStart={0}
                              useWindow={false}
                            >
                              <List
                                dataSource={this.state.GetExpendituring}
                                renderItem={item => (
                                  <List.Item 
                                    key={item.id} 
                                    style={{padding:'0.8rem'}}
                                  >
                                    <List.Item.Meta
                                      title={<a >{item.ex_name}</a>}
                                      description={item.ex_detail}
                                    />
                                    <div style={{marginRight:'10rem', }}> {item.createdAt}</div>
                                    <Tag style={{marginRight:'10rem', }} color={color}>
                                      รายจ่าย
                                    </Tag>
                                    <div>{item.ex_price.toFixed(2)} บาท</div>
                                  </List.Item>
                                )}
                              >

                              </List>
                            </InfiniteScroll>
                            </div>
                      </TabPane>
                  </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default Report;
