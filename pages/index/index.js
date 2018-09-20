var e = getApp(), t = e.utils;

Page({
    data: {
        screenHeight: "",
        screenWidth: "",
        pixelRatio: 3,
        animationData: {},
        showFlag: !1
    },
    onLoad: function() {
        console.log("-index page onLoad 监听页面加载-");
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    screenHeight: t.windowHeight,
                    screenWidth: t.windowWidth,
                    pixelRatio: t.pixelRatio
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        console.log("-index page onShow");
        var t = this;
        console.log("showFlag默认值：" + this.data.showFlag), this.randomTagFn(), wx.getUserInfo({
            success: function(a) {
                if (!e.globalData.userInfo || !wx.getStorageSync("userInfo")) {
                    var o = a.userInfo;
                    wx.setStorage({
                        key: "userInfo",
                        data: o
                    }), e.globalData.headPath = o;
                }
                console.log(a);
                var n = a.userInfo.avatarUrl;
                wx.downloadFile({
                    url: n,
                    success: function(t) {
                        e.globalData.headPath && wx.getStorageSync("headPath") || (wx.setStorageSync("headPath", t.tempFilePath), 
                        e.globalData.headPath = t.tempFilePath, console.log(e.globalData.headPath), console.log(wx.getStorageSync("headPath")));
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                }), t.shakeFn();
            },
            fail: function(e) {
                console.log(e);
            }
        }), wx.onAccelerometerChange(function(a) {
            console.log("监听重力感应");
            (a.x > .5 || a.y > .5 || a.z > .5) && (e.globalData.shaked || (e.globalData.shaked = !0, 
            t.toposterpage()));
        }), wx.getSetting({
            success: function(e) {
                console.log(e), e.authSetting["scope.userInfo"] || wx.authorize({
                    scope: "scope.userInfo",
                    success: function(e) {
                        t.shakeFn();
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提示",
                            content: "参与本活动需要你同意微信授权，获得你的基本信息",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && wx.openSetting({
                                    success: function(e) {
                                        e.authSetting["scope.userInfo"] && t.shakeFn();
                                    }
                                });
                            }
                        });
                    }
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onHide: function() {
        console.log("-index page onHide 监听页面隐藏-"), this.setData({
            showFlag: !1
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "AI算命，摇一摇抽取你的新年签",
            path: "/pages/index/index",
            success: function(e) {
                var t = e.shareTickets;
                if (0 == t.length) return !1;
                wx.getShareInfo({
                    shareTicket: t[0],
                    success: function(e) {
                        e.encryptedData, e.iv;
                    }
                });
            },
            fail: function(e) {
                console.log(e);
            },
            complete: function(e) {
                console.log(e);
            }
        };
    },
    toposterpage: function() {
        try {
            if (!(e.globalData.headPath || wx.getStorageSync("headPath"))) {
                var t = wx.getStorageSync("userInfo").avatarUrl;
                wx.downloadFile({
                    url: t,
                    success: function(t) {
                        console.log(t), wx.setStorageSync("headPath", t.tempFilePath), e.globalData.headPath = t.tempFilePath, 
                        console.log("头像路径：| app setStorageSync "), console.log(e.globalData.headPath), console.log(wx.getStorageSync("headPath"));
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
        if (wx.createInnerAudioContext) {
            var a = wx.createInnerAudioContext();
            a.autoplay = !0, a.loop = !1, a.obeyMuteSwitch = !1, a.src = "/images/shake.wav", 
            a.onPlay(function() {});
        } else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
        this.setData({
            showFlag: !0
        }), console.log("生成动画---:" + this.data.showFlag), setTimeout(function() {
            wx.navigateTo({
                url: "../poster/poster"
            });
        }, 1e3);
    },
    shakeFn: function() {
        wx.stopAccelerometer(), wx.startAccelerometer({
            success: function() {
                e.globalData.shaked = !1, console.log(e.globalData.shaked);
            }
        });
    },
    randomTagFn: function() {
        var a = new Object(), o = [], n = Math.floor(15 * Math.random());
        a && (a.title = "../../images/keyword/h" + n + "@2x.png", a.text = e.globalData.tagdata.keywordurl[n].text, 
        a.arr = t.getArrayItems(e.globalData.tagdata.tagurls, 3)), console.log(a), wx.setStorageSync("tagSelected", a), 
        wx.getImageInfo({
            src: a.title,
            success: function(t) {
                var a = t.width / t.height;
                e.globalData.imgSize.keywordSizePercent = t.width / t.height;
                var o = 1334 / e.globalData.screenHeight * .6;
                e.globalData.move = t.width / o / 2, wx.setStorageSync("keywordSizePercent", a);
            }
        }), wx.getImageInfo({
            src: a.arr[0],
            success: function(t) {
                e.globalData.imgSize.tag[0] = t.width / t.height, o[0] = t.width / t.height, wx.setStorageSync("tagsave", o);
            }
        }), wx.getImageInfo({
            src: a.arr[1],
            success: function(t) {
                e.globalData.imgSize.tag[1] = t.width / t.height, o[1] = t.width / t.height, wx.setStorageSync("tagsave", o);
            }
        }), wx.getImageInfo({
            src: a.arr[2],
            success: function(t) {
                e.globalData.imgSize.tag[2] = t.width / t.height, o[2] = t.width / t.height, wx.setStorageSync("tagsave", o);
            }
        }), wx.getImageInfo({
            src: "../../images/bcenter.png",
            success: function(t) {
                var a = t.width / t.height;
                e.globalData.imgSize.card = t.width / t.height, wx.setStorageSync("card", a);
            }
        }), wx.getImageInfo({
            src: "../../images/pretree.png",
            success: function(t) {
                var a = t.width / t.height;
                e.globalData.imgSize.btntree = t.width / t.height, wx.setStorageSync("btntree", a);
            }
        }), wx.getImageInfo({
            src: "../../images/tree.png",
            success: function(t) {
                var a = t.width / t.height;
                e.globalData.imgSize.tree = t.width / t.height, wx.setStorageSync("tree", a);
            }
        }), wx.getImageInfo({
            src: "../../images/atitle.png",
            success: function(t) {
                var a = t.width / t.height;
                e.globalData.imgSize.title = t.width / t.height, wx.setStorageSync("title", a);
            }
        }), wx.getImageInfo({
            src: "../../images/fireworks.png",
            success: function(t) {
                var a = t.width / t.height;
                e.globalData.imgSize.fire = t.width / t.height, wx.setStorageSync("fire", a);
            }
        });
    }
});