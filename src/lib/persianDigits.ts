const toPersianDigits = (num: string | number): string => {
  return num
    .toString()
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};