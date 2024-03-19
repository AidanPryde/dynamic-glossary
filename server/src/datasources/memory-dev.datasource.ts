import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'memoryDev',
  connector: 'memory',
  localStorage: 'memoryDB',
  file: 'C:\\Users\\A56011107\\Local Documents\\repositories\\dynamic-glossary\\server\\memory-dev-db.json',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MemoryDevDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'memoryDev';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.memoryDev', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
