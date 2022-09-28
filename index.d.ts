export declare enum BlockList {
  ADS = 0,
  ADULT = 1,
  BLOAT = 2,
  CRYPTOCURRENCY = 3,
  DATING = 4,
  FREE = 5,
  JUNK = 6,
  MALWARE = 7,
  MARKETING = 8,
  REMOTE = 9,
  SCAM = 10,
  SHOCK = 11,
  URLSHORTENER = 12,
  WILD_ADS = 13
}

export declare function getBlockList(list: BlockList): string;
