var e = getApp(), a = e.utils;

Page({
    data: {
        screenHeight: "",
        screenWidth: "",
        pixelRatio: 3,
        scale: "",
        bjtempFilePath: "",
        randomTags: {},
        userInfo: {}
    },
    onLoad: function(e) {
        console.log("-poster page onLoad-");
        var a = this;
        wx.stopAccelerometer(), this.setData({
            randomTags: wx.getStorageSync("tagSelected"),
            userInfo: wx.getStorageSync("userInfo")
        }, function() {
            console.log("-start-"), console.log(a.data.randomTags), console.log(a.data.userInfo), 
            console.log("--"), console.log(wx.getStorageSync("tagSelected")), console.log(wx.getStorageSync("userInfo")), 
            console.log("-end-"), a.canvasRendering();
        });
    },
    onReady: function() {
        if (console.log("-poster page onReady-"), wx.createInnerAudioContext) {
            console.log("1");
            var e = wx.createInnerAudioContext();
            e.autoplay = !0, e.loop = !1, e.obeyMuteSwitch = !1, e.src = "/images/opening.wav", 
            e.onPlay(function() {
                setTimeout(function() {
                    e.stop();
                }, 2e3);
            });
        } else wx.showModal({
            title: "提示",
            content: "您当前微信版本过低，无法感受摇签音频，请升级到最新微信版本后重试。"
        });
    },
    onShow: function() {
        wx.stopAccelerometer();
    },
    canvasRendering: function() {
        var t = this, o = wx.createCanvasContext("shakepage1"), n = wx.createCanvasContext("shakepage2"), s = wx.getStorageSync("headPath") || e.globalData.headPath;
        console.log(s), wx.getSystemInfo({
            success: function(i) {
                t.setData({
                    screenWidth: i.windowWidth,
                    screenHeight: i.windowHeight,
                    pixelRatio: i.pixelRatio,
                    scale: 750 / i.screenWidth
                }, function() {
                    var i = t.data.screenWidth, c = t.data.screenHeight, g = Math.ceil(t.data.screenWidth / (45 / t.data.scale)), r = Math.ceil(t.data.screenHeight / (25 / t.data.scale)), l = [ "0.1945", "0.1945", "0.1945" ], d = e.globalData.imgSize.keywordSizePercent || wx.getStorageSync("keywordSizePercent"), h = e.globalData.imgSize.tag || wx.getStorageSync("tagsave") || l, w = (e.globalData.imgSize.card || wx.getStorageSync("card"), 
                    e.globalData.imgSize.tree || wx.getStorageSync("tree")), m = e.globalData.imgSize.title || wx.getStorageSync("title"), u = e.globalData.imgSize.fire || wx.getStorageSync("fire"), f = 1334 / c, S = 5 / f, p = s || e.globalData.headPath, x = .15 * i / 2, v = .5 * i - S, I = .6 * c;
                    n.beginPath();
                    for (y = 0; y < g; y++) for (P = 0; P < r; P++) n.save(), n.drawImage("../../images/bg.jpg", 45 * y / t.data.scale, 25 * P / t.data.scale, 45 / t.data.scale, 25 / t.data.scale), 
                    n.restore();
                    var b = e.globalData.imgSize.btntree || wx.getStorageSync("btntree");
                    n.drawImage("../../images/atitle.png", .169 * i, .031 * c, .66667 * i, .66667 * i / m), 
                    n.drawImage("../../images/fireworks.png", 0, .08 * c, i, i / u), n.drawImage("../../images/bcenter.png", (i - 750 / f) / 2, 90 / f, 750 / f, 992 / f), 
                    n.drawImage("../../images/pretree.png", 0, c - i / b, i, i / b), n.drawImage(t.data.randomTags.title, (i - 75 / f * d) / 2, .22 * c, 75 / f * d, 75 / f);
                    for (y = -1; y < 2; y++) n.beginPath(), n.arc(i * (.5 + .1133 * y) - S, .3 * c, 5, 0, 2 * Math.PI), 
                    n.stroke(), n.drawImage(t.data.randomTags.arr[y + 1], i * (.47 + .11 * y) - S, .32 * c, .057 * i, .057 * i / h[y + 1]);
                    n.setFontSize(16), n.setTextAlign("center"), n.fillText(a.subString(t.data.userInfo.nickName, 16), .5 * i, .69 * c), 
                    n.arc(v, I, x, 0, 2 * Math.PI), n.clip(), n.drawImage(p, v - x, I - x, 2 * x, 2 * x), 
                    n.save(), n.draw(!1, function() {
                        e.globalData.canvasDrawOver = !0;
                    }), o.beginPath();
                    for (y = 0; y < g; y++) for (var P = 0; P < r; P++) o.save(), o.drawImage("../../images/bg.jpg", 44 * y / t.data.scale, 23 * P / t.data.scale, 45 / t.data.scale, 25 / t.data.scale), 
                    o.restore();
                    o.drawImage("../../images/atitle.png", .169 * i, .031 * c, .66667 * i, .66667 * i / m), 
                    o.drawImage("../../images/fireworks.png", 0, .08 * c, i, i / u), o.drawImage("../../images/bcenter.png", (i - 750 / f) / 2, 90 / f, 750 / f, 992 / f), 
                    o.drawImage("../../images/tree.png", 0, c - i / w, i, i / w), o.drawImage(t.data.randomTags.title, (i - 75 / f * d) / 2, .22 * c, 75 / f * d, 75 / f);
                    for (var y = -1; y < 2; y++) o.beginPath(), o.arc(i * (.5 + .1133 * y) - S, .3 * c, 5, 0, 2 * Math.PI), 
                    o.stroke(), o.drawImage(t.data.randomTags.arr[y + 1], i * (.47 + .11 * y) - S, .32 * c, .057 * i, .057 * i / h[y + 1]);
                    o.setFontSize(16), o.setTextAlign("center"), o.fillText(a.subString(t.data.userInfo.nickName, 16), .5 * i, .69 * c), 
                    o.arc(v, I, x, 0, 2 * Math.PI), o.clip(), o.drawImage(p, v - x, I - x, 2 * x, 2 * x), 
                    o.save(), o.draw(!1, function() {
                        wx.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: t.data.screenWidth,
                            height: t.data.screenHeight,
                            destWidth: t.data.screenWidth * t.data.pixelRatio,
                            destHeight: t.data.screenHeight * t.data.pixelRatio,
                            canvasId: "shakepage1",
                            success: function(e) {
                                t.setData({
                                    bjtempFilePath: e.tempFilePath
                                }, function() {});
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    });
                });
            }
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "我的新年签是" + wx.getStorageSync("tagSelected").text + "，你的呢？",
            path: "/pages/index/index",
            imageUrl: this.data.bjtempFilePath,
            success: function(e) {
                var a = e.shareTickets;
                if (0 == a.length) return !1;
                wx.getShareInfo({
                    shareTicket: a[0],
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
    onUserSaveImageRight: function() {
        console.log("-click-");
        var e = this;
        if (!wx.saveImageToPhotosAlbum) return wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        }), void console.log("version low");
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.writePhotosAlbum"] ? (console.log("1-已经授权《保存图片》权限"), e.saveimgfn()) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        console.log("用户对相册-授权成功"), e.saveimgfn();
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提示",
                            content: "请您授权保存到系统相册",
                            showCancel: !1,
                            success: function(a) {
                                a.confirm && wx.openSetting({
                                    success: function(a) {
                                        a.authSetting["scope.writePhotosAlbum"] ? setTimeout(function() {
                                            e.saveimgfn();
                                        }, 500) : wx.showModal({
                                            title: "提示",
                                            content: "您未授权，无法将海报保存到相册，你可以截屏得到海报，或者再次点击'保存海报'按钮并授权",
                                            showCancel: !1
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    saveimgfn: function() {
        var e = this.data.bjtempFilePath;
        console.log(e), e ? wx.saveImageToPhotosAlbum({
            filePath: e,
            success: function(e) {
                wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 1500
                });
            },
            fail: function() {
                wx.showToast({
                    title: "保存失败",
                    icon: "fail",
                    duration: 1500
                });
            }
        }) : this.saveImage();
    }
});