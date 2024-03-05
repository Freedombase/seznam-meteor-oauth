if (Package['accounts-ui']
    && !Package['service-configuration']
    && !Object.prototype.hasOwnProperty.call(Package, 'seznam-config-ui')) {
    console.warn(
        "Note: You're using accounts-ui and accounts-seznam,\n" +
        "but didn't install the configuration UI for the Seznam\n" +
        "OAuth. You can install it with:\n" +
        "\n" +
        "    meteor add seznam-config-ui" +
        "\n"
    );
}
