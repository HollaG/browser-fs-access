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
 * Opens a directory from disk using the legacy
 * `<input type="file" webkitdirectory>` method.
 * @type { typeof import("../../index").directoryOpen }
 */
export default async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise(((t,r)=>{const i=document.createElement("input");
// ToDo: Remove this workaround once
// https://github.com/whatwg/html/issues/6376 is specified and supported.
let n;i.type="file",i.webkitdirectory=!0;const c=()=>n(r);e[0].setupLegacyCleanupAndRejection&&(n=e[0].setupLegacyCleanupAndRejection(c)),i.addEventListener("change",(()=>{"function"==typeof n&&n();let r=Array.from(i.files);e[0].recursive||(r=r.filter((e=>2===e.webkitRelativePath.split("/").length))),t(r)})),i.click()})));