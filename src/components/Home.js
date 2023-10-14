import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Home.css';
import boximage from './../Assets/image1.jpg'
import boximage2 from './../Assets/image3.jpg'
import boximage1 from './../Assets/image2.jpg'
import boximage5 from'./../Assets/image4.jpg'
 
export const Home = () => {
     const [getdata, setVlaue] = useState([])
    useEffect(() => {
        const dataValue = async()=>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setVlaue(res.data)

                }
        dataValue()

    }, [])
    console.log(getdata);
    
    return (
      <>
        {getdata.map((val) => (
          <>
            <div className="home">
              <div className="page1">
                <div className="box1">
                  <div className="heading">
                    <h6>sed volupat vita id elefiend.commond</h6>
                  </div>
                  <div className="para">
                    <p>inderdum pretridum portori nibh courses</p>
                  </div>
                  <div className="date">
                    <p>sun,14 oct 2023 14:57</p>
                    <img src={boximage} alt="image"></img>
                  </div>
                </div>
                {/* ---------box2------ */}
                <div className="box1">
                  <div className="heading">
                    <h6>sed volupat vita id elefiend.commond</h6>
                  </div>
                  <div className="para">
                    <p>inderdum pretridum portori nibh courses</p>
                  </div>
                  <div className="date">
                    <p>sun,14 oct 2023 14:57</p>
                    <img src={boximage1} alt="image"></img>
                  </div>
                </div>
                {/* -----box3------ */}
                <div className="box1">
                  <div className="heading">
                    <h6>sed volupat vita id elefiend.commond</h6>
                  </div>
                  <div className="para">
                    <p>inderdum pretridum portori nibh courses</p>
                  </div>
                  <div className="date">
                    <p>sun,14 oct 2023 14:57</p>
                    <img src={boximage5} alt="image"></img>
                  </div>
                </div>
                {/* ------box4----- */}
                <div className="box1">
                  <div className="heading">
                    <h6>sed volupat vita id elefiend.commond</h6>
                  </div>
                  <div className="para">
                    <p>inderdum pretridum portori nibh courses</p>
                  </div>
                  <div className="date">
                    <p>sun,14 oct 2023 14:57</p>
                    <img src={boximage} alt="image"></img>
                  </div>
                </div>
                {/* ------box5------- */}
                <div className="box1">
                  <div className="heading">
                    <h6>sed volupat vita id elefiend.commond</h6>
                  </div>
                  <div className="para">
                    <p>inderdum pretridum portori nibh courses</p>
                  </div>
                  <div className="date">
                    <p>sun,14 oct 2023 14:57</p>
                    <img src={boximage} alt="image"></img>
                  </div>
                </div>
                {/* -----------box6-------- */}
                <div className="box1">
                  <div className="heading">
                    <h6>sed volupat vita id elefiend.commond</h6>
                  </div>
                  <div className="para">
                    <p>inderdum pretridum portori nibh courses</p>
                  </div>
                  <div className="date">
                    <p>sun,14 oct 2023 14:57</p>
                    <img src={boximage2} alt="image"></img>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
 }
 