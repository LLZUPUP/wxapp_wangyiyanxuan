// pages/search/seach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // searchText: '',
    products:["充电","充电宝","网易充电","充电线","网易充电器","智能充电","USB充电","手机充电","智能充电器","手机壳","手机","手办","苹果手机壳","手链","阴阳师手办","手机套","云感手机","空气手机","手机支","iphone","ipad","ip","iii",
    "ipad壳","ipad套","ih","ipone","iris","iphon","男鞋","男士","男士内裤","袜子男","男式","男款","鞋子男","男士棉","内裤男","男棉",
    "女鞋","女士","女式","女款","内裤女","袜子女","睡衣女","鞋子女","女童","化妆刷",
    "空气净化器","化妆棉","化妆镜","化妆包","化妆收纳盒",],
    lists:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
  },
  // 获取搜索信息
  getSearch(e) {
    let searchText = e.detail.value;
    let products = this.data.products;
    let len = products.length;
    let lists = this.data.lists;
    lists = [];
    if(searchText==='') {
      this.setData({
        lists: [],
        searchText: ''
      })
      return
    }
    for(let i=0;i<len;i++) {
      if(products[i].indexOf(searchText)>=0){
        lists.push(products[i]);
      }
    }
    this.setData({
      searchText,
      lists
    })
    console.log(lists)
  },
  goPdt(e) {
    wx.redirectTo({
      url: "/pages/index/receive/receive"
    })
  },

  cancelSearch(e) {
    if(this.data.searchText=='') {
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }else {
      wx.showToast({
        title: '功能后续完善',
        icon: 'none'
      })
    }
  }
})