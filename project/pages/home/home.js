// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559101012423&di=7f3d6a1649fd2f2d1a25d1955594de46&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FE0TcBZB9bY6og%3Dh9OuFwmxB7ZMpW8FmyXTpOVISAY29AW1535339565348.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559101012422&di=e25ef173eb2e7c14d0901f211bc6d9e0&imgtype=0&src=http%3A%2F%2Fimg.cnys.com%2Fupload%2Fpicture%2F2017%2F04-19%2FTRAkP8.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559101012422&di=ea709c0905425b259e3171c5343ac6f5&imgtype=0&src=http%3A%2F%2Ftgi1.jia.com%2F114%2F832%2F14832840.jpg"],
    url:"",
    list:[
      {
      img:"../../images/tou.jpg",
      price:15,
      title:"5L",
      type:"头淋醋"
      },
      {
        img: "../../images/small.jpg",
        price: 10,
        title: "5L",
        type:"二淋醋"
      },
      {
        img: "../../images/big.jpg",
        price: 15,
        title: "10L",
        type:"头淋醋"
      },
      {
        img: "../../images/hu.jpg",
        price: 15,
        title: "800mL",
        type: "头淋醋"
      },
      {
        img: "../../images/ping.jpg",
        price: 15,
        title: "1L",
        type:"瓶装"
      },
      {
        img: "../../images/xiang.jpg",
        price: 15,
        title: "55mL",
        type: "礼品盒"
      }
    ],
    itemlist:""
  },
  click(e){
    //swiper的图片进行点击
    let url=e.currentTarget.dataset.url;
    this.setData({
      url:url
    })
  },
  search(){
    //进行跳转到search页面
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  listClick(e){
    //点击每一项传过来的内容
    this.setData({
     itemlist: e.currentTarget.dataset.itemlist
    });
    //进行跳转到详情页
    wx.navigateTo({
      url: '/pages/detail/detail?itemlist=' + JSON.stringify(this.data.itemlist),
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