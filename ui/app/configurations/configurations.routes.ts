/**
* Copyright (c) 2016 Mirantis Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
* implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Routes } from '@angular/router';
import { LoggedIn } from '../services/auth';
import { ConfigurationsComponent } from './index';

export const configurationsRoutes: Routes = [
  {
    path: 'configurations',
    component: ConfigurationsComponent,
    canActivate: [LoggedIn],
    data: {restrictTo: [
      'create_playbook_configuration',
      'view_playbook_configuration',
      'view_playbook_configuration_version',
      'edit_playbook_configuration',
      'delete_playbook_configuration'
    ]}
  }
];
