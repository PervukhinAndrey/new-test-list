export const formatSringFromUppercase = (str: string) => {
  const firstLetter = str.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = str.slice(1).toLowerCase();
  const capitalizedStr = firstLetterCap + remainingLetters;
  const res = capitalizedStr.replace("_", "-");
  return res;
};

export const formatEmail = (str: string) => {
  const noHttp = str.split("//")[1];
  const toArr = noHttp.split(".");
  if (toArr[0] === "www") toArr.shift();

  return toArr.join(".");
};
