// API站点配置
const API_SITES = {
    // --- 第一梯队：速度快，资源全，HTTPS支持好 ---
    lz: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/',
        name: '量子资源',
        type: 'json'
    },
    ff: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8/',
        name: '非凡资源',
        type: 'json'
    },
    hn: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/',
        name: '红牛资源',
        type: 'json'
    },
    ik: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/',
        name: 'iKun资源',
        type: 'json'
    },
    
    // --- 第二梯队：备用源，有些可能有广告或速度稍慢 ---
    gs: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8/',
        name: '光速资源',
        type: 'json'
    },
    bj: {
        api: 'https://api.1080zyku.com/inc/apijson.php/provide/vod/',
        name: '暴风资源',
        type: 'json'
    },
    sd: {
        api: 'https://api.sdzyapi.com/api.php/provide/vod/from/sdm3u8/',
        name: '闪电资源',
        type: 'json'
    }
};
