import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import { Credentials, Config, DynamoDB } from '../../node_modules/aws-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  creds = new Credentials(environment.accessKeyId, environment.secretKey);
   dynClient = new DynamoDB({apiVersion: '2012-08-10', region: environment.awsRegion, endpoint: environment.dynamoEndpoint, credentials: this.creds});

  constructor() {
    this.listTables();
  }

  listTables(): void  {
    console.log('Calling listTables');
    this.dynClient.listTables({}).promise()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

}
