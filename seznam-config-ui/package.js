/* global Package */
Package.describe({
    name: 'storyteller:seznam-config-ui',
    summary: 'Blaze configuration templates for Seznam OAuth.',
    version: '1.0.0',
    git: 'https://github.com/StorytellerCZ/seznam-meteor-oauth/'
});

Package.onUse(api => {
    api.versionsFrom(['2.3.6', '2.9.0', '3.0-beta.6'])
    api.use('ecmascript', 'client');
    api.use('templating@1.4.3', 'client');
    api.addFiles('seznam_login_button.css', 'client');
    api.addFiles(
        ['seznam_configure.html', 'seznam_configure.js'],
        'client'
    );
});
