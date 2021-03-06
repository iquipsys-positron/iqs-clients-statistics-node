"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class StatisticsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/statistics');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getGroups(correlationId, orgId, paging, callback) {
        this.callCommand('get_groups', correlationId, {
            paging: paging
        }, callback);
    }
    getCounters(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_counters', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    incrementCounter(correlationId, orgId, group, name, time, timezone, value, callback) {
        this.callCommand('increment_counter', correlationId, {
            group: group,
            name: name,
            time: time,
            timezone: timezone,
            value: value
        }, callback);
    }
    incrementCounters(correlationId, orgId, increments, callback) {
        this.callCommand('increment_counters', correlationId, {
            increments: increments
        }, callback);
    }
    readOneCounter(correlationId, orgId, group, name, type, fromTime, toTime, timezone, callback) {
        this.callCommand('read_one_counter', correlationId, {
            group: group,
            name: name,
            type: type,
            from_time: fromTime,
            to_time: toTime,
            timezone: timezone
        }, callback);
    }
    readCountersByGroup(correlationId, orgId, group, type, fromTime, toTime, timezone, callback) {
        this.callCommand('read_counters_by_group', correlationId, {
            group: group,
            type: type,
            from_time: fromTime,
            to_time: toTime,
            timezone: timezone
        }, callback);
    }
    readCounters(correlationId, orgId, counters, type, fromTime, toTime, timezone, callback) {
        this.callCommand('read_counters', correlationId, {
            counters: counters,
            type: type,
            from_time: fromTime,
            to_time: toTime,
            timezone: timezone
        }, callback);
    }
}
exports.StatisticsHttpClientV1 = StatisticsHttpClientV1;
//# sourceMappingURL=StatisticsHttpClientV1.js.map