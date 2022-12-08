import { getOrLoadRemote } from './get-or-load-remote';

export const loadComponent = (remote, sharedScope, module, url) => {
  return async () => {
    await getOrLoadRemote(remote, sharedScope, url);
    const container = window[remote];
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
};