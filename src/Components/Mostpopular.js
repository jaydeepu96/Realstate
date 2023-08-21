import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import mostImg from '../Assets/most.png';
import icon1Img from '../Assets/icon1.png';
import s2img from '../Assets/s2.png';
import s3img from '../Assets/s3.png';
import s4img from '../Assets/s4.png';
import s5img from '../Assets/s5.png';
import ss1img from '../Assets/ss1.png';
import ss2img from '../Assets/ss2.png';
import '../ComponentCss/Mostpopular.css';
function Mostpopular() {
    return (
        <>
           <div class="section project_iso project_iso1" >
           <div class="container-fluid g-0"  style={{backgroundColor:"#00326f",}}>
           <div class="section_header text-center">
           <div class="shadow_icon">
           <img src={icon1Img } alt=""/>
           </div>
           <h6 class="section_sub_title">ABOUT BUILDERRINE CONSTRUCTION</h6>
           <h1 class="section_title" style={{color:"white"}}>Our Most Popular Projects</h1></div>
           <div class="row g-0">
            <div class="col">
           <div class="button-group filters-button-group">
           <button class="button">All <sup class="filter-count"></sup></button>
           <button class="button">Commercial <sup class="filter-count"></sup></button>
           <button class="button">Highrise <sup class="filter-count"></sup></button>
           <button class="button">Residential <sup class="filter-count"></sup></button>
           <button class="button">Business <sup class="filter-count"></sup></button></div>
           <div class="grid grid-5" style={{position:"relative",height:"400px"}}>
           <div class="element-item residential business" style={{position:"absolute", left:"0%",top:"0px",}}>
           <div class="teambox"><div class="lazyload-wrapper ">
           <img src={s2img} alt=""/></div>
           <div class="teambox_inner">
           <div class="team_social">
           <div class="share"><i class="ion-android-share-alt"></i></div>
           <ul><li class="facebook"><a href="#"><i class="ion-social-facebook"></i></a></li>
           <li class="twitter"><a href="#"><i class="ion-social-twitter"></i></a></li>
           <li class="instagram"><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
           <li class="linkedin"><a href="#"><i class="ion-social-linkedin-outline"></i></a></li></ul></div>
           <div class="teambox_intro">
           <div class="team_flex team_size">
           <h6>NEW YORK</h6>
           <h5><a href="/project-details">Large Garden Lodge</a></h5></div></div></div></div></div>
           <div class="element-item highrise" style={{position: "absolute", left: "19.9998%", top: "0px",}}>
           <div class="teambox">
            <div class="lazyload-wrapper ">
           <img src={ss2img} alt=""/></div>
           <div class="teambox_inner">
           <div class="team_social">
           <div class="share">
           <i class="ion-android-share-alt"></i></div>
           <ul><li class="facebook"><a href="#"><i class="ion-social-facebook"></i></a></li>
           <li class="twitter"><a href="#"><i class="ion-social-twitter"></i></a></li>
           <li class="instagram"><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
           <li class="linkedin"><a href="#"><i class="ion-social-linkedin-outline"></i></a></li></ul></div>
           <div class="teambox_intro">
           <div class="team_flex team_size">
           <h6>NEW YORK</h6>
           <h5><a href="/project-details">Commercial Building</a></h5>
           </div></div></div></div></div>
           <div class="element-item residential commercial" style={{position: "absolute", left: "39.9996%", top:"opx"} }>
           <div class="teambox">
            <div class="lazyload-wrapper ">
                <img src={s4img} alt=""/></div>
                <div class="teambox_inner">
                    <div class="team_social">
                        <div class="share"><i class="ion-android-share-alt"></i></div>
                        <ul><li class="facebook"><a href="#">
                            <i class="ion-social-facebook"></i></a></li>
                            <li class="twitter"><a href="#"><i class="ion-social-twitter"></i></a></li>
                            <li class="instagram"><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                            <li class="linkedin"><a href="#"><i class="ion-social-linkedin-outline"></i></a></li>
                            </ul></div>
                            <div class="teambox_intro">
                                <div class="team_flex team_size">
                                    <h6>NEW YORK</h6>
                                    <h5><a href="/project-details">Modern Pent House</a></h5>
                                    </div></div></div></div></div>
                                    <div class="element-item highrise commercial" style={{position: "absolute", left: "59.9994%", top:"0px" }}>
                                        <div class="teambox">
                                            <div class="lazyload-wrapper ">
                                                <img src={ss1img} alt=""/></div>
                                                <div class="teambox_inner">
                                                    <div class="team_social">
                                                        <div class="share">
                                                            <i class="ion-android-share-alt"></i></div>
                                                            <ul><li class="facebook"><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                            <li class="twitter"><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                            <li class="instagram"><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                            <li class="linkedin"><a href="#"><i class="ion-social-linkedin-outline"></i></a></li></ul></div>
                                                            <div class="teambox_intro">
                                                                <div class="team_flex team_size">
                                                                    <h6>NEW YORK</h6>
                                                                    <h5><a href="/project-details">Large Swiming Pool</a></h5>
                                                                    </div></div></div></div></div>
                                                                    <div class="element-item business highrise" style={{position: "absolute", left: "79.9992%", top: "0px"}}>
                                                                        <div class="teambox">
                                                                            <div class="lazyload-wrapper ">
                                                                                <img src={s5img} alt=""/></div>
                                                                                <div class="teambox_inner">
                                                                                    <div class="team_social">
                                                                                        <div class="share"><i class="ion-android-share-alt"></i></div>
                                                                                        <ul><li class="facebook"><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                                                        <li class="twitter"><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                                                        <li class="instagram"><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                                                                                        <li class="linkedin"><a href="#"><i class="ion-social-linkedin-outline"></i></a></li></ul></div>
                                                                                        <div class="teambox_intro">
                                                                                            <div class="team_flex team_size">
                                                                                                <h6>NEW YORK</h6>
                                                                                                <h5><a href="/project-details">Highrise Architecture</a></h5>
                                                                                                </div></div></div></div></div></div></div></div></div></div>

        </>
    )
}

export default Mostpopular