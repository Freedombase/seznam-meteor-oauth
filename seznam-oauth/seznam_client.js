import Seznam from './namespace.js';
import { Random } from 'meteor/random';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { OAuth } from 'meteor/oauth';

Seznam.requestCredential = (options, credentialRequestCompleteCallback) => {
    if (!credentialRequestCompleteCallback && typeof options === 'function') {
        credentialRequestCompleteCallback = options;
        options = {};
    } else if (!options) {
        options = {};
    }

    const config = ServiceConfiguration.configurations.findOne({service: 'seznam'});
    if (!config) {
        credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError());
        return;
    }

    const credentialToken = Random.secret();

    const scope = (options?.requestPermissions) || config.scopes || ['identity'];
    const flatScope = scope.map(encodeURIComponent).join(',');

    const loginStyle = OAuth._loginStyle('seznam', config, options);

    const loginUrl =
        'https://login.szn.cz/api/v1/oauth/auth' +
        '?client_id=' + config.clientId +
        '&scope=' + flatScope +
        '&response_type=code' +
        '&redirect_uri=' + OAuth._redirectUri('seznam', config) +
        '&state=' + OAuth._stateParam(loginStyle, credentialToken, options?.redirectUrl);

    OAuth.launchLogin({
        loginService: 'seznam',
        loginStyle,
        loginUrl,
        credentialRequestCompleteCallback,
        credentialToken,
        popupOptions: {width: 500, height: 750}
    });
};
