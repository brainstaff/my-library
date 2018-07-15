import * as assert from 'assert';

import { MyLibrary } from "../src/my-library";

describe('MyLibrary', () => {
   it('Sum should work correctly', () => {
       assert.strictEqual(MyLibrary.sum(6, 4), 10);
   });
});