import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { IStatisticsClientV1 } from './IStatisticsClientV1';
import { StatCounterV1 } from './StatCounterV1';
import { StatCounterIncrementV1 } from './StatCounterIncrementV1';
import { StatCounterTypeV1 } from './StatCounterTypeV1';
import { StatCounterValueSetV1 } from './StatCounterValueSetV1';
export declare class StatisticsHttpClientV1 extends CommandableHttpClient implements IStatisticsClientV1 {
    constructor(config?: any);
    getGroups(correlationId: string, orgId: string, paging: PagingParams, callback: (err: any, page: DataPage<string>) => void): void;
    getCounters(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<StatCounterV1>) => void): void;
    incrementCounter(correlationId: string, orgId: string, group: string, name: string, time: Date, timezone: string, value: number, callback?: (err: any) => void): void;
    incrementCounters(correlationId: string, orgId: string, increments: StatCounterIncrementV1[], callback?: (err: any) => void): void;
    readOneCounter(correlationId: string, orgId: string, group: string, name: string, type: StatCounterTypeV1, fromTime: Date, toTime: Date, timezone: string, callback: (err: any, value: StatCounterValueSetV1) => void): void;
    readCountersByGroup(correlationId: string, orgId: string, group: string, type: StatCounterTypeV1, fromTime: Date, toTime: Date, timezone: string, callback: (err: any, values: StatCounterValueSetV1[]) => void): void;
    readCounters(correlationId: string, orgId: string, counters: StatCounterV1[], type: StatCounterTypeV1, fromTime: Date, toTime: Date, timezone: string, callback: (err: any, values: StatCounterValueSetV1[]) => void): void;
}
