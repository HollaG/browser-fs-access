/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
/**
 * Opens a file from disk using the legacy `<input type="file">` method.
 * @type { typeof import("../../index").fileOpen }
 */
export default async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise(((n,t)=>{const i=document.createElement("input");i.type="file";const c=[...e.map((e=>e.mimeTypes||[])).join(),e.map((e=>e.extensions||[])).join()].join();
// ToDo: Remove this workaround once
// https://github.com/whatwg/html/issues/6376 is specified and supported.
let a;i.multiple=e[0].multiple||!1,
// Empty string allows everything.
i.accept=c||"";const l=()=>a(t);e[0].setupLegacyCleanupAndRejection&&(a=e[0].setupLegacyCleanupAndRejection(l)),i.addEventListener("change",(()=>{"function"==typeof a&&a(),n(i.multiple?Array.from(i.files):i.files[0])})),i.click()})));