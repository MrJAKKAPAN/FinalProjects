import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { Bar } from "react-chartjs-2";
import moment from "moment";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
// Revenue
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



  render() {
      console.log(this.state)
      // Revenue
      const { January, February, March, April, May, June, July, August, September, October, November, December, Revenues } = this.state;
      
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

      // Expenditure
      const { ExJanuary, ExFebruary, ExMarch, ExApril, ExMay, ExJune, ExJuly, ExAugust, ExSeptember, ExOctober, ExNovember, ExDecember, Expenditure } = this.state;
      
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
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          ticks: {
            callback: function (value, index, values) {
              return value + ' ฿.';
            },
            // fontColor: '#75c0cc',
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        }],
        xAxes: [{
          ticks: {
            // fontColor: '#75c0cc'
          },
          gridLines: {
            offsetGridLines: false
          }
        }],
      }
    };
    
   
    
    return (
      <div className="content-wrapper">
        <section className="content" style={{ marginTop: "1%" }}>
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{Octobers}</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                </div>
              </div>
              {/* ./col */}

              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /.container-fluid */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="small-box bg">
                  <div className="inner">
                  <Bar
                    data={data}
                    width={100}
                    height={30}
                    options={chartConfig}
                  />
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
