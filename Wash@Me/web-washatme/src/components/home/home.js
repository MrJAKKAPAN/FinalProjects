import React, { Component } from "react";
import Videos from "../video/video1.mp4";
import Logo from "../images/logocarcare.png";
import ImgAbout from "../images/car11.jpg";
import ImagGallery from "../images/car8.jpg";
import ImagGallery1 from "../images/car12.jpg";
import ImagGallery2 from "../images/car6.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./home.scss";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


class Home extends Component {
    constructor () {
      super();
      this.state ={

        Menulist:false,
      }
    }

  render() {
    var settings = {
      dots: true,
      className: "center",
      // centerMode: true,
      // centerPadding: "6px",
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 5,
      slidesPerRow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
      },
      {
        title: "Price",
        dataIndex: "price",
      },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        price: 200,
      },
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        price: 200,
      },
    ];
    return (
      <div>
        {/* navbar */}
        <div className="nav" id="myTop-nav">
          <a href="#Home">Home</a>
          <a href="#Promotion">Promotion</a>
          <a href="#Service">Service</a>
          <a href="#About">About</a>
          <a href="#Contect">Contect</a>
          <a href="#Admin">Admin</a>
          {/* <a href="javascript:void(0);" className="icon" onClick={}> */} 
            {/* <i class="fa fa-bars"></i>
          </a> */}
        </div>

        {/* video Logo  */}
        <div className="section">
          <div className="sectionText">
            <div className="sectionLogo">
              <div className="Logo">
                <img className="logo1" src={Logo} loading="lazy" alt="" />
              </div>
            </div>
          </div>
          <div className="color-overlay" />
          <video autoPlay loop muted>
            <source src={Videos} type="video/mp4" />
          </video>
        </div>
        {/* Promotion */}
        {/* <div className="textPromotion">
          <h1 className="inText-title1">Promotion</h1>
        </div>
        <div className="Slider"> */}
          {/* <div className="Slick">
            <div className="slickItem">
              <Slider {...settings}>
                <div>
                  <h3>
                    <div className="container">
                      <div className="card">
                        <div className="img-box">
                          <img src="" alt="image" title="" />
                        </div>
                        <div className="content-box">
                          <h2>เคลือบแก้ว</h2>
                          <div className="size">
                            <h3> รายละเอียด </h3>
                          </div>
                          <a href="javascript:void(0);">More</a>
                        </div>
                      </div>
                    </div>
                  </h3>
                </div>

                <div>
                  <div className="container">
                    <div className="card">
                      <div className="img-box">
                        <img src="" alt="image" title="" />
                      </div>
                      <div className="content-box">
                        <h2>เคลือบแก้ว</h2>
                        <div className="size">
                          <h3> รายละเอียด </h3>
                        </div>
                        <a href="javascript:void(0);">More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="container">
                    <div className="card">
                      <div className="img-box">
                        <img src="" alt="image" title="" />
                      </div>
                      <div className="content-box">
                        <h2>เคลือบแก้ว</h2>
                        <div className="size">
                          <h3> รายละเอียด </h3>
                        </div>
                        <a href="javascript:void(0);">More</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="container">
                    <div className="card">
                      <div className="img-box">
                        <img src="" alt="image" title="" />
                      </div>
                      <div className="content-box">
                        <h2>เคลือบแก้ว</h2>
                        <div className="size">
                          <h3> รายละเอียด </h3>
                        </div>
                        <a href="javascript:void(0);">More</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="container">
                    <div className="card">
                      <div className="img-box">
                        <img src="" alt="image" title="" />
                      </div>
                      <div className="content-box">
                        <h2>เคลือบแก้ว</h2>
                        <div className="size">
                          <h3> รายละเอียด </h3>
                        </div>
                        <a href="javascript:void(0);">More</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="container">
                    <div className="card">
                      <div className="img-box">
                        <img src="" alt="image" title="" />
                      </div>
                      <div className="content-box">
                        <h2>เคลือบแก้ว</h2>
                        <div className="size">
                          <h3> รายละเอียด </h3>
                        </div>
                        <a href="javascript:void(0);">More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div> */}
        {/* About */}
        <div className="text-about">
          {/* <div className="aboutTitle">
            <h1 className="inText-title1">About</h1>
          </div> */}
          <div className="about">
            <div className="about-img">
              <figure>
                <img src={ImgAbout} className="img-about" />
              </figure>
            </div>
            <div className="about-text">
              <div className="about-text-title">
                <h2>Who am I ?</h2>
                <div className="about-text-detail">
                  {" "}
                  วอช แอท มี เราเป็น Car Detailing แบบครบวงจร
                  ที่ให้ความสำคัญและใส่ใจในรายละเอียดของการดูแลรักษารถยนต์แบบครบวงจร
                  ให้บริการล้างสี-ดูดฝุ่น ฟื้นฟูสภาพผิวสีรถ ขัดไฟหน้า
                  ขัดเคลือบสี เคลือบแก้ว / เคลือบเซรามิก (Glass Coating)
                  ฟอกเบาะ-ซักพรม สตีมฆ่าเชื้อโรค อบโอโซน สปาฟอกอากาศ พ่นกันสนิม
                  ติดฟิล์มรถยนต์ ฟิล์มอาคาร ฟิล์มกันรอยสะเก็ดหิน
                </div>
                <div className="about-text-content">
                  <div className="texts">
                    วอช แอท มี เรายังให้ความสำคัญและใส่ใจกับคุณภาพของงานบริการ
                  </div>
                  <p>
                    1.“เรา”ใช้ผ้าไมโครไฟเบอร์อย่างดี ในการทำความสะอาดรถที่คุณรัก
                    ไม่ทิ้งรอยขนแมวบนพื้นผิว
                  </p>
                  <p>
                    2.“เรา”เปลี่ยนผ้าเช็ดรถให้คุณใหม่ทุกคันที่ล้าง
                    จึงมั่นใจได้ว่าสะอาดจริง
                  </p>
                  <p>
                    3.“เรา”รับประกันงานล้าง 24 ชั่วโมง ฝนตก ล้างใหม่ให้ฟรี
                    โดยไม่จำกัดฤดู
                  </p>
                  <p>
                    4.ในด้านความปลอดภัย
                    “เรา”มีมาตรการรักษาความปลอดภัยและบันทึกภาพด้วยระบบ
                    CCTVUllamco sint culpa culpa eu aliqua eiusmod aliqua cillum
                    consequat tempor nisi in nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service */}
        <div className="serviceBox">
          <div className="inText-title-service">Service</div>
          <div className="serviceItem">
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </div>

        {/* gallery post */}
        <div className="gallery">
          <div className="gallery-content">
            <div className="child">
              <img src={ImagGallery} />
              <div class="overlays">
                <h2>Heading</h2>
                <p>description goes here</p>
              </div>
            </div>
            <div className="child">
              <img src={ImagGallery1} />
              <div class="overlays">
                <h2>Heading</h2>
                <p>description goes here</p>
              </div>
            </div>
            <div className="child">
              <img src={ImagGallery2} />
              <div class="overlays">
                <h2>Heading</h2>
                <p>description goes here</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="contact">
          <div className="map">
            <Map google={this.props.google} zoom={16}>
              <Marker onClick={this.onMarkerClick} name={"Current location"} />
              <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
            </Map>
          </div>
        </div>

        {/* footer */}
        <div className="foot-home">
          <div className="foot-home-contact">
            <div className="foot-home-title">ติดต่อข้อมูลข่าวสาร</div>
            <ul>
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-line"></i>
              </li>
              <li>
                <i class="fab fa-youtube"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="foot-home-text">Wash At Me</div>
          Copy ©2020 DJ Wash At Me All Right Reserved
        </div>
      </div>
    );
  }
}
// export default Home;
export default GoogleApiWrapper({
  apiKey: "AIzaSyDehdKPzOHyK7wuOCjSYDekB8CpZR2Zk4w",
})(Home);
