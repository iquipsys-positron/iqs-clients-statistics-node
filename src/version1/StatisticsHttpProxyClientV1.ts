import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { IStatisticsClientV1 } from './IStatisticsClientV1';
import { StatCounterV1 } from './StatCounterV1';
import { StatCounterIncrementV1 } from './StatCounterIncrementV1';
import { StatCounterTypeV1 } from './StatCounterTypeV1';
import { StatCounterValueSetV1 } from './StatCounterValueSetV1';
import { StatisticsHttpClientV1 } from './StatisticsHttpClientV1';

export class StatisticsHttpProxyClientV1 extends ClustersProxyHttpClientV1<IStatisticsClientV1>
    implements IStatisticsClientV1 {

    constructor(config?: any) {
        super(StatisticsHttpClientV1, 'pip-services-statistics', 30022);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getGroups(correlationId: string, orgId: string, paging: PagingParams, 
        callback: (err: any, page: DataPage<string>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getGroups(correlationId, orgId, paging, callback);
        });
    }

    public getCounters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<StatCounterV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getCounters(correlationId, orgId, filter, paging, callback);
        });
    }
        
    public incrementCounter(correlationId: string, orgId: string, group: string, name: string,
        time: Date, timezone: string, value: number, callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.incrementCounter(correlationId, orgId, group, name, time, timezone, value, callback);
        });
    }

    public incrementCounters(correlationId: string, orgId: string, increments: StatCounterIncrementV1[],
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.incrementCounters(correlationId, orgId, increments, callback);
        });
    }

    public readOneCounter(correlationId: string, orgId: string, group: string, name: string, type: StatCounterTypeV1,
        fromTime: Date, toTime: Date, timezone: string,
        callback: (err: any, value: StatCounterValueSetV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.readOneCounter(correlationId, orgId, group, name, type, fromTime, toTime, timezone, callback);
        });
    }

    public readCountersByGroup(correlationId: string, orgId: string, group: string, type: StatCounterTypeV1,
        fromTime: Date, toTime: Date, timezone: string,
        callback: (err: any, values: StatCounterValueSetV1[]) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.readCountersByGroup(correlationId, orgId, group, type, fromTime, toTime, timezone, callback);
        });
    }

    public readCounters(correlationId: string, orgId: string, counters: StatCounterV1[], type: StatCounterTypeV1,
        fromTime: Date, toTime: Date, timezone: string,
        callback: (err: any, values: StatCounterValueSetV1[]) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.readCounters(correlationId, orgId, counters, type, fromTime, toTime, timezone, callback);
        });
    }
}
