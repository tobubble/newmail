<template>
  <div class="recommend" v-if="Object.keys(recommend).length !== 0">
    <div class="userCommentTab">
      <div>用户评价</div>
      <div>更多</div>
    </div>

    <div class="commentContent">
      <div class="userMessage">
        <img :src="recommend.avatar" alt />
        <span>{{recommend.name}}</span>
      </div>

      <div class="commentWrapper">
        <p class="comment">{{recommend.content}}</p>
        <div class="timeWrapper">
          <div class="time">{{recommend.time}}</div>
          <div class="style">{{recommend.style}}</div>
        </div>
      </div>
    </div>

    <div class="recommendBottom">
      <p>热门推荐</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Object,
    },
  },
};
</script>

<style lang='less' scoped>
.recommend {
  margin-top: 20px;
  padding: 0 15px;

  .userCommentTab {
    border-top: 5px solid rgb(242, 245, 248);
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  .commentContent {
    .userMessage {
      line-height: 60px;
      border-top: 1px solid silver;

      img {
        width: 42px;
        vertical-align: middle;
      }
    }
  }

  .commentWrapper {
    .comment {
      font-size: 14px;
      color: #333;
      line-height: 50px;
    }

    .timeWrapper {
      display: flex;
      font-size: 13px;
      color: #666;

      .style {
        margin-left: 15px;
      }
    }
  }

  .recommendBottom {
    margin-top: 30px;
    border-top: 5px solid rgb(242, 245, 248);

    p {
      line-height: 50px;
    }
  }
}
</style>