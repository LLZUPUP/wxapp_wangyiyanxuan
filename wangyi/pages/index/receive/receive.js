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
    modNum: '',
    num: 1,
    current: 1,
    hide: true,
    amounts:[
      {
        value:'藏青色',
        checked:false,
        image: '/libs/images/lanmaomin.png',
      },
      {
        value:'麻灰色',
        checked:false,
        image: '/libs/images/baimaomin.png',
      }
      
    ],
    image: '/libs/images/lanmaomin.png',
    model:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
  },
  bindAmountChange(e) {
    // console.log(e)
    let amounts = this.data.amounts;
    let strVal = e.detail.value;
    let image;
    for(let amount of amounts) {
      amount.checked = amount.value ==strVal;
      // console.log(amount)
      if(amount.checked==true) {
        image = amount.image;
      }
    }
    this.setData({
      amounts,
      model: '已选择：'+strVal,
      image
    })
  },
  changeSwiper(e) {
    var current = e.detail.current+1;
    this.setData({
      current
    })
  },
  actionSheet(e) {
    this.setData({
      hide: false,
    })
  },
  upactionSheet(e) {
    if(this.data.model) {
      this.data.modNum = '*'+this.data.num;
    }
    this.setData({
      hide: true,
      modNum: this.data.modNum,
      model: this.data.model
    })
  },
  dropNum(e) {
    let num = this.data.num;
    let model = this.data.model;
    let modNum = this.data.modNum;
    num--;
    if(num<1) {
      wx.showToast({
        title: '必须买一件',
        icon: 'none'
      })
      num=1;
    }
    this.setData({
      num,
    })

  },
  addNum(e) {
    let num = this.data.num;
    let modNum = this.data.modNum;
    let model = this.data.model;
    num++;
    this.setData({
      num,
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