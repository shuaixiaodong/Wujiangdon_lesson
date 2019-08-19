// miniprogram/pages/index/index.js
var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    youjiList: [],
    city: '南昌',
    imgUrl: '/images/gl1.jpg',
    itemTab: [{
        name: '景点',
        id: 'jingdian'
      },
      {
        name: '购物',
        id: 'gouwu'
      },
      {
        name: '美食',
        id: 'meishi'
      }
    ],
    lists: [],
    list2: [],
    youjiList: [],
    wendaBox: []
  },

  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca4580c4767c3737055c913/example/mafengwo',
      success: function(res) {
        console.log(res.data);
        that.setData({
          lists: res.data.data.lists,
          list2: res.data.data.list2,
          wendaBox: res.data.data.wendaBox,
          youjiList: res.data.data.youjiList
        }); //和页面进行绑定可以动态的渲染到页面

      },
      fail: function(res) {
        console.log(res.data);
        // this.userData = "数据获取失败";
      }
    })
  },
  onShow: function () {
    var that = this;
    var query = wx.createSelectorQuery()//创建节点查询器 query
    query.select('#scroll').boundingClientRect()//这段代码的意思是选择Id= the - id的节点，获取节点位置信息的查询请求
    query.exec(function (res) {
      console.log(res[0].top); // #scroll节点的上边界坐
      that.setData({
        menuTop: res[0].top
      })
    });
  },
  // 2.监听页面滚动距离scrollTop
  onPageScroll: function (e) {
    // console.log(e.scrollTop);
    var that = this;
    // 3.当页面滚动距离scrollTop > menuTop菜单栏距离文档顶部的距离时，菜单栏固定定位
    if (e.scrollTop > that.data.menuTop) {
      that.setData({
        menuFixed: true
      })
    } else {
      that.setData({
        menuFixed: false
      })
    }
  },
  findNav(e) {
    var that = this;
    if (this.data.curIndex === e.target.dataset.index) {
      return false;
    } else {
      that.setData({
        curIndex: e.target.dataset.index
      })
    }
  },
  // onLoad: function (options) {
  //   this.setData({
  //     navH: App.globalData.navHeight
  //   })
  // },
  switchTab(e) {
    // console.log(e)
    this.setData({
      currentTab: e.detail.current
    })
    checkCor();
  },
  // bindChange: function (e) {
  //   var that = this;
  //   that.setData({ currentTab: e.detail.current });
  // },
  swichNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  toGonlveDetail(e) {
    wx.navigateTo({
      url: `/pages/strategeDetail/strategeDetail?id=${e.currentTarget.dataset.id}`,
    })
  },
  chooseCity(e) {
    wx.navigateTo({
      url: `/pages/chooseCity/chooseCity?id=${e.currentTarget.dataset.id}`,
    })
  },
  changeTabsColor(e) {
    let curId = this.data.itemTab.id;
  }
  // changeItem: function (e) {
  //   if ("touch" === e.detail.source) {
  //     let currentPageIndex = this.data.currentTab
  //     // currentPageIndex = (currentPageIndex + 1) % 2
  //     this.setData({
  //       currentTab: currentPageIndex
  //     })
  //   }
  // },
})