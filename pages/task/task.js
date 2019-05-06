// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jiaoshi: false,
    text: "Good",
    showZuoye: false,
    showTijiao: false,
    shwoPingjia: false,
    seleced: "",
    // 显示items数组的长度
    title: '当前作业清单',
    tips: '请选择并再次点击作业提交进行提交',
    items: [{
        name: '模电',
      },
      {
        name: '数电'
      },
      {
        name: '单片机'
      },
      {
        name: '高数'
      },
      {
        name: 'C语言'
      },
      {
        name: '英语'
      },
      {
        name: '马克思'
      },
      {
        name: '高频'
      }
    ]
  },

  tijiao: function () {
    this.setData({
      jiaoshi: false
    })
    if (!this.data.showZuoye || !this.data.showTijiao) {
      this.setData({
        title: '当前作业清单',
        tips: '选择后再次点击"作业提交"进行提交',
        items: [{
            name: '模电',
          },
          {
            name: '数电'
          },
          {
            name: '单片机'
          },
          {
            name: '高数'
          },
          {
            name: 'C语言'
          },
          {
            name: '英语'
          },
          {
            name: '马克思'
          },
          {
            name: '高频'
          }
        ],
        showZuoye: true,
        shwoPingjia: false,
        showTijiao: true
      });
    } else if (this.data.showZuoye && this.data.showTijiao) {
      wx.chooseImage({
        success(res) {
          wx.showLoading({
            title: '提交中',
          });
          setTimeout(function () {
            wx.hideLoading();
            wx.showToast({
              title: '提交成功'
            });
          }, 1500)
        }
      });
    }
  },

  pingjia: function () {
    if (!this.data.showZuoye || !this.data.shwoPingjia) {
      this.setData({
        title: '当前可查询清单',
        items: [{
            name: '模电',
          },
          {
            name: '数电'
          },
          {
            name: '高数'
          },
          {
            name: '英语'
          },
          {
            name: '马克思'
          },
          {
            name: '高频'
          }
        ],
        tips: "选择后请再次点击'作业评价'显示评价",
        showTijiao: false,
        showZuoye: true,
        shwoPingjia: true
      })
    } else if (this.data.showZuoye && this.data.shwoPingjia) {
      var seleced = this.data.seleced
      var text = "Good"
      this.setData({
        jiaoshi: true,
        text: seleced + "课程作业评价: " + text
      })
    }
  },
  radioChange: function (event) {
    this.setData({
      seleced: event.detail.value
    });
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