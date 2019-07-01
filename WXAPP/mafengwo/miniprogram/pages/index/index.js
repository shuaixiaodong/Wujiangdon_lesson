// miniprogram/pages/index/index.js
var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    youjiList : [],
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
    lists: [{
        thumb: '/images/twg.jpeg',
        name: '滕王阁',
        num: '1849',
        info: '江南三大景区之一'
      },
      {
        thumb: '/images/twg.jpeg',
        name: '滕王阁',
        num: '1849',
        info: '江南三大景区之一'
      },
      {
        thumb: '/images/twg.jpeg',
        name: '滕王阁',
        num: '1849',
        info: '江南三大景区之一'
      },
      {
        thumb: '/images/twg.jpeg',
        name: '滕王阁',
        num: '1849',
        info: '江南三大景区之一'
      },
      {
        thumb: '/images/twg.jpeg',
        name: '滕王阁',
        num: '1849',
        info: '江南三大景区之一'
      },
      {
        thumb: '/images/twg.jpeg',
        name: '滕王阁',
        num: '1849',
        info: '江南三大景区之一'
      },

      // { thumb: '', name: '', num: '', info: '' }
    ],
    list2: [{
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '南昌黄马银杏林攻略',
        browse: '4353',
        collect: '41'
      },
    ],
    youjiList: [
      {
        img: '/images/gl1.jpg',
        title: '物华天宝豫章郡，人杰地灵英雄城',
        photo: '/images/gl1.jpg',
        name: '心随你动',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '物华天宝豫章郡，人杰地灵英雄城',
        photo: '/images/gl1.jpg',
        name: '心随你动',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '物华天宝豫章郡，人杰地灵英雄城',
        photo: '/images/gl1.jpg',
        name: '心随你动',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '物华天宝豫章郡，人杰地灵英雄城',
        photo: '/images/gl1.jpg',
        name: '心随你动',
        browse: '4353',
        collect: '41'
      },
      {
        img: '/images/gl1.jpg',
        title: '物华天宝豫章郡，人杰地灵英雄城',
        photo: '/images/gl1.jpg',
        name: '心随你动',
        browse: '4353',
        collect: '41'
      },
    ],
    wendaBox: [
      {
        title: '南昌适合孩子玩的地方有推荐吗？',
        content: '题主你好，南昌适合孩子玩的地方还挺多：1、万达海洋公园，位于南昌市万达文化旅游城里面的万达茂内，设有海洋剧场、儿童海洋科学体验中心、冷水海洋，热带海洋、深海明珠等7大主题水池展区，精彩的海洋动物表演及互动节目，让大人和孩子共度欢乐时光。',
        browse: '67875',
        response: '76'
      },
      {
        title: '南昌适合孩子玩的地方有推荐吗？',
        content: '题主你好，南昌适合孩子玩的地方还挺多：1、万达海洋公园，位于南昌市万达文化旅游城里面的万达茂内，设有海洋剧场、儿童海洋科学体验中心、冷水海洋，热带海洋、深海明珠等7大主题水池展区，精彩的海洋动物表演及互动节目，让大人和孩子共度欢乐时光。',
        browse: '67875',
        response: '76'
      },
      {
        title: '南昌适合孩子玩的地方有推荐吗？',
        content: '题主你好，南昌适合孩子玩的地方还挺多：1、万达海洋公园，位于南昌市万达文化旅游城里面的万达茂内，设有海洋剧场、儿童海洋科学体验中心、冷水海洋，热带海洋、深海明珠等7大主题水池展区，精彩的海洋动物表演及互动节目，让大人和孩子共度欢乐时光。',
        browse: '67875',
        response: '76'
      },
      {
        title: '南昌适合孩子玩的地方有推荐吗？',
        content: '题主你好，南昌适合孩子玩的地方还挺多：1、万达海洋公园，位于南昌市万达文化旅游城里面的万达茂内，设有海洋剧场、儿童海洋科学体验中心、冷水海洋，热带海洋、深海明珠等7大主题水池展区，精彩的海洋动物表演及互动节目，让大人和孩子共度欢乐时光。',
        browse: '67875',
        response: '76'
      },
    ]
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