/*global cordova, module */
'use strict';

module.exports = (function() {
  var _show = function(url, successCallback, errorCallback, loading, errorUrl) {
    if(loading) {
        cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'show', [url, errorUrl, loading]);
    }
    else {
        cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'show', [url, errorUrl]);
    }
  };

  var _load = function(url) {
    cordova.exec(null, null, 'WebViewPlugin1', 'load', [url]);
  };

  var _reload = function() {
    cordova.exec(null, null, 'WebViewPlugin1', 'reload', []);
  };

  var _hide = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'hide', []);
  };

  var _hideLoading = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'hideLoading', []);
  };

  var _subscribeCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'subscribeCallback', []);
  };

  var _subscribeDebugCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'subscribeDebugCallback', []);
  };

  var _subscribeResumeCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'subscribeResumeCallback', []);
  };

  var _subscribePauseCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'subscribePauseCallback', []);
  };

  var _subscribeUrlCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'subscribeUrlCallback', []);
  };

  var _subscribeExitCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin1', 'subscribeExitCallback', []);
  };

  var _exitApp = function() {
    cordova.exec(function(){},function(){}, 'WebViewPlugin1', 'exitApp', []);
  };

  var _setWebViewBehavior = function() {
    cordova.exec(function(){},function(){}, 'WebViewPlugin1', 'webViewAdjustmenBehavior', []);
  };

  return {
    Show: _show,
    Load: _load,
    Reload: _reload,
    Hide: _hide,
    Close: _hide,
    SubscribeCallback: _subscribeCallback,
    SubscribeDebugCallback: _subscribeDebugCallback,
    SubscribeResumeCallback: _subscribeResumeCallback,
    SubscribePauseCallback: _subscribePauseCallback,
    SubscribeUrlCallback: _subscribeUrlCallback,
    SubscribeExitCallback: _subscribeExitCallback,
    ExitApp: _exitApp,
    HideLoading: _hideLoading,
    SetWebViewBehavior: _setWebViewBehavior
  };
})();
