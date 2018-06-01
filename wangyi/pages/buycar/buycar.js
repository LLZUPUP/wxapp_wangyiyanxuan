const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasCarNum: 0,
    lists: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
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
    // if (app.globalData.carNum) {
    //   this.setData({
    //     hasCarNum: app.globalData.carNum
    //   })
    // }
    console.log(app.globalData.carNum)
    wx.getStorage({
      key: 'lists',
      success: (res)=>{
        this.setData({
          lists: res.data,
        })
      }
    })
    wx.getStorage({
      key: 'carNum',
      success: (res)=> {
        this.setData({
          hasCarNum: res.data
        })
      }
    })
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