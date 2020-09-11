import React, { Component } from "react";
import Videos from "../video/video1.mp4";
import Logo from "../images/logocarcare.png";
import ImgAbout from "../images/car11.jpg";
import ImagGallery from "../images/car8.jpg";
import ImagGallery1 from "../images/car12.jpg";
import ImagGallery2 from "../images/car6.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Table, Row, Col } from "antd";
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
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark center ">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="nav justify-content-center">
                <li class="nav-item active">
                  <a class="nav-link" href="#Home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#serviceBox">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#About">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Contect">Contect</a>
                </li>
                <li class="nav justify-content-end nav-item">
                  <a class="nav-link" href="/login">Admin</a>
                </li>
              </ul>
              
            </div>
          </nav>

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

        <section class="features-icons bg-light text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="features-icon-item mx-auto mb-5 mb-lg-3 ">
                        <div class="features-icons-icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hdd-rack" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14 10H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"/>
                                <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                <path fill-rule="evenodd" d="M3 9V7h1v2H3zm9 0V7h1v2h-1z"/>
                              </svg>
                        </div>
                        <h3>Best Server</h3>
                        <p class="lead mb-0">Do minim ad est ullamco minim ex nisi sunt in aliqua quis.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="features-icon-item mx-auto mb-5 mb-lg-3 ">
                        <div class="features-icons-icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-credit-card-2-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zM1 9h14v2H1V9z"/>
                              </svg>
                        </div>
                        <h3>Dabit</h3>
                        <p class="lead mb-0">Ex culpa eu incididunt Lorem dolor tempor deserunt pariatur !</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="features-icon-item mx-auto mb-5 mb-lg-3 ">
                        <div class="features-icons-icon">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                              </svg>
                        </div>
                        <h3>GoodWeb</h3>
                        <p class="lead mb-0">Magna do et ad minim voluptate laboris voluptate.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
export default  GoogleApiWrapper({
  apiKey: "AIzaSyDehdKPzOHyK7wuOCjSYDekB8CpZR2Zk4w",
})(Home);
