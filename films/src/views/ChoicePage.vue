<template>
  <section>
    <Header/>
    <div class="hero-video">
    <video class="films" muted autoplay>
      <source src="../assets/180301_15_B_KowloonPark_06.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
    </video>
  </div>

  <div class="video-text">
    <h1>ВЫБЕРИТЕ ИЗ СПИСКА</h1>
    <p>Жанры, которые вы смотрели недавно</p>
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
    bottom: 0;
    text-align: center;
    padding-left: 200px;
    padding-right: 200px;
}
.video-text>h1{
font-size: 80px;
background: -webkit-linear-gradient(left, rgb(255, 255, 255) 50%, rgba(70, 115, 219, 1) 23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
top: 379px;
margin: 35px;
}
.video-text>p{
font-size: 27px;
color: rgba(70, 115, 219, 1);
}
</style>