// Launching
let APP_LangDir = LNCH_LanguageSelect()
if (!APP_LangDir) {
    window.location.href = "language.html"
}
LNCH_Preapare();




// Main functions
function LNCH_LanguageSelect() {
    let APP_Cookie = APP_GetCookie("language")
    if (APP_Cookie) {
        if (APP_Cookie === "kz") {
            return "pages-kz"
            // window.location.href = "pages-kz/system.html"
        } else if (APP_Cookie === "ru") {
            return "pages-ru"
            // window.location.href = "pages-ru/system.html"
        } else {
            return "pages-en"
            // window.location.href = "pages-en/system.html"
        }
    } else {
        return undefined;
        // window.location.href = "languages.html"
    }
}

function LNCH_Working(LNCH_Flag) {
    setTimeout(() => {
        if (LNCH_Flag === "0") {
            window.location.href = `${APP_LangDir}/registration.html`;
        } else if (LNCH_Flag === "1") {
            window.location.href = `${APP_LangDir}/system.html`;
        } else if (LNCH_Flag === "2") {
            window.location.href = `${APP_LangDir}/success-access.html`;
        } else {
            window.location.href = `${APP_LangDir}/server-error.html`;
        }
    }, 2000)
}

function LNCH_Preapare() {
    let APP_Cookie = APP_GetCookie("inform");
    if (APP_Cookie) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://adaptive-married-akubra.glitch.me/${APP_Cookie}`, true);
        xhr.withCredentials = false;
        xhr.send();

        xhr.onload = () => {
            LNCH_Working(xhr.responseText);
        };

        xhr.onerror = () => {
            window.location.href = `${APP_LangDir}/server-error.html`;
        };
    } else {
        setTimeout(() => {window.location.href = `${APP_LangDir}/registration.html`}, 2000);
    }
}

function APP_GetCookie(COOK_NAME) {
    let COOK_Matches = document.cookie.match(new RegExp(
        "(?:^|; )" + COOK_NAME.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return COOK_Matches ? decodeURIComponent(COOK_Matches[1]) : undefined;
}
