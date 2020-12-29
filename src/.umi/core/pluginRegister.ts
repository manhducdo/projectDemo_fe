// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/doducmanh/Documents/ReactJs/projectdemo/src/app.js';
import * as Plugin_1 from '../plugin-initial-state/runtime';
import * as Plugin_2 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/doducmanh/Documents/ReactJs/projectdemo/src/app.js',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-model/runtime',
  });
