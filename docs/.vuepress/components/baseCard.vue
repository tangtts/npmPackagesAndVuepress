<template>
  <div class="card">
    <div class="card__header">{{ headerText }}</div>
    <div class="card__body">
      <img :src="bodyImg" alt="" />
    </div>
    <div class="card__footer">{{ footerText }}</div>
  </div>
</template>

<script>
export default {
  name: "baseCard",
  props: {
    headerText: String,
    footerText: String,
    bodyImg: String,
  },
};
</script>

<style scoped>
.card {
  width: 270px;
  box-shadow: 0px 6px 10px 0px rgba(95, 101, 105, 0.15);
  border-radius: 5px;
  background-color: #fff;
  padding: 5px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.card__body {
  flex: 1;
  text-align: center;
}
.card__header {
  text-align: center;
  padding-bottom: 5px;
}
.card__footer {
  text-align: center;
  padding-top: 5px;
}
</style>
