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
const e=async(t,i,n=t.name,a=[],r)=>{const s=[],o=[];for await(const c of t.values()){const l=`${n}/${c.name}`;if("file"===c.kind){const e=c.name.split(".").pop();if(a.length&&!a.includes(e))continue;o.push(c.getFile().then((e=>(e.directoryHandle=t,Object.defineProperty(e,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>l}))))),r(c.name)}else"directory"===c.kind&&i&&s.push(e(c,i,l,r))}return[...(await Promise.all(s)).flat(),...await Promise.all(o)]};
/**
 * Opens a directory from disk using the File System Access API.
 * @type { typeof import("../../index").directoryOpen }
 */export default async(t={},i,n)=>{t.recursive=t.recursive||!1;const a=await window.showDirectoryPicker({id:t.id,startIn:t.startIn});return e(a,t.recursive,a.name,i,n)};