'use strict';

const plugin = {};
const nconf = require.main.require('nconf');

plugin.init = async function (params) {
    const { router } = params;

    // Define the static health check route
    const apiPath = '/health-check';
    const response = {
        status: 'ok',
        timestamp: Date.now()
    };

    router.get(apiPath, (req, res) => {
        res.status(200).json(response);
    });
};

plugin.addAdminNavigation = function (header) {
    header.plugins.push({
        route: '/plugins/health-check',
        icon: 'fa-heartbeat',
        name: 'Health Check'
    });
    return header;
};

plugin.activate = function (id) {
    console.log(`Plugin activated: ${id}`);
};

plugin.deactivate = function (id) {
    console.log(`Plugin deactivated: ${id}`);
};