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
const e=async(t,r,n=t.name,a)=>{const i=[],o=[];for await(const s of t.values()){const c=`${n}/${s.name}`;"file"===s.kind?(o.push(s.getFile().then((e=>(e.directoryHandle=t,Object.defineProperty(e,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>c}))))),a(s.name)):"directory"===s.kind&&r&&i.push(e(s,r,c,a))}return[...(await Promise.all(i)).flat(),...await Promise.all(o)]};
/**
 * Opens a directory from disk using the File System Access API.
 * @type { typeof import("../../index").directoryOpen }
 */export default async(t={},r)=>{console.log("props:",{options:t,setCurrentScannedFile:r}),t.recursive=t.recursive||!1;const n=await window.showDirectoryPicker({id:t.id,startIn:t.startIn});return e(n,t.recursive,n.name,r)};