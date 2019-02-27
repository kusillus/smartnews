export function loadFbSdk(appId, version) {
    return new Promise(resolve => {
      window.fbAsyncInit = function () { // eslint-disable-line func-names
        FB.init({
            appId: appId,
            xfbml: true,
            cookie: true,
            version: version,
        });
        FB.AppEvents.logPageView();
        resolve('SDK Loaded!');
      };
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });
  }

export function getFbLoginStatus() {
    return new Promise(resolve => {
        window.FB.getLoginStatus(responseStatus => {
            resolve(responseStatus);
        });
    });
}

export function fbLogin(options) {
    return new Promise(resolve => {
      window.FB.login(response => resolve(response), options);
    });
  }