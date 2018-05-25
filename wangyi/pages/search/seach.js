// pages/search/seach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
  },
  getSearch(e) {
    var searchText = e.detail.value;
    this.setData({
      searchText
    })
  },
  cancelSearch(e) {
    if(this.data.searchText=='') {
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }
  }
})