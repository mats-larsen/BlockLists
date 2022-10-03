/**
 * Enum for block lists.
 * @readonly
 * @enum {number}
 */
export declare enum BlockList {
  /** @member {number}*/
  /** Advertisements, Banners, Widgets & Push Notifications. */
  ADS = 0,

  /** @member {number}*/
  /** Porn / 18+ Content. */
  ADULT = 1,

  /** @member {number}*/
  /** Fonts, Surveys, Domains not required for software to function. */
  BLOAT = 2,

  /** @member {number}*/
  /** Bitcoin, Ethereum, Mining, etc. (Not malware, but could be used by it). */
  CRYPTOCURRENCY = 3,

  /** @member {number}*/
  /** Dating Sites. */
  DATING = 4,

  /** @member {number}*/
  /** Free/Cheap Hosting, Free Blogs. */
  FREE = 5,

  /** @member {number}*/
  /** Personally Untrusted Antivirus, Browser Extensions, Search Engines, etc. */
  JUNK = 6,

  /** @member {number}*/
  /** Malicious Sites, PUPs, Malware, Browser Hijackers, Phishing Sites. */
  MALWARE = 7,

  /** @member {number}*/
  /** Marketing, Ebay Listing Tools, etc. */
  MARKETING = 8,

  /** @member {number}*/
  /** Domains used for remote sessions. */
  REMOTE = 9,

  /** @member {number}*/
  /** Fake freight, gift cards, products, support, pet sales, firearms, news, etc. */
  SCAM = 10,

  /** @member {number}*/
  /** Gore, Gross, and Torture sites. */
  SHOCK = 11,

  /** @member {number}*/
  /** URL Shorteners. Can be used to mask malicious domains. */
  URLSHORTENER = 12,

  /** @member {number}*/
  /** Advertisements, Banners, Widgets & Push Notifications. */
  WILD_ADS = 13
}

export declare function getBlockList(list: BlockList | keyof typeof BlockList): Promise<string[]>
