// 全局常量配置
const PROXY_URL = 'https://ss.shihuijian.dpdns.org/?url=';    
// 例如: const PROXY_URL = 'https://douban-proxy.您的域名.workers.dev/?url=';

// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// ==========================================
//   🚀 聚合 API 站点配置
// ==========================================
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
    
    // --- 第二梯队：备用源 ---
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

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// -------------------------------------------------
// 👇 之前缺失的关键配置：API_CONFIG 👇
// -------------------------------------------------
const API_CONFIG = {
    search: {
        path: '?ac=detail&wd=',
        pagePath: '?ac=detail&wd={query}&pg={page}',
        maxPages: 2,  // 每次搜索最大并发获取页数，建议2-3页
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 暴露到全局 (非常重要，否则 search.js 找不到它们)
window.API_SITES = API_SITES;
window.API_CONFIG = API_CONFIG;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置
// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'#\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    enableCSRFProtection: true, // 是否启用CSRF保护
    allowedOrigins: ['*']       // 允许的跨域来源
};
