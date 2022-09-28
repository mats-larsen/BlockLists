const {describe, it} = require('mocha');
const { getBlockList, BlockList } = require('../index.js');

const assert = require('assert');


describe('getBlockList', function () {
  it('should get ads list', async function () {
    const list = await getBlockList(BlockList.ADS);
    assert.equal(list.length > 0, true);
  });

  it('should get a list for every BlockList enum', async function () {
    for (const listName in BlockList) {
      const list = await getBlockList(BlockList[listName]);
      assert.equal(list.length > 0, true);
    }
  });
});