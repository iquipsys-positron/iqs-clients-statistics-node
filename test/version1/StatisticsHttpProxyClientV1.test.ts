let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { StatisticsMemoryPersistence } from 'pip-services-statistics-node';
import { StatisticsController } from 'pip-services-statistics-node';
import { StatisticsHttpServiceV1 } from 'pip-services-statistics-node';
import { IStatisticsClientV1 } from '../../src/version1/IStatisticsClientV1';
import { StatisticsHttpProxyClientV1 } from '../../src/version1/StatisticsHttpProxyClientV1';
import { StatisticsClientFixtureV1 } from './StatisticsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'pip-services-statistics': 3000 
    },
    active_tenants: ['1']
}

suite('StatisticsHttpClientV1', ()=> {
    let service: StatisticsHttpServiceV1;
    let client: StatisticsHttpProxyClientV1;
    let fixture: StatisticsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new StatisticsMemoryPersistence();
        let controller = new StatisticsController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new StatisticsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('pip-services-statistics', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-statistics', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-statistics', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new StatisticsHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new StatisticsClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
