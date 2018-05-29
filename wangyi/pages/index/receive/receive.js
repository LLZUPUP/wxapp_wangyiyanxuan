// pages/index/receive/receive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[
      {
        url: 'https://zll18314831310.github.io/wxapp_wangyiyanxuan/img/maozi.png',
      },
      {
        url: 'https://zll18314831310.github.io/wxapp_wangyiyanxuan/img/maozi2.png',
      },
      {
        url: 'https://zll18314831310.github.io/wxapp_wangyiyanxuan/img/maozi3.png',
      },
      {
        url: 'https://zll18314831310.github.io/wxapp_wangyiyanxuan/img/maozi4.png',
      }
    ],
    current: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
  },
  changeSwiper(e) {
    var current = e.detail.current+1;
    this.setData({
      current
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})