<template>
  <section>
    <Header/>
    <div class="hero-video">
    <video class="films" muted autoplay>
      <source src="../assets/180301_15_B_KowloonPark_06.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
    </video>
  </div>

  <div class="video-text">
    <h1>ФИЛЬМОГРАФИЯ</h1>
    <p>Это не онлайн-кинотеатр - это<br>
      сервис для подбора фильмов по
      вашим интересам!</p>

      <router-link to="/choice"><button class="video-text-btn">Начать</button></router-link>
  </div>

  
  </section>
</template>

<script>
import Header from "../components/HeaderPage.vue"
export default {
    components:{
        Header
    }

}
</script>

<style lang="scss" scoped>
body{
  margin: 0;
  padding: 0;
  font-family: 1;
}

@font-face {
  font-family: 1;
  font-display: block;
  src: url(../fonts/3216-font.ttf);
}

@font-face {
  font-family: 1;
  font-display: block;
  src: url(../fonts/3200-font.ttf);
}

.hero-video{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}
.films{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-video:before{
content: "";
position: absolute;
width: 100%;
height: 100%;
left: 0;
top:0;
z-index: 1;
background: #000;
opacity: .5;
}
.h1{
  margin: 0;
}
.video-text{
  position: absolute;
  top: 74px;
  left: 76px;
  bottom: 0;
  padding: 120px 40px 75px 6.6%;
  text-align: left;
}
.video-text>h1{
font-size: 101px;
background: -webkit-linear-gradient(left, rgb(255, 255, 255) 44%, rgba(70, 115, 219, 1) 44%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
left: 363px;
top: 379px;
}
.video-text>p{
font-size: 37px;
width: 582px;
color: rgba(70, 115, 219, 1);
}

.video-text-btn{
  position: absolute;
    font-size: 30px;
    color: white;
    border: 2px solid white;
    width: 300px;
    height: 70px;
    margin: 9px;
    text-align: center;
    border-radius: 10px;
    transition: all 500ms ease;
    background: rgba(255, 255, 255, 0);
}

.video-text-btn:hover {
  background: rgba(0,0,0,0);
  border: 2px solid rgba(70, 115, 219, 1);
  filter: drop-shadow(0px 0px 15px #4673DB);
}

</style>