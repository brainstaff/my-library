import * as assert from 'assert';

import { MyLibraryPlugin } from "../src";

describe('MyLibraryPlugin', () => {
    it('Function should run without throwing', () => {
        const pluginInstance = new MyLibraryPlugin;
        assert.doesNotThrow(() => {
            pluginInstance.configure()
        })
    })
});