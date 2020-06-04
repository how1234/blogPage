<template>
  <div>
    <header class="title">
      <div>我是图标</div>
      <input
        placeholder="搜索栏"
        v-model="searchedText"
        v-on:keyup.enter="searchSongs"
      />
      <button @click="searchSongs">搜索歌曲</button>
    </header>

    <div class="container">
      <div class="main">

        <img :src="albumURL" />
      </div>
      <div class="left">
        播放列表部分
        <ul>
          <div v-for="(item, index) in musicList" :key="index">
            {{ item.name }}
            <button @click="playSongs(item.id)">播放</button>
          </div>
        </ul>
      </div>
      <div class="right">
        歌曲评论
        <ul>
            <div v-for="(item,index) in commentList" :key="index">
                <div>
                
                 
                    <p>{{ item.user.nickname}} : {{ item.content}} </p>
                </div>
                

            </div>
        </ul>
      </div>
    </div>

    <footer>
      <audio
        v-bind:src="musicSrc"
        type="audio/mpeg"
        autoplay
        loop
        controls
      ></audio>
    </footer>
  </div>
</template>

<script>
import { searchURL, songsURL, detailsURL,commentsURL } from "../utils/QueryString";
import { getJSON } from "../utils/RequestMethods";

export default {
  name: "web-player",
  data() {
    return {
      searchedText: "",
      musicSrc: "",
      musicList: [],
      albumURL: "",
      commentList: []
    };
  },
  methods: {
    searchSongs: function() {
      let url = searchURL(this.searchedText);
      getJSON(url).then(res => {
        this.musicList = res.result.songs;
      });
    },
    playSongs: function(songID) {
      let mp3Url = songsURL(songID);
      let detailsUrl = detailsURL(songID);
      let commetentUrl = commentsURL(songID)
      console.log(commetentUrl)

      getJSON(mp3Url).then(res => {
        this.musicSrc = res.data[0].url;
      });

      getJSON(detailsUrl).then(res => {
        this.albumURL = res.songs[0].al.picUrl;
      });

       getJSON(commetentUrl).then(res => {
        this.commentList = res.hotComments
      });
      
    }
  }
};
</script>

<style>
.title {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.container {
  width: 100%;
  display: flex;

  max-height: 100%;
}

.main {
  flex-grow: 1;
}
.left {
  order: -1;
  flex-basis: 20%;
}
.right {
  flex-basis: 20%;
  max-height: 100%;
}
</style>
