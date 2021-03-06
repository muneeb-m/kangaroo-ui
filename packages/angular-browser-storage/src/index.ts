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

import { NgModule } from '@angular/core';
import { SessionStore } from './session.store';
import { MemoryStore } from './memory.store';
import { LocalStore } from './local.store';
import { LoggerModule } from '@kangaroo/angular-logger';
import { windowProvider } from './window';

export * from './local.store';
export * from './memory.store';
export * from './session.store';


@NgModule({
  providers: [
    LocalStore,
    MemoryStore,
    SessionStore,
    windowProvider
  ],
  imports: [
    LoggerModule.forModule('BrowserStorageModule')
  ]
})
export class BrowserStorageModule {
}
