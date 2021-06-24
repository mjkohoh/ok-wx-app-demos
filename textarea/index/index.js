const app = getApp()

Page({
  data: {
    focus: false
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value);
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea);
  }
})