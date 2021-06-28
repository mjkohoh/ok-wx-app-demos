const app = getApp()

Page({
  data: {
    switch1Checked: true,
    switch2Checked: false
  },
  switch1Change: function (e) {
    this.setData({
      switch1Checked: e.detail.value
    })
  },
  switch2Change: function (e) {
    this.setData({
      switch2Checked: true
    })
  }
})