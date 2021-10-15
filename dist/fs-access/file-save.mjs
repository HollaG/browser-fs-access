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
 * Saves a file to disk using the File System Access API.
 * @type { typeof import("../../index").fileSave }
 */
export default async(e,t=[{}],i=null,a=!1)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const c=[];if(t.forEach(((t,i)=>{c[i]={description:t.description||"",accept:{}},t.mimeTypes?(0===i&&t.mimeTypes.push(e.type),t.mimeTypes.map((e=>{c[i].accept[e]=t.extensions||[]}))):c[i].accept[e.type]=t.extensions||[]})),i)try{
// Check if the file still exists.
await i.getFile()}catch(e){if(i=null,a)throw e}const s=i||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:c,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),l=await s.createWritable();return await l.write(e),await l.close(),s};