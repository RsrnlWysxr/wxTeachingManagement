// pages/discussion/discussion.js
var formatDate = function () {
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second = date.getSeconds();
  second = minute < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    avater: 1,
    comments: [{
        avater: 4,
        name: '李梅',
        time: '2019-05-06 20:59:58',
        comment: '我不希望看到你流泪，除非是为了幸福'
      },
      {
        avater: 3,
        name: '韩梅梅',
        time: '2019-05-06 20:59:58',
        comment: '我听别人说这世界上有一种鸟是没有脚的，它只能一直飞呀飞呀，飞累了就在风里面睡觉，这种鸟一辈子只能下地一次，而那一次就是它死亡的时候。'
      },
      {
        avater: 2,
        name: '陈欢',
        time: '2019-05-06 20:59:58',
        comment: '小时候，看着满天的星斗，当流星飞过的时候，却总是来不及许愿，长大了，遇见了自己真正喜欢的人，却还是来不及'
      },
      {
        avater: 4,
        name: '王嵩',
        time: '2019-05-06 20:59:58',
        comment: '十四年了，日子过的真快，对中年以后的人来讲，十年八年好像是指缝间的事，可是对年轻人来说，三年五年就可以是一生一世'
      },
      {
        avater: 3,
        name: '杨阳',
        time: '2019-05-06 20:59:58',
        comment: '如果你爱上了某个星球的一朵花。那么，只要在夜晚仰望星空，就会觉得漫天的繁星就像一朵朵盛开的花'
      },
      {
        avater: 2,
        name: '洪朝希',
        time: '2019-05-06 20:59:58',
        comment: '好的爱情是你通过一个人看到整个世界，坏的爱情是你为了一个人舍弃世界'
      },
      {
        avater: 1,
        name: '陈东东',
        time: '2019-05-06 20:59:58',
        comment: '阿难说，我愿化身石桥，受五百年风吹，五百年日晒，五百年雨淋，只愿她从桥上走过'
      },
      {
        avater: 4,
        name: '李西西',
        time: '2019-05-06 20:59:58',
        comment: '愿你在被打击时，记起你的珍贵，抵抗恶意 ；愿你在迷茫时，坚信你的珍贵；爱你所爱，行你所行，听从你心，无问西东'
      },
      {
        avater: 2,
        name: '周南南',
        time: '2019-05-06 20:59:58',
        comment: '你是一个聪明人，应该走出去。人应该享受这个世界，而不是企图理解这个世界'
      },
      {
        avater: 3,
        name: '白北北',
        time: '2019-05-06 20:59:58',
        comment: '网络冲浪要文明哦'
      },
      {
        avater: 2,
        name: '李梅',
        time: '2019-05-06 20:59:58',
        comment: '网上冲浪要有度'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取头像与姓名
    this.setData({
      avater: app.globalData.avater,
      name: app.globalData.name
    })
    // 读取缓存
    wx.getStorage({
      key: 'comments',
      success(res) {
        that.setData({
          comments: res.data
        })
      }
    })
  },

  updata: function (event) {
    this.setData({
      text: event.detail.value
    });
  },

  send: function (envet) {
    var text = this.data.text;
    var newComments = this.data.comments;
    var time = formatDate();
    newComments.unshift({
      avater: app.globalData.avater,
      name: app.globalData.name,
      time: time,
      comment: text
    });
    this.setData({
      text: ''
    });
    wx.setStorage({
      key: 'comments',
      data: newComments
    });
  },

  sendto: function (event) {
    this.setData({
      text: event.detail.value
    });
    this.send();
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
    wx.stopPullDownRefresh();
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