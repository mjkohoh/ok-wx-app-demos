Page({
  data: {
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    const {
      value
    } = e.detail
    return value.replace(/11/g, '2')
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      wx.hideKeyboard()
    }
  }
})