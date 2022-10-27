/*
  Given a year, report if it is a leap year.
*/

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0) {
    return 'Leap year'
  }else {
    return 'not leap year'
  }
}
const leapYears = [1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868, 1872, 1876, 1880, 1884, 1888, 1892, 1896,1900, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020]


for (let i of leapYears) {
  console.log(isLeapYear(i));
}
