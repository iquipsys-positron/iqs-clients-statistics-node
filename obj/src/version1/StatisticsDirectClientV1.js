"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class StatisticsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_2.Descriptor("pip-services-statistics", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getGroups(correlationId, orgId, paging, callback) {
        let timing = this.instrument(correlationId, 'statistics.get_groups');
        this._controller.getGroups(correlationId, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getCounters(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'statistics.get_counters');
        this._controller.getCounters(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    incrementCounter(correlationId, orgId, group, name, time, timezone, value, callback) {
        let timing = this.instrument(correlationId, 'statistics.increment_counter');
        this._controller.incrementCounter(correlationId, group, name, time, timezone, value, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    incrementCounters(correlationId, orgId, increments, callback) {
        let timing = this.instrument(correlationId, 'statistics.increment_counters');
        this._controller.incrementCounters(correlationId, increments, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    readOneCounter(correlationId, orgId, group, name, type, fromTime, toTime, timezone, callback) {
        let timing = this.instrument(correlationId, 'statistics.read_one_counter');
        this._controller.readOneCounter(correlationId, group, name, type, fromTime, toTime, timezone, (err, set) => {
            timing.endTiming();
            callback(err, set);
        });
    }
    readCountersByGroup(correlationId, orgId, group, type, fromTime, toTime, timezone, callback) {
        let timing = this.instrument(correlationId, 'statistics.read_counters_by_group');
        this._controller.readCountersByGroup(correlationId, group, type, fromTime, toTime, timezone, (err, set) => {
            timing.endTiming();
            callback(err, set);
        });
    }
    readCounters(correlationId, orgId, counters, type, fromTime, toTime, timezone, callback) {
        let timing = this.instrument(correlationId, 'statistics.read_counters');
        this._controller.readCounters(correlationId, counters, type, fromTime, toTime, timezone, (err, sets) => {
            timing.endTiming();
            callback(err, sets);
        });
    }
}
exports.StatisticsDirectClientV1 = StatisticsDirectClientV1;
//# sourceMappingURL=StatisticsDirectClientV1.js.map