<template>
    <nav>
        <div class='nav__left'>
          <div class="name" @click="goHome()">Solidity</div>
          <div class='nav__search'>
            <span class="material-icons">search</span>
            <input type='text' placeholder="Search Solidity"/>
          </div>
        </div>

        <div class='nav__mid'>
            <div class='icon' @click="goHome()" title="Home">
              <i class="material-icons">home</i>
            </div>
            <div id="dropdown">
            <div class='icon' title="Manage">
              <i class="material-icons">view_list</i>
            </div>
              <div id="dropdown-content">
                  <p @click="goURL('list-sc')"><a>Smart Contracts</a></p>
                  <p @click="goURL('list-context')"><a>Contexts</a></p>
                  <p @click="goURL('list-vul')"><a>LTL</a></p>
              </div>
            </div>
            <div class='icon' @click="goRoadMap()" title="RoadMap">
              <i class="material-icons">map</i>
            </div>
            <div class='icon' title="Help">
              <i class="material-icons">help</i>
            </div>
        </div>

        <div class="nav__right" v-if="checkUser">
            <a class="avatar">
                <img class='avatar__img' src='../assets/avata.jpg' />
                <span><strong>{{getUserName}}</strong></span>
            </a>
            <div class="buttons">
                <a><i class='material-icons'>notifications</i></a>
            </div>
            <div class="buttons">
                <a><i @click="toggleProfile" class='material-icons'>arrow_drop_down</i>
                <ProDia v-show="showDia"/>
                    </a>
            </div>
        </div>
        <div class="nav__right" v-if="!checkUser">
            <button @click="goLogin()" id="login-btn">Login</button>
            <button id="register-btn">Register</button>
        </div>
    </nav>
</template>


<script>
import ProDia from './ProfileDialog.vue'
export default ({
    name: "Header",
    data: function(){
        return{
            username: '',
            showDia: false
        }
    },
    computed:{
        checkUser(){
          return this.$store.state.user.currentUser.id
        },
        getUserName() {
            return this.$store.state.user.currentUser.name
        },
    },
    methods: {
        toggleProfile(){
            this.showDia = !this.showDia
        },
        goHome() {
          this.goURL("/")
        },
        goListSC() {
          this.goURL("/list-sc")
        },
        goRoadMap() {
          this.goURL("/roadmap")
        },
        goLogin(){
            this.goURL("/login")
        },
        goURL(url){
            if(this.$route.path != url)
            {
                this.$router.push(url)
            }
        }
    },
    components:{ProDia}
})
</script>

<style scoped>
nav {
    background-color: white;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
/*     box-shadow: 0px 0px 4px rgb(48, 47, 47); */
}
.nav__left {
    display: flex;
    align-items: center;
    flex-basis: 25%;
}
.nav__left .name {
    flex-basis: 10%;
    margin-right: 8%;
    margin-left: 2%;
    font-size: 30px;
    cursor: pointer;
    color: black;
}
.nav__search {
    display: flex;
    align-items: center;
    background-color: #f0f2f5;
    padding: 15px;
    border-radius: 50px;
    height: 40px;
}
.nav__search input {
    outline: none;
    border: none;
    background: transparent;
    padding: 0 10px;
    color: #484849;
}
.nav__mid {
    flex-basis: 33%;
    display: flex;
    align-items: center;
}
.icon {
    padding: 10px 2.8vw;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
}
.icon i {
    font-size: 30px;
}
.icon:hover {
    background-color: #e6e6e9;
    transition: ease-in-out 0.1s;
}
.nav__right {
    display: flex;
    align-items: center;
}
.avatar {
    display: flex;
    align-items: center;
    margin-right: 20px;
    border-radius: 50px;
    padding: 5px 10px;
    color: #616264;
}
.avatar:hover {
    background: #c7c7c9;
    transition: ease-in-out 0.1s;
}
.avatar__img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
}
.buttons {
    display: flex;
    align-items: center;
}
.buttons i {
    padding: 10px;
    margin: 0 1px;
    border-radius: 50%;
    background: #e4e6eb;
}
.buttons i:hover {
    background: #c7c7c9;
    transition: ease-in-out 0.1s;
}
.material-icons{
    color: #616264;
}
a{
    cursor: pointer;
}
#login-btn{
    border: none;
    border-radius: 5px;
    font-size: 20px;
}
#login-btn:hover{
    color: blue;
    text-decoration: underline;
}
#register-btn{
    font-size: 20px;
    border: none;
    margin-left: 10px;
    margin-right: 30px;
    background-color: #5fb8ee;
    border-radius: 5px;
}
#dropdown-content{
display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0;
  z-index: 1;
}
#dropdown:hover #dropdown-content {
  display: block;
}
#dropdown-content p{
    width: 100%;
    cursor: pointer;
    margin: 0;
    padding: 8px 16px;
}
#dropdown p:hover{
    background-color: #f9f9f9;
}
@media only screen and (max-width:720px) {
    .nav__mid {
        display: none;
    }
}
@media only screen and (max-width:938px) {
    .nav__search {
        border-radius: 50%;
        padding: 10px;
    }
    .nav__search i {
        border-radius: 50%;
    }
    .nav__search input {
        display: none;
    }
}
@media only screen and (max-width:540px) {
    .avatar {
        display: none;
    }
}
</style>