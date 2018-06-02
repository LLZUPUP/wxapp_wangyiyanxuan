const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasCarNum: 0,
    lists: [],
    Allselected: true,
    totalPrice: false,
    selectAllStatus: true,
    totalNum: 0,
    disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 存储数组函数
  upLists(e) {
    wx.setStorage({
      key: 'lists',
      data: this.data.lists
    })
  },
  // 存储购物车数量数据函数
  getCarNum(e) {
    let totalNum = this.data.totalNum;
    wx.setStorage({
      key: 'carNum',
      data: totalNum
    })
  },
  //  总价计算函数封装
  getTotalPrice(e) {
    let lists = this.data.lists;
    let total = 0;
    for(let i = 0;i<lists.length;i++) {
      if(lists[i].selected) {
        total += lists[i].num*lists[i].price;
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },
  // 总和计算函数封装
  getTotalNum(e) {
    let lists = this.data.lists;
    let total = 0;
    for(let i = 0;i<lists.length;i++) {
      if(lists[i].selected) {
        total += lists[i].num;
      }
    }
    this.setData({
      totalNum: total
    })
  },
  iconSelect(e) {
    console.log(e)
    let lists = this.data.lists;
    let disabled = this.data.disabled;
    let selectAllStatus = this.data.selectAllStatus;
    const index = e.currentTarget.dataset.index;
    const select = lists[index].selected;
    lists[index].selected = !select;
    for(let i=0;i<lists.length;i++) {
      if(lists[i].selected==false) {
        this.setData({
          selectAllStatus: false,
          Allselected: false,
        })
      }else {
        this.setData({
          selectAllStatus: true
        })
      }
    }
    this.setData({
      lists,
      disabled
    })
    console.log(this.data.selected)
    this.getTotalPrice();


  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    let Allselected = this.data.Allselected;
    let disabled = this.data.disabled;
    let lists = this.data.lists;
    selectAllStatus = !selectAllStatus;
    Allselected = !Allselected;
    disabled = !disabled;
    for(let i=0;i<lists.length;i++) {
      lists[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus,
      Allselected,
      disabled,
      lists
    })
    this.getTotalPrice();
  },
  dropNum(e) {
    const index =e.currentTarget.dataset.index;
    let lists = this.data.lists;
    let num = lists[index].num;
    num--;
    if(num<1){
      wx.showToast({
        title: '必须买一件',
        icon: 'none'
      })
      num=1;
    }
    lists[index].num = num;
    this.setData({
      lists
    })
    this.getTotalPrice();
    this.getTotalNum();
    this.getCarNum();
    this.upLists();
  },
  
  addNum(e) {
    const index =e.currentTarget.dataset.index;
    let lists = this.data.lists;
    let num = lists[index].num;
    num++;
    lists[index].num = num;
    this.setData({
      lists
    })
    this.getTotalPrice();
    this.getTotalNum();
    this.getCarNum();
    this.upLists();
  },

  onShow: function () {
    // console.log(app.globalData.carNum)
    wx.getStorage({
      key: 'lists',
      success: (res)=>{
        this.setData({
          lists: res.data
        })
      }
    })
    this.getTotalPrice();
    this.setData({
      hasCarNum: app.globalData.carNum
    })
    console.log(this.data.hasCarNum)
    this.getTotalNum();
    console.log(this.data.totalNum)
   
    
  },


  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
    wx.getStorage({
      key: 'lists',
      success: (res)=>{
        this.setData({
          lists: res.data
        })
      }
    })
    this.getTotalNum();
    this.getTotalPrice();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */


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