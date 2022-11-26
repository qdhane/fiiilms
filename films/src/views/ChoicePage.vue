<template>
  <section>
    <v-popup
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"
    />
    <Header/>
    <div class="hero-video">
    <video class="films" muted autoplay>
      <source src="../assets/180301_15_B_KowloonPark_06.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
    </video>
  </div>

  <div class="video-text">
    <h1>ВЫБЕРИТЕ ИЗ СПИСКА</h1>
    <p>Жанры, которые вы смотрели недавно</p>

    <div class="categories-btn">
        <button class="video-text-btn" @click="showPopupInfo">Экшен</button>
        <button class="video-text-btn" @click="showPopupInfo">Боевик</button>
        <button class="video-text-btn" @click="showPopupInfo">Мистика</button>
        <button class="video-text-btn" @click="showPopupInfo">Милодрама</button>
        <button class="video-text-btn" @click="showPopupInfo">Ужасы</button>

        <p>По настроению</p>

        <button class="video-text-btn" @click="showPopupInfo">Весёлое</button>
        <button class="video-text-btn" @click="showPopupInfo">Грустное</button>
        <button class="video-text-btn" @click="showPopupInfo">Загадочное</button>
    </div>
  </div>
        
  
  </section>
</template>

<script>
import vPopup from "../popup/v-popup.vue"
import Header from "../components/HeaderPage.vue"
export default {
    components:{
        Header,
        vPopup
    },
    data(){
      return{
        isInfoPopupVisible: false
      }
    },

    methods:{
      showPopupInfo(){
          this.isInfoPopupVisible = true;
      },
      closeInfoPopup(){
        this.isInfoPopupVisible = false;
      }
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
.categories-btn{
    padding: 10px;
}
.video-text-btn{
    font-size: 25px;
    color: white;
    border: 1px solid white;
    width: 173px;
    height: 89px;
    margin: 11px;
    text-align: center;
    border-radius: 10px;
    transition: all 500ms ease;
    background: rgba(5, 6, 8, 0);
}

.video-text-btn:hover {
  background: rgba(0,0,0,0);
  border: 1px solid rgba(70, 115, 219, 1);
  filter: drop-shadow(0px 0px 15px #4673DB);
}
.categories-btn>p{
  font-size: 27px;
color: rgba(70, 115, 219, 1);
}
</style>