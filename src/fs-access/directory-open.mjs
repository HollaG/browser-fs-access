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

import promiseTimeoutMjs from '../promiseTimeout.mjs';

const getFiles = async (
  dirHandle,
  recursive,
  path = dirHandle.name,
  extensions = [],
  setProgramStatus
) => {
  const dirs = [];
  const files = [];
  try {
    for await (const entry of dirHandle.values()) {
      try {
        const nestedPath = `${path}/${entry.name}`;

        if (entry.kind === 'file') {
          const filePath = "." + entry.name.split('.').pop().toLowerCase();
          if (extensions.length && !extensions.includes(filePath)) continue;
          setProgramStatus(entry.name);
          const file = await promiseTimeoutMjs(1000, entry.getFile());

          file.directoryHandle = dirHandle;
          files.push(
            Object.defineProperty(file, 'webkitRelativePath', {
              configurable: true,
              enumerable: true,
              get: () => nestedPath,
            })
          );
        } else if (entry.kind === 'directory' && recursive) {
          dirs.push(
            ...(await getFiles(
              entry,
              recursive,
              nestedPath,
              extensions,
              setProgramStatus
            ))
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
  return [...dirs, ...files];
};

/**
 * Opens a directory from disk using the File System Access API.
 * User may specify the file extensions to be scanned.
 * Extensions are passed in as an array of lowercase strings, without the dot.
 * Example: ['jpg', 'png']
 * @type { typeof import("../../index").directoryOpen }
 */
export default async (
  options = { extensions: [] },
  setProgramStatus = (status) => {}
) => {
  options.recursive = options.recursive || false;
  const handle = await window.showDirectoryPicker({
    id: options.id,
    startIn: options.startIn,
  });
  const files = getFiles(
    handle,
    options.recursive,
    handle.name,
    options.extensions,
    setProgramStatus
  );
  return files;
};
