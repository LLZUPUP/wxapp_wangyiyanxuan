const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // hasCarNum: 0,
    lists: [],
    Allselected: true,
    totalPrice: false,
    selectAllStatus: true,
    totalNum: 0,
    disabled: false,
    startX: 0,
    startY: 0,
    hasCarNum: true
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
  // 计算手滑动角度函数
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  // 存储购物车数量数据函数
  getCarNum(e) {
    let totalNum = this.data.totalNum;
    wx.setStorage({
      key: 'carNum',
      data: totalNum
    })
  },
  // 取得购物车数量数据函数
  PutCarNum(e) {
    wx.getStorage({
      key: 'carNum',
      success: (res)=>{
        this.setData({
          hasCarNum: res.data
        })
      },
      
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
      totalNum: total,
    })
  },
  touchstart(e) {
    //开始触摸时 重置所有删除
    this.data.lists.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    // console.log(e.changedTouches[0].clientX)
    // console.log(e.changedTouches[0].clientY)
    // console.log(e)
    this.setData({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      lists: this.data.lists
    })
  },
  //滑动事件处理
  touchmove(e) {
      let index = e.currentTarget.dataset.index;//当前索引
      let startX = this.data.startX;//开始X坐标
      let startY = this.data.startY;//开始Y坐标
      let touchMoveX = e.touches[0].clientX;//滑动变化坐标
      let touchMoveY = e.touches[0].clientY;//滑动变化坐标
      //获取滑动角度
      let angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    this.data.lists.forEach((v, i)=> {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    this.setData({
      lists: this.data.lists
    })
  },
  del(e) {
    let Allselected = this.data.Allselected;
    let selectAllStatus = this.data.selectAllStatus;
    this.data.lists.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      lists: this.data.lists,
      
    })
    if(!this.data.lists.length) {
      this.setData({
        hasCarNum: 0,
      })
    }
    this.upLists();
    this.getTotalNum();
    this.getCarNum();
    this.getTotalPrice();
  },
  iconSelect(e) {
    console.log(e)
    let lists = this.data.lists;
    let disabled = this.data.disabled;
    let selectAllStatus = this.data.selectAllStatus;
    let Allselected = this.data.Allselected;
    const index = e.currentTarget.dataset.index;
    const select = lists[index].selected;
    lists[index].selected = !select;
    this.setData({
      lists,
      disabled: !disabled,
      Allselected: !Allselected,
      selectAllStatus: !selectAllStatus
    })
    for(let i=0;i<lists.length;i++) {
      if(!lists[i].selected) {
        this.setData({
          selectAllStatus: false,
          Allselected: false,
        })
      }
    }
    this.getTotalNum();
    this.getTotalPrice();
    if(this.data.totalPrice==false) {
      this.setData({
        disabled: true
      })
    }
    

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
    this.getTotalNum();
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
    wx.getStorage({
      key: 'lists',
      success: (res)=>{
        this.setData({
          lists: res.data,
        })
      }
    })

    if(this.data.lists.length) {
      this.setData({
        hasCarNum: true
      })
    }
    this.PutCarNum();
    this.getTotalPrice();
    this.getTotalNum();
    
    console.log(this.data.hasCarNum)
    console.log(app.globalData.carNum)
   
    
  },


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