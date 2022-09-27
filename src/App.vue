<template>
  <div class="d-flex justify-content-center">
    <div>
      <h1 class="text-center">Chat</h1>
      Текст
      <div class="okno  border border-4">
        <div
            v-for="q in messages"
            :key="q.id">
          <ul><h3 class="text-success">{{ q.userName }}</h3></ul>
          <h5>{{ q.message }}</h5>
        </div>
      </div>
      <!--      имя-->
      <div v-if="userName==null" class="input-group mb-3 p-3">
        <input type="text" v-model="currentUserName" class="form-control m-2" placeholder="Имя"
               aria-label="Recipient's username"
               aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary m-2" @click="save" type="button" id="button-addon2">Сохранить
        </button>
      </div>
      <div v-if="userName!=null" class="p-3">
        <div class="input-group ">
          <textarea v-model="user.message" class="form-control" placeholder="Сообщение"
                    aria-label="With textarea"></textarea>
        </div>
        <button class="btn btn-outline-secondary  w-100 " @click="send" style="margin-top: 1rem" type="button"
                id="button-addon2">Отправить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  components: {},
  data() {
    return {
      userName: null,
      currentUserName: null,
      messages: [],
      user: {}
    }

  },
  mounted() {
    // Выполнять код каждую секунду
    setInterval(this.getMessages, 1000)
  },

  methods: {
    save() {
      this.userName = this.currentUserName
    },
    send() {
      this.user.userName = this.userName
      axios.post(`/api/v1/chat`, this.user)
          .catch(error => console.error(error))
    },
    getMessages() {
      axios.get(`/api/v1/chat`).then(resp => this.messages = resp.data)

    },
  }
}

</script>

<style>
.okno {
  padding: 0;
  margin: 0;
  position: center;
  width: 600px;
  height: 500px;
}

</style>
