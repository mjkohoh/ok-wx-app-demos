Page({
  data: {
    items: [{
        value: 'USA',
        name: '美国'
      },
      {
        value: 'CHN',
        name: '中国'
      },
      {
        value: 'BRA',
        name: '巴西',
        checked: true
      },
      {
        value: 'JPN',
        name: '日本'
      },
      {
        value: 'ENG',
        name: '英国'
      },
      {
        value: 'FRA',
        name: '法国'
      },
    ]
  },
  checkboxChange: function (e) {
    const {
      value
    } = e.detail

    const {
      items
    } = this.data
    const nItems = items.map((item) => {
      var checked = false
      if (value.find(v => v === item.value)) {
        checked = true
      }
      return {
        ...item,
        checked
      }
    })
    this.setData({
      item: nItems
    })
  }
})