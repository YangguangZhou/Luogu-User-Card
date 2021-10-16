const baseURL = "https://api.xecades.xyz/api";
const icons = [
    "site",
    "email",
    "qq",
    "zhihu",
    "github",
    "wechat",
    "luogu",
    "codeforces",
    "codepen",
    "google",
    "alipay",
    "bilibili",
    "csdn",
    "douban",
    "facebook",
    "pixiv",
    "quora",
    "taobao",
    "twitter",
    "weibo",
    "jianshu",
    "juejin"
];

function toggleBorder() {
    !window.TOG &&
        document.body.appendChild(
            (window.TOG = document.createElement("style"))
        );
    (window.CHK = !window.CHK)
        ? (TOG.innerHTML = `*{box-shadow: 0 0 0 1px cyan}`)
        : (TOG.innerHTML = "");
}

var vm = new Vue({
    el: "#app",
    data: {
        icon: icons,
        image: baseURL,
        params: "",
        background: "#1",
        text_color: "rgba(51, 51, 51, 1)",
        bg_color: "rgba(0, 0, 0, 0)",
        date: new Date().getFullYear() + "-12-31",
        str: "",
        str_placeholder: new Date().getFullYear() + " 年末",
        quote: "",
        social: [],
    },
    watch: {
        background: (e) => {
            vm.setParam("img", e.slice(1));
        },

        params: (e) => {
            vm.image = baseURL + (e ? "?" + e : "");
        },

        text_color: (e) => {
            vm.setParam("color", e.slice(5, e.length - 1).replaceAll(" ", ""));
        },

        bg_color: (e) => {
            vm.setParam("bg", e.slice(5, e.length - 1).replaceAll(" ", ""));
        },

        date: (e) => {
            vm.setParam("date", e);
        },

        str: (e) => {
            vm.setParam("str", e);
        },

        quote: (e) => {
            vm.setParam("quote", e);
        },

        social: (e) => {
            for (var i = 0; i < e.length; i++) vm.setParam(icons[i], e[i]);
        },
    },
    methods: {
        setParam(key, value) {
            var tmp = new URLSearchParams(vm.params);
            if (!value) tmp.delete(key);
            else tmp.set(key, value
                .replace(/\&/gm, "{%amp%}")
                .replace(/\</gm, "{%lt%}")
                .replace(/\>/gm, "{%gt%}"));
            vm.params = tmp.toString();
        },

        open() {
            window.open(vm.image, "_blank");
        }
    },
});
