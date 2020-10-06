import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { Bar } from "react-chartjs-2";
import moment from "moment";


class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      Type: "bar",
      total: 0,
      Revenues:[],
      sumOctober: 0,
   }
  }

  componentDidMount = async() => {
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
  }

  render() {
      const { January, February, March, April, May, June, July, August, September, October, November, December } = this.state;


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

      // const revenue = data.dataset[0].data.push(Octobers)
      console.log(Octobers)

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
          backgroundColor: 'green',
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
          // data: this.state.Revenue
          // data: [199990, 1500000, 5002000, 3500000, 2500000, 3500000, 4500000, 5000000,199990,199990,199990,199990, ]
        },
      ]
    };
    const datas = {
      // labels: [
      //   moment()
      //     .subtract(1, "month")
      //     .format("DD-MM-YYYY"),
      //   moment().format("MMMM")
      // ],
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
          // data: this.state.Revenue
          // data: [199990, 1500000, 5002000, 3500000, 2500000, 3500000, 4500000, 5000000,199990,199990,199990,199990, ]
        } 
      ]
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
              <div className="col-lg-6 col-12">
                <div className="small-box bg">
                  <div className="inner">

                  <Bar
                    data={data}
                    width={60}
                    height={30}
                    // options={lineOptions}
                  />

                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="small-box bg">
                  <div className="inner">
                  <Bar
                    data={datas}
                    width={60}
                    height={30}
                    // options={lineOptions}
                  />
                    {/* รายจ่าย */}
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
