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
const e=async e=>{const t=await e.getFile();return t.handle=e,t};
/**
 * Opens a file from disk using the File System Access API.
 * @type { typeof import("../../index").fileOpen }
 */export default async(t=[{}])=>{Array.isArray(t)||(t=[t]);const i=[];t.forEach(((e,t)=>{i[t]={description:e.description||"",accept:{}},e.mimeTypes?e.mimeTypes.map((c=>{i[t].accept[c]=e.extensions||[]})):i[t].accept["*/*"]=e.extensions||[]}));const c=await window.showOpenFilePicker({id:t[0].id,startIn:t[0].startIn,types:i,multiple:t[0].multiple||!1,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),a=await Promise.all(c.map(e));return t[0].multiple?a:a[0]};