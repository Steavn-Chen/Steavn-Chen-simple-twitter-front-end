<template>
  <div class="follow">
    <img :src="follower.avatar | emptyImage" class="follow-icon" />
    <div class="follow-content">
      <div class="follow-content-head">
        <div class="follow-content-head-title">
          <router-link
            class="follow-content-head-title-name"
            :to="{ name: 'user-tweet', params: { id: follower.id } }"
            >{{ follower.name }}</router-link
          >
          <div class="follow-content-head-title-account">
            @{{ follower.account }}
          </div>
        </div>
        <button
          class="isfollow"
          v-if="!isFollowing"
          v-show="!(follower.id === currentUser.id)"
          @click.prevent.stop="addFollow(follower.id)"
        >
          跟隨
        </button>
        <button
          class="unfollow"
          v-else
          v-show="!(follower.id === currentUser.id)"
          @click.prevent.stop="deleteFollow(follower.id)"
        >
          正在跟隨
        </button>
      </div>
      <div class="follow-content-body">{{ follower.introduction }}</div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { emptyImageFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import { eventBus } from '../utils/eventbus'
import usersAPI from '../apis/users'

export default {
  name: 'FollowItems',
=======
import { emptyImageFilter } from "../utils/mixins";
import { mapState } from "vuex";
import { eventBus } from '../utils/eventbus'
import usersAPI from "../apis/users";

export default {
  name: "FollowItems",
>>>>>>> d3a902e1c21db33dfb49f2a915d8c84e6d3ce231
  mixins: [emptyImageFilter],
  props: {
    initialFollower: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      follower: {
        id: 0,
<<<<<<< HEAD
        name: '',
        account: '',
        avatar: '',
        introduction: '',
      },
      isFollowing: false,
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated']),
=======
        name: "",
        account: "",
        avatar: "",
        introduction: "",
      },
      isFollowing: false
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
>>>>>>> d3a902e1c21db33dfb49f2a915d8c84e6d3ce231
  },
  watch: {
    initialFollower(newValue) {
      this.follower = {
        ...this.follower,
        ...newValue,
<<<<<<< HEAD
      }
    },
  },
  async created() {
    const response = await usersAPI.getUser({ userId: this.initialFollower.id })
    const { data } = response
    console.log(data)
    this.isFollowing = data.isFollower
    this.fetchData()
=======
      };
    },
  },
  async created() {
    const response = await usersAPI.getUser({userId: this.initialFollower.id})
    const { data } = response
    this.isFollowing = data.isFollower
    this.fetchData();
>>>>>>> d3a902e1c21db33dfb49f2a915d8c84e6d3ce231
    this.handleFollow()
  },
  methods: {
    fetchData() {
<<<<<<< HEAD
      const { id, name, account, avatar, introduction } = this.initialFollower
=======
      const { id, name, account, avatar, introduction } =
        this.initialFollower;
>>>>>>> d3a902e1c21db33dfb49f2a915d8c84e6d3ce231
      this.follower = {
        id,
        name,
        account,
        avatar,
        introduction,
<<<<<<< HEAD
      }
    },
    async addFollow(userId) {
      try {
        const id = { id: userId }
        this.isFollowing = true
        const { data } = await usersAPI.addFollow({ id })
        if (data.status !== 'success') {
          throw new Error()
        }
        this.$emit('refresh')
        eventBus.$emit('refresh')
      } catch (error) {
        console.log(error)
      }
    },
    async deleteFollow(userId) {
      try {
        this.isFollowing = false
        const { data } = await usersAPI.deleteFollow({ userId })
        if (data.status !== 'success') {
          throw new Error()
        }
        this.$emit('refresh')
        eventBus.$emit('refresh')
      } catch (error) {
        console.log(error)
      }
    },
    handleFollow() {
      eventBus.$on('refresh', () => {
        this.fetchData()
      })
    },
  },
}
=======
      };
    },
    async addFollow(userId) {
      try {
        const id = {id: userId}
        this.isFollowing = true;
        const { data } = await usersAPI.addFollow({ id });
        if(data.status !== 'success') {
          throw new Error
        }
        this.$emit("refresh")
        eventBus.$emit("refresh")
      } catch (error) {
        console.log(error);
      }

    },
    async deleteFollow(userId) {
      try {
        this.isFollowing = false;
        const { data } = await usersAPI.deleteFollow({ userId });
        if(data.status !== 'success') {
          throw new Error
        }
        this.$emit("refresh")
        eventBus.$emit("refresh")
      } catch (error) {
        console.log(error);
      }
    },
    handleFollow() {
      eventBus.$on("refresh", () => {
        this.fetchData()
      })
    }
  },
};
>>>>>>> d3a902e1c21db33dfb49f2a915d8c84e6d3ce231
</script>

<style lang="sass" scoped>
.follow
  padding: 13px 15px 13px 15px
  border-bottom: 1px solid $input-border
  display: flex
  .follow-icon
    width: 50px
    height: 50px
    border-radius: 50%
    object-fit: cover
    margin-right: 10px
  .follow-content
    flex: 1
    .follow-content-head
      display: flex
      justify-content: space-between
      .follow-content-head-title
        .follow-content-head-title-name
          text-decoration: none
          font-size: 15px
          font-weight: 700
          color: $text-content
        .follow-content-head-title-account
          font-size: 14px
          font-weight: 500
          color: $input-label
      button
        font-size: 15px
        height: 25px
        border-radius: 100px
      .unfollow
        width: 90px
        color: $light
        border: none
        background: $mainColor
      .isfollow
        width: 60px
        color: $mainColor
        background: $light
        border: 1px solid $mainColor
    .follow-content-body
      padding-top: 5px
      font-size: 15px
      font-weight: 500
</style>