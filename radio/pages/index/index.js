Page({
  data: {
    items: [{
        value: 'USA',
        name: '中国'
      },
      {
        value: 'CHN',
        name: '美国'
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
      }
    ]
  },
  radioChange: function (e) {
    const {
      value
    } = e.detail;
    const nItems = this.data.items.map(item => {
      const checked = item.value === value
      return {
        ...item,
        checked
      }
    })
    this.setData({
      items: nItems
    })
  }
})