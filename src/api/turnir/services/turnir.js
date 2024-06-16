'use strict';

/**
 * turnir service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::turnir.turnir');
