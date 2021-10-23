

export const ua = navigator.userAgent.toLowerCase();
const check = function(r){
        return r.test(ua);
    }
export const isStrict = document.compatMode == "CSS1Compat";
export const isOpera = check(/opera/);
export const isChrome = check(/chrome/);
export const isWebKit = check(/webkit/);
export const isSafari = !isChrome && check(/safari/);
export const isSafari3 = isSafari && check(/version3/);
export const isSafari4 = isSafari && check(/version4/);
export const isIE = !isOpera && check(/msie/);
export const isIE7 = isIE && check(/msie 7/);
export const isIE8 = isIE && check(/msie 8/);
export const isGecko = !isWebKit && check(/gecko/);
export const isGecko3 = isGecko && check(/rv:1.9/);
export const isBorderBox = isIE && !isStrict;
export const isWindows = () => {
    return check(/windows|win32/);
};
export const isMac = () => check(/macintosh|mac os x/);

export const  isAir = check(/adobeair/);
export const isLinux = check(/linux/);

// return {
//     browser: isChrome ? 'chrome' : '',
//     os: (isWindows ? 'windows' : (isMac ? 'mac' : ''))
// };

