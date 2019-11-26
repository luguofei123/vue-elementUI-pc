<template>
<div class="container">
    <div class="logo">
      <a href="#" target="_blank"><img src="../../assets/img/bd_logo.png" width="270" height="129"></a>
    </div>
    <div class="search">
      <span class="inputbox">
        <input v-model="keyword" id="baiduinput" @keyup='keyup($event)' v-on:keyup.enter.prevent="selectEnter($event)"  @keydown.up.prevent="selectUp"  @keydown.down.prevent="selectDown" class="baiduinput" value="" maxlength="255" autocomplete="off">
        <span class="soutu"></span>
      </span>
      <input type="submit" class="submit" id="submit" value="百度一下" @click="search(keyword)">
      <div v-show="keyarr.length>0">
      <ul class="keytag">
      <li v-for="(word,i) in keyarr" v-bind:key='word' @click="mouseSearch($event)" :class="[index === i ? 'active' : '']">{{word}}</li>
      </ul>
      </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      keyword: '',
      keyarr: [],
      index: -1
    }
  },
  components: {
  },
  methods: {
    mouseSearch (ev) {
      this.keyword = ev.target.firstChild.nodeValue
      this.search(this.keyword)
      // console.log(ev.target.firstChild.nodeValue)
    },
    search (word) {
      //console.log(process.env.NODE_ENV.VUE_APP_BAIDU_URL)
      window.open('https://www.baidu.com/s?wd=' + word)
    },
    keyup (ev) {
      if (ev.keyCode === 38 || ev.keyCode === 40) return
      this.index = -1
      this.$jsonp(
        process.env.VUE_APP_BAIDU_URL,
        {
          wd: this.keyword,
          callbackQuery: 'cb',
          callbackName: 'jsonpFunc'
        }
      )
        .then(res => {
          // console.log(res.s)
          this.keyarr = res.s
        })
    },
    selectUp () {
      if (this.index > 0) {
        this.index--
      }
      this.keyword = this.keyarr[this.index]
    },
    selectDown () {
      if (this.index < this.keyarr.length - 1) {
        this.index++
      }
      this.keyword = this.keyarr[this.index]
    },
    selectEnter (ev) {
      this.search(this.keyword)
    },
    onSubmit () {
      console.log('submit!')
      this.isloading = true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only #b6b6b6-->
<style scoped>
.container{
height:560px;
}
.logo,.search{
  text-align:center;
}
.search{
  width:635px;
  margin:0 auto;
}
.inputbox{
  position:relative;
  display:inline-block;
  border:1px solid #b6b6b6;
  width:539px;
  text-align: left;
}
.baiduinput{
  height:22px;
  width:500px;
  line-height:22px;
  margin: 6px 0 6px 7px;
  padding:0;
  border:0;
  outline: none;
  font-size:14px;
}
.soutu{
  position:absolute;
  display:inline-block;
  height:16px;
  width:18px;
  right:10px;
  top:8px;
  background:url('../../assets/img/bd_soutu.png');
}
.bgbtn{
  background:#2d78f4;
}
.submit{
  height:36px;
  background:#2d78f4;
  border:0;
  padding:2px 15px 2px 15px;
  font-size: 15px;
  color:white;
  border-bottom: 1px solid #2d78f4;
  letter-spacing: 1px;
}
.submit:hover{
  cursor:pointer;
}
.keytag{
  border:1px solid #dedede;
  border-top:none;
  text-align:left;
  font-size:14px;
}
.keytag li{
  list-style: none;
  padding:3px 0px 3px 5px;
}
.keytag li:hover{
  background:#dedede;
}
.active{
  background:#dedede;
}
</style>
