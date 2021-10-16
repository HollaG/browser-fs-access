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
export default async(e=[{extensions:[]}],t=(e=>{}))=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise(((i,n)=>{const s=document.createElement("input");
// ToDo: Remove this workaround once
// https://github.com/whatwg/html/issues/6376 is specified and supported.
let r;s.type="file",s.webkitdirectory=!0;const l=()=>r(n);e[0].setupLegacyCleanupAndRejection&&(r=e[0].setupLegacyCleanupAndRejection(l)),s.addEventListener("change",(()=>{"function"==typeof r&&r();let n=Array.from(s.files);t("Retrieved files"),e.extensions.length&&(t("Filtering files"),n=n.filter((t=>e.extensions.includes("."+t.name.split(".").pop().toLowerCase())))),e[0].recursive||(t("Filtering nested files"),n=n.filter((e=>2===e.webkitRelativePath.split("/").length))),t("Resolving files"),i(n)})),s.click()})));