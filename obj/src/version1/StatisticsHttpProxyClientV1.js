"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const StatisticsHttpClientV1_1 = require("./StatisticsHttpClientV1");
class StatisticsHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(StatisticsHttpClientV1_1.StatisticsHttpClientV1, 'pip-services-statistics', 30022);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getGroups(correlationId, orgId, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getGroups(correlationId, orgId, paging, callback);
        });
    }
    getCounters(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getCounters(correlationId, orgId, filter, paging, callback);
        });
    }
    incrementCounter(correlationId, orgId, group, name, time, timezone, value, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.incrementCounter(correlationId, orgId, group, name, time, timezone, value, callback);
        });
    }
    incrementCounters(correlationId, orgId, increments, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.incrementCounters(correlationId, orgId, increments, callback);
        });
    }
    readOneCounter(correlationId, orgId, group, name, type, fromTime, toTime, timezone, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.readOneCounter(correlationId, orgId, group, name, type, fromTime, toTime, timezone, callback);
        });
    }
    readCountersByGroup(correlationId, orgId, group, type, fromTime, toTime, timezone, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.readCountersByGroup(correlationId, orgId, group, type, fromTime, toTime, timezone, callback);
        });
    }
    readCounters(correlationId, orgId, counters, type, fromTime, toTime, timezone, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.readCounters(correlationId, orgId, counters, type, fromTime, toTime, timezone, callback);
        });
    }
}
exports.StatisticsHttpProxyClientV1 = StatisticsHttpProxyClientV1;
//# sourceMappingURL=StatisticsHttpProxyClientV1.js.map