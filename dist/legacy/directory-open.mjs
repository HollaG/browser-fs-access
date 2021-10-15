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
export default async(e=[{}],t=[],i=(e=>{}))=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise(((n,r)=>{const l=document.createElement("input");
// ToDo: Remove this workaround once
// https://github.com/whatwg/html/issues/6376 is specified and supported.
let s;l.type="file",l.webkitdirectory=!0;const c=()=>s(r);e[0].setupLegacyCleanupAndRejection&&(s=e[0].setupLegacyCleanupAndRejection(c)),l.addEventListener("change",(()=>{"function"==typeof s&&s();let r=Array.from(l.files);i("Retrieved files"),t.length&&(i("Filtering files"),r=r.filter((e=>t.includes(e.name.split(".").pop().toLowerCase())))),e[0].recursive||(i("Filtering nested files"),r=r.filter((e=>2===e.webkitRelativePath.split("/").length))),i("Resolving files"),n(r)})),l.click()})));