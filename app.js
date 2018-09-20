var g = function(g) {
    return g && g.__esModule ? g : {
        default: g
    };
}(require("./utils/utils"));

App({
    globalData: {
        userInfo: null,
        headPath: "",
        shaked: !0,
        shakeWatch: !1,
        arrivePostPage: !1,
        indexpageisDrawed: !1,
        screenHeight: "",
        imgSize: {
            keywordSizePercent: "",
            tag: [],
            card: "",
            btntree: "",
            tree: "",
            title: "",
            fire: ""
        },
        move: 0,
        tagdata: {
            keywordurl: [ {
                path: "../../images/keyword/h0@2x.png",
                text: "高并发"
            }, {
                path: "../../images/keyword/h1@2x.png",
                text: "\b强无敌"
            }, {
                path: "../../images/keyword/h2@2x.png",
                text: "不加班"
            }, {
                path: "../../images/keyword/h3@2x.png",
                text: "高富帅"
            }, {
                path: "../../images/keyword/h4@2x.png",
                text: "旺财"
            }, {
                path: "../../images/keyword/h5@2x.png",
                text: "脱单"
            }, {
                path: "../../images/keyword/h6@2x.png",
                text: "码神"
            }, {
                path: "../../images/keyword/h7@2x.png",
                text: "道系"
            }, {
                path: "../../images/keyword/h8@2x.png",
                text: "王者"
            }, {
                path: "../../images/keyword/h9@2x.png",
                text: "腹黑"
            }, {
                path: "../../images/keyword/h10@2x.png",
                text: "莫愁"
            }, {
                path: "../../images/keyword/h11@2x.png",
                text: "吃鸡"
            }, {
                path: "../../images/keyword/h12@2x.png",
                text: "高端"
            }, {
                path: "../../images/keyword/h13@2x.png",
                text: "顶配"
            }, {
                path: "../../images/keyword/h14@2x.png",
                text: "升级"
            } ],
            tagurls: [ "../../images/tags/v0@2x.png", "../../images/tags/v1@2x.png", "../../images/tags/v2@2x.png", "../../images/tags/v3@2x.png", "../../images/tags/v4@2x.png", "../../images/tags/v5@2x.png", "../../images/tags/v6@2x.png", "../../images/tags/v7@2x.png", "../../images/tags/v8@2x.png", "../../images/tags/v9@2x.png", "../../images/tags/v10@2x.png", "../../images/tags/v11@2x.png", "../../images/tags/v12@2x.png", "../../images/tags/v13@2x.png", "../../images/tags/v14@2x.png", "../../images/tags/v15@2x.png", "../../images/tags/v16@2x.png", "../../images/tags/v17@2x.png", "../../images/tags/v18@2x.png", "../../images/tags/v19@2x.png", "../../images/tags/v20@2x.png", "../../images/tags/v21@2x.png", "../../images/tags/v22@2x.png", "../../images/tags/v23@2x.png", "../../images/tags/v24@2x.png", "../../images/tags/v25@2x.png", "../../images/tags/v26@2x.png", "../../images/tags/v27@2x.png", "../../images/tags/v28@2x.png", "../../images/tags/v29@2x.png", "../../images/tags/v30@2x.png", "../../images/tags/v31@2x.png", "../../images/tags/v32@2x.png", "../../images/tags/v33@2x.png", "../../images/tags/v34@2x.png", "../../images/tags/v35@2x.png", "../../images/tags/v36@2x.png", "../../images/tags/v37@2x.png", "../../images/tags/v38@2x.png", "../../images/tags/v39@2x.png", "../../images/tags/v40@2x.png", "../../images/tags/v41@2x.png" ]
        }
    },
    onLaunch: function() {
        console.log("-app onlaunch-"), this.utils = g.default, wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onLoad: function() {
        console.log("-app onLoad-");
        var g = this;
        wx.getSystemInfo({
            success: function(a) {
                g.globalData.screenHeight = a.screenHeight;
            }
        });
    },
    onShow: function() {
        console.log("-app onShow-");
    },
    onHide: function() {
        console.log("-app onHide-");
    },
    onError: function() {
        console.log("-app onError-");
    },
    onShareAppMessage: function(g) {
        return {
            title: "AI算命，摇一摇抽取你的新年签",
            path: "/pages/index/index",
            success: function(g) {},
            fail: function(g) {
                console.log(g);
            },
            complete: function(g) {
                console.log(g);
            }
        };
    }
});