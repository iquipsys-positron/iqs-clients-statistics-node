"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const StatisticsNullClientV1_1 = require("../version1/StatisticsNullClientV1");
const StatisticsDirectClientV1_1 = require("../version1/StatisticsDirectClientV1");
const StatisticsHttpClientV1_1 = require("../version1/StatisticsHttpClientV1");
const StatisticsLambdaClientV1_1 = require("../version1/StatisticsLambdaClientV1");
const StatisticsHttpProxyClientV1_1 = require("../version1/StatisticsHttpProxyClientV1");
class StatisticsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(StatisticsClientFactory.NullClientV1Descriptor, StatisticsNullClientV1_1.StatisticsNullClientV1);
        this.registerAsType(StatisticsClientFactory.DirectClientV1Descriptor, StatisticsDirectClientV1_1.StatisticsDirectClientV1);
        this.registerAsType(StatisticsClientFactory.HttpClientV1Descriptor, StatisticsHttpClientV1_1.StatisticsHttpClientV1);
        this.registerAsType(StatisticsClientFactory.LambdaClientV1Descriptor, StatisticsLambdaClientV1_1.StatisticsLambdaClientV1);
        this.registerAsType(StatisticsClientFactory.HttpProxyClientV1Descriptor, StatisticsHttpProxyClientV1_1.StatisticsHttpProxyClientV1);
    }
}
exports.StatisticsClientFactory = StatisticsClientFactory;
StatisticsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-statistics', 'factory', 'default', 'default', '1.0');
StatisticsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-statistics', 'client', 'null', 'default', '1.0');
StatisticsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-statistics', 'client', 'direct', 'default', '1.0');
StatisticsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-statistics', 'client', 'http', 'default', '1.0');
StatisticsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-statistics', 'client', 'lambda', 'default', '1.0');
StatisticsClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-statistics', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=StatisticsClientFactory.js.map