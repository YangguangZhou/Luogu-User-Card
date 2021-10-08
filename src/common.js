const anafanafo = require('anafanafo');

const NAMECOLOR = {
    "Gray": "#bbbbbb",
    "Blue": "#0e90d2",
    "Green": "#5eb95e",
    "Orange": "#e67e22",
    "Red": "#e74c3c",
    "Purple": "#9d3dcf",
    "Cheater": "#ad8b00"
}

class Card {
    constructor({
        width = 450,
        height = 250,
        title = "",
        body = "",
        titleHeight = 25,
        hideTitle = false,
        css = "",
        darkMode = "",
        paddingX = 25,
        paddingY = 35,
        hideBorder = false,
    }) {
        this.width = width;
        this.height = height;
        this.titleHeight = titleHeight;
        this.title = title;
        this.body = body;
        this.hideTitle = hideTitle;
        this.css = css;
        this.darkMode = darkMode;
        this.paddingX = paddingX;
        this.paddingY = paddingY;
        this.hideBorder = hideBorder;
    }

    render() {
        var d = new Date();
        var beijingTime = new Date(d.getTime() + (parseInt(d.getTimezoneOffset()/60) + 8) * 3600 * 1000);
        var timeStr = `${beijingTime.getFullYear()}-${(beijingTime.getMonth()+1)<10?"0":""}${beijingTime.getMonth()+1}-${beijingTime.getDate()<10?"0":""}${beijingTime.getDate()} ${beijingTime.getHours()<10?"0":""}${beijingTime.getHours()}:${beijingTime.getMinutes()<10?"0":""}${beijingTime.getMinutes()}:${beijingTime.getSeconds()<10?"0":""}${beijingTime.getSeconds()}`
        
        const cardSize = {
            width: this.width + 2*this.paddingX,
            height: this.height + 2*this.paddingY,
        };
        if(!this.hideTitle) cardSize.height += this.titleHeight;

        const bgColor = this.darkMode?"#444444":"#fffefe";
        let borderColor = "";
        if(!this.hideBorder) borderColor = this.darkMode?"#444444":"#E4E2E2";

        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="${cardSize.width}" height="${cardSize.height}" viewBox="0 0 ${cardSize.width} ${cardSize.height}" fill="none">
                <style>
                    .text { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${this.darkMode?"#fffefe":"#333333"} }
                    .about-text { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${this.darkMode?"#fffefe":"#333333"} }
                    .about-text-grey { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: #848484 }
                    .title {fill: ${this.darkMode?"#fffefe":"#333333"}}
                    .line { stroke:${this.darkMode?"#666666":"#dddddd"}; stroke-width:1 }
                    ${this.css}
                </style>
                <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="${borderColor}" width="99%" fill="${bgColor}" stroke-opacity="1" />
                
                ${this.hideTitle ? `` : `
                <g transform="translate(${this.paddingX}, ${this.paddingY})">
                    ${this.title}
                </g>`}

                <g transform="translate(${this.paddingX}, ${this.hideTitle ? this.paddingY : this.paddingY + this.titleHeight})">
                    ${this.body}
                </g>
                <g transform="translate(${this.paddingX}, ${cardSize.height - this.paddingY})"><text x="0" y="15" class="about-text-grey">卡片生成时间：${timeStr}</text></g>
            </svg>`;
    }
}

/**
 * 渲染错误卡片
 * @param {string} e 描述错误的文本
 * @param {Object} option 其余选项
 */
const renderError = (e, option) => {
    const css = `.t {font: 600 18px 'Microsoft Yahei UI'; fill: #e74c3c;}`
    const text = `<text class="t" dominant-baseline="text-before-edge">${e}</text>`
    return new Card({
        width: 300,
        height: 23,
        hideTitle: true,
        css,
        body: text,
        paddingY: 20,
        paddingX: 20,
        ...option,
    }).render();
};

/**
 * 渲染 ccf badge
 * @param {number} level CCF等级
 * @param {number} x badge的x坐标
 * @returns {string} ccf badge的svg字符串
 */
const renderCCFBadge = (level, x) => {
    const ccfColor = (ccf) => {
        if(ccf >= 3 && ccf <= 5) return "#5eb95e";
        if(ccf >= 6 && ccf <= 7) return "#3498db";
        if(ccf >= 8) return "#f1c40f";
        return null;
    }
    return `
    <svg xmlns="http://www.w3.org/2000/svg" x="${x}" y="-14" width="18" height="18" viewBox="0 0 18 18" fill="${ccfColor(level)}" style="margin-bottom: -3px;">
        <path d="M16 8C16 6.84375 15.25 5.84375 14.1875 5.4375C14.6562 4.4375 14.4688 3.1875 13.6562 2.34375C12.8125 1.53125 11.5625 1.34375 10.5625 1.8125C10.1562 0.75 9.15625 0 8 0C6.8125 0 5.8125 0.75 5.40625 1.8125C4.40625 1.34375 3.15625 1.53125 2.34375 2.34375C1.5 3.1875 1.3125 4.4375 1.78125 5.4375C0.71875 5.84375 0 6.84375 0 8C0 9.1875 0.71875 10.1875 1.78125 10.5938C1.3125 11.5938 1.5 12.8438 2.34375 13.6562C3.15625 14.5 4.40625 14.6875 5.40625 14.2188C5.8125 15.2812 6.8125 16 8 16C9.15625 16 10.1562 15.2812 10.5625 14.2188C11.5938 14.6875 12.8125 14.5 13.6562 13.6562C14.4688 12.8438 14.6562 11.5938 14.1875 10.5938C15.25 10.1875 16 9.1875 16 8ZM11.4688 6.625L7.375 10.6875C7.21875 10.8438 7 10.8125 6.875 10.6875L4.5 8.3125C4.375 8.1875 4.375 7.96875 4.5 7.8125L5.3125 7C5.46875 6.875 5.6875 6.875 5.8125 7.03125L7.125 8.34375L10.1562 5.34375C10.3125 5.1875 10.5312 5.1875 10.6562 5.34375L11.4688 6.15625C11.5938 6.28125 11.5938 6.5 11.4688 6.625Z">
        </path>
    </svg>`
}

/**
 * 渲染柱状图
 * @param {Object[]} datas 柱状图的数据数组
 * @param {string} datas.label 一条数据的标签
 * @param {string} datas.color 一条数据的颜色
 * @param {number} datas.data 一条数据的数值
 * @param {number} labelWidth 标签宽度
 * @param {number} progressWidth 柱状图的长度
 * @param {string} [unit] 数据单位
 */
const renderChart = (datas, labelWidth, progressWidth, unit) => { //(label, color, height, num, unit) => {
    let chart = "";
    let maxNum = datas.reduce((a, b) => Math.max(a, b.data), 0);
    maxNum = (parseInt((maxNum-1) / 100) + 1) * 100;

    for(let i = 0; i < datas.length; ++i) {
        const width = (datas[i].data+1) / (maxNum+1) * progressWidth;
        chart += `
        <g transform="translate(0, ${i*30})">
            <text x="0" y="15" class="text">${datas[i].label}</text>
            <text x="${width + labelWidth + 10}" y="15" class="text">${datas[i].data + unit}</text>
            <rect height="11" fill="${datas[i].color}" rx="5" ry="5" x="${labelWidth}" y="5" width="${width}"></rect>
        </g>
        `
    }

    const bodyHeight = datas.length * 30 + 10;
    const dw = progressWidth / 4;
    let coordinate = "";
    for(let i = 0; i <= 4; ++i) {
        coordinate += `
        <line x1="${labelWidth + dw*i}" y1="0" x2="${labelWidth + dw*i}" y2="${bodyHeight - 10}"    class="line"/>
        <text x="${labelWidth + dw*i - (i==0?3:5) }" y="${bodyHeight}"    class="text">${maxNum*i/4}</text>
        `;
    }
    return coordinate + chart;
}

/**
 * 
 * @param {string} name 用户名
 * @param {string} color 用户颜色
 * @param {number} ccfLevel 用户ccf等级
 * @param {string} title 标题的后缀
 * @param {string} rightTop 右上角的标签（展示总数）
 */
const renderNameTitle = (name, color, ccfLevel, title, cardWidth, rightTop, tag) => {
    if(tag=="null")
    {
        tag="";
    }
    if(color=="Cheater")
    {
        tag="作弊者";
    }
    const tagLength = anafanafo(tag)/10*1.2;
    const nameLength = anafanafo(name)/10*1.8;
    const nameColor = NAMECOLOR[color];
    const tagSVG = tag?`<defs><filter x="-0.05" y="-0.05" width="1.1" height="1.1" id="tagFilter"><feFlood flood-color="${nameColor}"/><feComposite in="SourceGraphic"/></filter></defs><text filter="url(#tagFilter)" x="${nameLength + (ccfLevel < 3 ? 10 : 28)}" y="-1" fill="white" font-weight="bold" textLength="${tagLength}" font-size="12">${tag}</text>`:``;

    return `
    <g transform="translate(0, 0)" font-family="Verdana, Microsoft Yahei" text-rendering="geometricPrecision">
        <text x="0" y="0" fill="${nameColor}" font-weight="bold" textLength="${nameLength}" font-size="18">
            ${name}
        </text>
        ${ccfLevel < 3 ? "" : renderCCFBadge(ccfLevel, nameLength + 5)}
        ${tagSVG}
        <text x="${nameLength + (ccfLevel < 3 ? 10 : 28) + (tag?tagLength+5:0)}" y="0" class="title" font-weight="normal" font-size="18">
            ${title}
        </text>
        <text x="${cardWidth - 160}" y="0" class="title" font-weight="normal" font-size="13px">
            ${rightTop}
        </text>
    </g>`;
}

/**
 * 
 * @param {string} userType 用户类型
 * @param {number} followerCount 粉丝数量
 * @param {number} followingCount 此用户关注的人数
 * @param {number} ranking 咕值排名
 * @param {string} slogan 个性签名
 */
const renderAboutText = (userType,followerCount,followingCount,ranking,slogan,darkmode=false) => {
    var iconColor = darkmode?"#ffffff":"#000000";
    let icons = `<svg t="1615610084159" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2114" width="16" height="16" x="0" y="3"><path d="M511.82655 556.277436c-135.928832 0-246.477624-110.546745-246.477624-246.477624S375.896694 63.322188 511.82655 63.322188c135.930879 0 246.477624 110.546745 246.477624 246.477624S647.757428 556.277436 511.82655 556.277436zM511.82655 108.135836c-111.202685 0-201.662953 90.481757-201.662953 201.662953s90.460268 201.662953 201.662953 201.662953c111.159706 0 201.662953-90.481757 201.662953-201.662953S622.986255 108.135836 511.82655 108.135836z" p-id="2115" fill="${iconColor}"></path><path d="M870.340853 959.603341 153.314293 959.603341c-37.068244 0-67.220984-30.15274-67.220984-67.220984 0-3.061732 0.656963-75.535347 54.923914-147.879002 31.596625-42.143842 74.835406-75.578326 128.576377-99.474572 65.559135-29.143761 147.091056-43.937698 242.23295-43.937698 95.14394 0 176.630836 14.792914 242.276952 43.937698 53.741995 23.896246 96.980775 57.33073 128.577401 99.474572 54.266951 72.342632 54.880935 144.81727 54.880935 147.879002C937.561837 929.4506 907.409097 959.603341 870.340853 959.603341zM511.82655 645.905756c-156.280346 0-271.553743 42.712801-333.436138 123.501802-46.38954 60.567447-47.439452 122.449843-47.483454 123.062803 0 12.254092 10.021238 22.320355 22.406313 22.320355l717.02656 0c12.341073 0 22.407336-10.066263 22.407336-22.407336 0-0.524956-1.050935-62.406329-47.440475-122.974799C783.33629 688.618557 668.063917 645.905756 511.82655 645.905756z" p-id="2116" fill="${iconColor}"></path></svg><svg t="1615610802149" class="icon" viewBox="0 0 1201 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2977" width="16" height="16" x="0" y="33"><path d="M903.62324902 526.69698945L548.15650859 882.26979013l-348.82030019-347.64185302c-93.17980107-93.20336982-96.00807393-247.83917959-6.16327735-337.69576055 91.30607051-91.22357901 239.99072344-92.01313828 331.55605195-1.75588594a32.99651455 32.99651455 0 0 0 46.25404278 0.10606026A234.36953086 234.36953086 0 0 1 734.30399023 128.34656387a32.99651455 32.99651455 0 0 0 32.85510118-33.19685069c-0.09427588-18.24235927-15.31981055-33.12614443-33.19685069-32.85510117a299.92653545 299.92653545 0 0 0-185.95892988 65.2977457C429.97006338 33.06912734 255.91344717 40.79973887 146.51821602 150.20675528c-113.5197958 113.5197958-112.41205576 306.9500792 1.69696318 426.53887646a43.6025373 43.6025373 0 0 0 5.46799395 5.89223496c0.81312803 0.75420615 1.63804131 1.43770518 2.46295458 2.09763545l368.73605303 367.59295986a32.99651455 32.99651455 0 0 0 46.67828467 0l378.74106826-378.87069727a33.02715411 33.02715411 0 0 0-46.7136378-46.70185253z" fill="${iconColor}" p-id="2978"></path><path d="M1085.03337412 221.10212393h-125.03322246V96.03354834a33.02597636 33.02597636 0 1 0-66.05195186 0v125.06857559H768.92676172a32.99651455 32.99651455 0 1 0 0 65.99302998h125.02143808v125.04500684a33.02597636 33.02597636 0 1 0 66.05195186-1e-8V287.09515391h125.03322246a32.99651455 32.99651455 0 0 0 0-65.99302998z" fill="${iconColor}" p-id="2979"></path></svg><svg t="1615610889864" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3714" width="16" height="16" x="0" y="63"><path d="M924 467.1H768.2c-10.8 0-19.5 8.7-19.5 19.5s8.7 19.5 19.5 19.5h136.3v331.1H690.3V175c0-21.5-17.4-38.9-38.9-38.9H378.7c-21.5 0-38.9 17.4-38.9 38.9v662.1H125.6V408.7h136.3c10.8 0 19.5-8.7 19.5-19.5s-8.7-19.5-19.5-19.5H106.1c-10.8 0-19.5 8.7-19.5 19.5v467.4c0 10.8 8.7 19.5 19.5 19.5H924c10.8 0 19.5-8.7 19.5-19.5v-370c0-10.8-8.8-19.5-19.5-19.5z m-272.6 370H378.7V213.9c0-21.5 17.4-38.9 38.9-38.9h194.7c21.5 0 38.9 17.4 38.9 38.9v623.2zM456.6 311.3v19.5H515v97.4h39V252.9h-39l-58.4 58.4z" p-id="3715" fill="${iconColor}"></path></svg><svg t="1615610958838" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5348" width="16" height="16" x="0" y="93"><path d="M875.126 133.297c-28.672-28.673-66.796-44.464-107.352-44.464-40.545 0-78.667 15.79-107.344 44.464L183.644 610.09c-22.65 22.637-76.64 163.393-117.947 277.491-4.598 12.727-1.668 26.723 7.642 36.524 6.667 7.03 16.051 11.062 25.746 11.062 3.516 0 7.004-0.521 10.353-1.547 118.15-36.01 264.179-84.123 288.894-108.83l476.794-476.797c59.187-59.192 59.187-155.505 0-214.696M313.34 789.995c-35.18 13.91-91.74 33.58-155.918 54.2 23.282-61.807 45.067-116.267 60.022-150.096l95.896 95.896z m378.072-358.698L373.234 749.474 258.958 635.198l318.176-318.183 114.279 114.282z m75.981-75.98l-25.773 25.77-114.28-114.278 25.77-25.773 114.283 114.28z m57.526-57.526l-7.321 7.319L703.32 190.828l7.316-7.32c15.26-15.261 35.551-23.666 57.137-23.666s41.88 8.407 57.143 23.667c31.505 31.505 31.505 82.773 0.003 114.282M924.94 857.775H451.812c-19.577 0-35.502 15.926-35.502 35.502s15.926 35.502 35.502 35.502h473.126c19.577 0 35.503-15.926 35.503-35.502s-15.926-35.502-35.503-35.502" p-id="5349" fill="${iconColor}"></path></svg>
                            `
    let line1 = `<g transform="translate(25,0)"><text x="0" y="15" class="about-text">用户类型：${userType}</text></g>`
    let line2 = `<g transform="translate(25,30)"><text x="0" y="15" class="about-text">TA关注了${followingCount}人，共有${followerCount}人关注TA</text></g>`
    let line3 = `<g transform="translate(25,60)"><text x="0" y="15" class="about-text">咕值排名：第${ranking}名</text></g>`
    let line4 = "";
    if(slogan)
    {
        line4 = `<g transform="translate(25,90)"><text x="0" y="15" class="about-text">${slogan}</text></g>`
    }
    else
    {
        line4 = `<g transform="translate(25,90)"><text x="0" y="15" class="about-text-grey">这个人很懒，连个性签名也懒得写</text></g>`
    }
    return icons+line1+line2+line3+line4;
}
module.exports = { 
    NAMECOLOR,
    Card,
    renderError,
    renderCCFBadge,
    renderChart,
    renderNameTitle,
    renderAboutText
};
