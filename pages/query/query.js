// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTime: false,
    showScore: false,
    items: [{
        No: '  ',
        one: '周一',
        two: '周二',
        three: '周三',
        four: '周四',
        five: '周五'
      },
      {
        No: '第一节',
        one: '高数',
        two: '英语',
        three: '高频',
        four: '信息论',
        five: '单片机'
      },
      {
        No: '第二节',
        one: '高数',
        two: '英语',
        three: '高频',
        four: '信息论',
        five: '单片机'
      },
      {
        No: '第三节',
        one: '高数',
        two: '英语',
        three: '高频',
        four: '信息论',
        five: '单片机'
      },
      {
        No: '第四节',
        one: '高数',
        two: '英语',
        three: '高频',
        four: '信息论',
        five: '单片机'
      }
    ],
    scores:[
    {project: '高数', score: '98'},
    {project: '英语', score: '78'},
    {project: '高频', score: '89'},
    {project: '信息论', score: '86'},
    {project: '单片机', score: '78'}
    ]
  },

  kebiao: function () {
    var contra = !this.data.showTime;
    this.setData({
      showTime: contra
    })
  },

  chengji: function () {
    var contra = !this.data.showScore
    this.setData({
      showScore: contra
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