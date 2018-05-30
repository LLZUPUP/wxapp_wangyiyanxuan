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
    server: [
      {
        tit: '48小时快速退款',
        content: '收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。'
      },
      {
        tit: '满88元免邮费',
        content: '单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。'
      },
      {
        tit: '网易自营品牌',
        content: '网易原创生活类电商品牌，所有商品均为网易自营，品质保证。'
      },
      {
        tit: '免费配送到家',
        content: '在该商品支持配送地区内，支持免费配送到家'
      },
      {
        tit: '部分地区无法配送',
        content: '不支持省份: 台湾、香港、澳门、新疆'
      }
    ],
    modNum: '',
    num: 1,
    current: 1,
    hide: true,
    serHide: true,
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
  actionSer(e) {
    this.setData({
      serHide: false
    })
  },
  upactionSer(e) {
    this.setData({
      serHide: true
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