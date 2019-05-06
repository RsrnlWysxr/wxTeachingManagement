// pages/course/course.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showQiandao: false,
    showJiance: false,
    hasQiandao: false,
    teacher: "王红",
    course: "数字信号处理",
  },

  qiandao: function () {
    if (!this.data.showQiandao && !this.data.hasQiandao) {
      this.setData({
        showQiandao: true,
      });
    } else {
      if (!this.data.hasQiandao) {
        wx.showLoading({
          title: '签到中',
        })
        setTimeout(function () {
          wx.hideLoading();
          wx.showToast({
            title: '签到成功'
          });
        }, 1500)
        this.setData({
          showQiandao: false,
          hasQiandao: true
        });
      } else {
        wx.showToast({
          title: '已签到,请安心上课哦~~~O( ∩ _ ∩ )O',
          icon: 'none'
        });
      }
    }
  },

  jianyan: function () {
    if (!this.data.hasQiandao) {
      wx.showToast({
        title: '请先进行签到',
        icon: 'none'
      });
    } else {
      wx.chooseImage({
        success(res) {
            wx.showToast({
              title: '上传成功'
            })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      student: app.globalData.name
    });
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