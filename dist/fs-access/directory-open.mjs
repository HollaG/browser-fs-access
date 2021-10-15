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
import e from"../promiseTimeout.mjs";const t=async(n,o,r=n.name,i=[],a)=>{const c=[],s=[];try{for await(const l of n.values())try{const u=`${r}/${l.name}`;if("file"===l.kind){const t=l.name.split(".").pop().toLowerCase();if(i.length&&!i.includes(t))continue;a(l.name);const o=await e(1e3,l.getFile());o.directoryHandle=n,s.push(Object.defineProperty(o,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>u}))}else"directory"===l.kind&&o&&c.push(...await t(l,o,u,i,a))}catch(e){console.log(e)}}catch(e){console.log(e)}return[...c,...s]};
/**
 * Opens a directory from disk using the File System Access API.
 * User may specify the file extensions to be scanned.
 * Extensions are passed in as an array of lowercase strings, without the dot.
 * Example: ['jpg', 'png']
 * @type { typeof import("../../index").directoryOpen }
 */export default async(e={},n=[],o=(e=>{}))=>{e.recursive=e.recursive||!1;const r=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return t(r,e.recursive,r.name,n,o)};