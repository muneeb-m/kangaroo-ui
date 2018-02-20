/*
 * Copyright (c) 2018 Michael Krotscheck
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { Inject, Injectable, Optional } from '@angular/core';
import { Application } from './model';
import { AbstractResourceService } from '@kangaroo/angular-platform';
import { HttpClient } from '@angular/common/http';
import { ADMIN_API_ROOT, AdminApiRootProvider } from './admin-api-root';

/**
 * This class attaches the oauth2 token credentials to API calls.
 *
 * @author Michael Krotscheck
 */
@Injectable()
export class ApplicationService extends AbstractResourceService<Application> {

  /**
   * Create a new instance of the application service.
   *
   * @param http The HTTP client
   * @param apiRoot Provider for the admin API root url.
   */
  constructor(http: HttpClient,
              @Optional() @Inject(ADMIN_API_ROOT) apiRoot: AdminApiRootProvider) {
    super('application', http, apiRoot);
  }
}