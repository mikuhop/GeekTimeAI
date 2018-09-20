var r = function(r) {
    return (r = r.toString())[1] ? r : "0" + r;
};

module.exports = {
    formatTime: function(e) {
        var t = e.getFullYear(), n = e.getMonth() + 1, a = e.getDate(), o = e.getHours(), i = e.getMinutes(), u = e.getSeconds();
        return [ t, n, a ].map(r).join("/") + " " + [ o, i, u ].map(r).join(":");
    },
    subString: function r(e, t) {
        var n = e.slice(0, t), a = n.replace(/[x00-xff]/g, "").length;
        switch (a) {
          case 0:
            return n;

          case t:
            return e.slice(0, t >> 1);

          default:
            var o = t - a, i = e.slice(o, t), u = i.replace(/[x00-xff]/g, "").length;
            return u ? e.slice(0, o) + r(i, u) : e.slice(0, o);
        }
    },
    randomFn: function(r, e) {
        var t = e - r + 1;
        return Math.floor(Math.random() * t + r);
    },
    getArrayItems: function(r, e) {
        var t = new Array();
        for (var n in r) t.push(r[n]);
        for (var a = new Array(), o = 0; o < e && t.length > 0; o++) {
            var i = Math.floor(Math.random() * t.length);
            a[o] = t[i], t.splice(i, 1);
        }
        return a;
    }
};