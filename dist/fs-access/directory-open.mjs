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
import e from"../promiseTimeout.mjs";const o=async(t,n,s=t.name,i=[],r)=>{const a=[],c=[];try{for await(const l of t.values())try{const u=`${s}/${l.name}`;if(console.log({extensions:i}),"file"===l.kind){const o="."+l.name.split(".").pop().toLowerCase();if(i.length&&!Array.from(i).includes(o))continue;r(l.name);const n=await e(1e3,l.getFile());n.directoryHandle=t,c.push(Object.defineProperty(n,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>u}))}else"directory"===l.kind&&n&&a.push(...await o(l,n,u,i,r))}catch(e){console.log(e)}}catch(e){console.log(e)}return[...a,...c]};
/**
 * Opens a directory from disk using the File System Access API.
 * User may specify the file extensions to be scanned.
 * Extensions are passed in as an array of lowercase strings, without the dot.
 * Example: ['jpg', 'png']
 * @type { typeof import("../../index").directoryOpen }
 */export default async(e={},t=(e=>{}))=>{e.recursive=e.recursive||!1,e.extensions=e.extensions||[],console.log({options:e});const n=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return o(n,e.recursive,n.name,e.extensions,t)};