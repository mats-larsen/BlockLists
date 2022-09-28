const fs = require('fs/promises');
const path = require('path');

var BlockList;
(function (BlockList) {
    /** @member {number}*/
    /** Advertisements, Banners, Widgets & Push Notifications. */
    BlockList[BlockList["ADS"] = 0] = "ADS";
    /** @member {number}*/
    /** Porn / 18+ Content. */
    BlockList[BlockList["ADULT"] = 1] = "ADULT";
    /** @member {number}*/
    /** Fonts, Surveys, Domains not required for software to function. */
    BlockList[BlockList["BLOAT"] = 2] = "BLOAT";
    /** @member {number}*/
    /** Bitcoin, Ethereum, Mining, etc. (Not malware, but could be used by it). */
    BlockList[BlockList["CRYPTOCURRENCY"] = 3] = "CRYPTOCURRENCY";
    /** @member {number}*/
    /** Dating Sites. */
    BlockList[BlockList["DATING"] = 4] = "DATING";
    /** @member {number}*/
    /** Free/Cheap Hosting, Free Blogs. */
    BlockList[BlockList["FREE"] = 5] = "FREE";
    /** @member {number}*/
    /** Personally Untrusted Antivirus, Browser Extensions, Search Engines, etc. */
    BlockList[BlockList["JUNK"] = 6] = "JUNK";
    /** @member {number}*/
    /** Malicious Sites, PUPs, Malware, Browser Hijackers, Phishing Sites. */
    BlockList[BlockList["MALWARE"] = 7] = "MALWARE";
    /** @member {number}*/
    /** Marketing, Ebay Listing Tools, etc. */
    BlockList[BlockList["MARKETING"] = 8] = "MARKETING";
    /** @member {number}*/
    /** Domains used for remote sessions. */
    BlockList[BlockList["REMOTE"] = 9] = "REMOTE";
    /** @member {number}*/
    /** Fake freight, gift cards, products, support, pet sales, firearms, news, etc. */
    BlockList[BlockList["SCAM"] = 10] = "SCAM";
    /** @member {number}*/
    /** Gore, Gross, and Torture sites. */
    BlockList[BlockList["SHOCK"] = 11] = "SHOCK";
    /** @member {number}*/
    /** URL Shorteners. Can be used to mask malicious domains. */
    BlockList[BlockList["URLSHORTENER"] = 12] = "URLSHORTENER";
    /** @member {number}*/
    /** Advertisements, Banners, Widgets & Push Notifications. */
    BlockList[BlockList["WILD_ADS"] = 13] = "WILD_ADS";
})(BlockList || (BlockList = {}));

async function getBlockList(list) {
  const correctList = Object.entries(BlockList).some(([key, value]) => {
    return (typeof list === "string") ? value === list : value === BlockList[list];
  });

  if (!correctList) {
    throw new Error(
      `Unable to get block list "${list}", did you spell the list name correctly?`
    );
  }

  const filePath = path.join(__dirname, "RAW", (typeof list === "string") ? list : BlockList[list]);
  
  const file = await fs.readFile(filePath, {
    encoding: "utf8"
  }).catch(() => {
    throw new Error(
      `Unable to read file "${filePath}", did you spell the list name correctly?`
    );
  });
  
  return file.split("\n");
}


module.exports = { getBlockList, BlockList };