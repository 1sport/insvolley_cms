'use strict';

/**
 * national-rating service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::national-rating.national-rating');
