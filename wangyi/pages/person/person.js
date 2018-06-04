// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  buyAfter(e) {
    this.setData({
      active: true
    })
    wx.showModal({
      content: '请在严选APP内申请售后服务',
      showCancel: false,
      confirmColor: '#ff0000',
      success: (res)=>{
        if(res.confirm){
          this.setData({
            active: false
          })
        }
        
      }
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心'
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