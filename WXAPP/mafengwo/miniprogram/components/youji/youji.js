// components/youji/youji.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toYoujiDetail(e) {
      wx.navigateTo({
        url: `/pages/youjiDetail/youjiDetail?id=${e.currentTarget.dataset.id}`,
      })
    }
  }
})
