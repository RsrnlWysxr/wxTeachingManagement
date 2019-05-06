// pages/login/login.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avaterIndex: 1,
  },

  onAccount: function (even) {
    this.setData({
      'uesrInfo.account': even.detail.value
    });
  },

  onPwd: function (even) {
    this.setData({
      'uesrInfo.pwd': even.detail.value
    });
  },

  onLogin: function (enve) {
    var that = this;
    var login_url = app.globalData.urlBase + "/login";

    wx.request({
      url: login_url,
      data: that.data.uesrInfo,
      header: {
        "content-type": "json"
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        res = res.data
        if (res.ispass) {
          app.globalData.name = res.name;
          app.globalData.avater = res.avater;
          app.globalData.account = res.account;
          wx.switchTab({
            url: "../index/index",
          });
        } else {
          wx.showToast({
            title: '学号或密码错误,请核对后重新登录',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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