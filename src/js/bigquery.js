import { destinationBigQuery } from '@elbwalker/destination-node-bigquery';

elb('walker destination', destinationBigQuery, {
  custom: {
    projectId: 'PR0J3CT1D', // Required
    // client: BigQuery; // A BigQuery instance from @google-cloud/bigquery
    // location: string; // 'EU' as default
    // datasetId: string; // 'walkeros' as default
    // tableId: string; // 'events' as default
    // bigquery?: BigQueryOptions; // BigQueryOptions from @google-cloud/bigquery
  },
});