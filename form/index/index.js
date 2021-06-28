const app = getApp()

Page({
  data: {

  },
  handleSubmit: function (e) {
    console.log(e.detail.value);
  },
  handleReset: function (e) {
    console.log(e.detail.value);
  }
})