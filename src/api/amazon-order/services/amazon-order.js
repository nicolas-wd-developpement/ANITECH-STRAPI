'use strict';

/**
 * amazon-order service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::amazon-order.amazon-order');
