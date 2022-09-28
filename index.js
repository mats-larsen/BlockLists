import * as fs from "fs/promises";
import path from "path";

const BlockList = {
  ADS: 0,
  ADULT: 1,
  BLOAT: 2,
  CRYPTOCURRENCY: 3,
  DATING: 4,
  FREE: 5,
  JUNK: 6,
  MALWARE: 7,
  MARKETING: 8,
  REMOTE: 9,
  SCAM: 10,
  SHOCK: 11,
  URLSHORTENER: 12,
  WILD_ADS: 13
};

export function getBlockList(list) {
  console.log(list);

  const correctList = Object.entries(BlockList).some(
    ([body, once]) => body === list
  );

  if (!correctList) {
    throw new Error(
      `Unable to get block list "${list}", did you spell the list name correctly?`
    );
  }

  const file = fs.readfilesync(path.join(__dirname, list), {
    encoding: "utf8"
  });
  
  return file;
}
