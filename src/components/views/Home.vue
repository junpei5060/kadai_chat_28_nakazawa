<template>
<div id="app">
<header class="header">
    <h1>亮とのルーム</h1>
    <div v-if="user.uid" key="login">
    [{{ user.displayName }}]
    <button type="button" @click="doLogout">ログアウト</button>
    </div>
    <div v-else key="logout">
    <button type="button" @click="doLogin">ログイン</button>
    </div>
</header>

<transition-group name="chat" tag="div" class="list content">
    <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
    <div class="item-image"><img src="data:image/jpeg;base64,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" width="40" height="40"></div>
    <div class="item-detail">
        <div class="item-name">亮</div>
        <div class="item-message">
        <nl2br tag="div" :text="message"/>
        </div>
    </div>
    </section>
</transition-group>

<!-- 入力フォーム -->
<form action="" @submit.prevent="doSend" class="form">
    <textarea
    v-model="input"
    :disabled="!user.uid"
    @keydown.enter.exact.prevent="doSend"></textarea>
    <button type="submit" :disabled="!user.uid" class="send-button">送信</button>
</form>
</div>
</template>

<script>
import firebase from 'firebase'
// 改行を <br> タグに変換するモジュール
import Nl2br from 'vue-nl2br'
export default {
components: { Nl2br },
data() {
return {
    user: {},  // ユーザー情報
    chat: [],  // 取得したメッセージを入れる配列
    input: ''  // 入力したメッセージ
}
},
created() {
firebase.auth().onAuthStateChanged(user => {
    this.user = user ? user : {}
    const ref_message = firebase.database().ref('message')
    if (user) {
    this.chat = []
    ref_message.limitToLast(10).on('child_added', this.childAdded)
    } else {
    ref_message.limitToLast(10).off('child_added', this.childAdded)
    }
})
},
methods: {
doLogin() {
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider)
},
// ログアウト処理
doLogout() {
    firebase.auth().signOut()
},
// スクロール位置を一番下に移動
scrollBottom() {
    this.$nextTick(() => {
    window.scrollTo(0, document.body.clientHeight)
    })
},

childAdded(snap) {
    const message = snap.val()
    this.chat.push({
    key: snap.key,
    name: message.name,
    image: message.image,
    message: message.message
    })
    this.scrollBottom()
},
doSend() {
    if (this.user.uid && this.input.length) {
    // firebase にメッセージを追加
    firebase.database().ref('message').push({
        message: this.input,
        name: this.user.displayName,
        image: this.user.photoURL
    }, () => {
        this.input = '' // フォームを空にする
    })
    }
}
}
}
</script>

<style scoped>
#app{
    width: 500px;
    margin: 0 auto;
}
    * {
  margin: 0;
  box-sizing: border-box;
}
.header {
  background: #3ab383;
  margin-bottom: 1em;
  padding: 0.4em 0.8em;
  color: #fff;
}
.content {
  margin: 0 auto;
  padding: 0 10px;
  max-width: 600px;
}
.form {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 80px;
  width: 100%;
  background: #f5f5f5;
  margin: 0 auto;
}
.form textarea {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 4em;
  width: calc(100% - 6em);
  resize: none;
}
.list {
  margin-bottom: 100px;
}
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
}
.item-image img {
  border-radius: 20px;
  vertical-align: top;
}
.item-detail {
  margin: 0 0 0 1.4em;
}
.item-name {
  font-size: 75%;
}
.item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-right: 12px solid #deefe8;
}
.send-button {
  height: 4em;
}
/* トランジション用スタイル */
.chat-enter-active {
  transition: all 1s;
}
.chat-enter {
  opacity: 0;
  transform: translateX(-1em);
}
</style>