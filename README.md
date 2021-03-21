# Divisionbd

## Description

The Divisionbd is a `npm package` that helps you to develop your **Frontend Applications** where you will need All Divison, All District and All Upozila (maybe) of _Bangladesh_ without any **API Call**. You can also use the package in your **Backend Applications** (if _Require_). This package will support **JavaScript** and **TypeScript** both.

## Installation

```
$ npm install divisionbd
```

## Usage

### JavaScript:

```
// commonJs import
const myPackage = require('divisionbd');

const allDivision = myPackage.getDivision();
const allDistrict = myPackage.getDistrict('dhaka');
const allUpozila = myPackage.getUpozila('dhaka', 'madaripur');


// or Js destructuring import
const { getDivision, getDistrict, getUpozila } = require('divisionbd');

const allDivision = getDivision();
const allDistrict = getDistrict('dhaka');
const allUpozila = getUpozila('dhaka', 'madaripur');
```

### TypeScript:

```
// importing
import { getDistrict, getDivision, getUpozila } from 'divisionbd';

const allDivision = getDivision();
const allDistrict = getDistrict('sylhet');
const allUpozila = getUpozila('dhaka', 'madaripur');
```

`divisonName` and `districtName` for example `dhaka` or `sylhet` can be `Dhaka`, `DHAKA`, `sYlhet` or ony other case it will work until the name is valid else it will return an empty array. Also throw an error if `divisionName` and `districtName` is not `string`

Outputs:

```
//Showing Output 1
console.log(allDivision)

// Showing Output 2
console.log(allDistrict);

// Showing Output 3
console.log(allUpozila);
```

Output 1:

```
 [
  { name: 'Dhaka', banglaName: 'ঢাকা' },
  { name: 'Chattagram', banglaName: 'চট্টগ্রাম' },
  { name: 'Rajshahi', banglaName: 'রাজশাহী' },
  { name: 'Khulna', banglaName: 'খুলনা' },
  { name: 'Barisal', banglaName: 'বরিশাল' },
  { name: 'Sylhet', banglaName: 'সিলেট' },
  { name: 'Rangpur', banglaName: 'রংপুর' },
  { name: 'Mymensingh', banglaName: 'ময়মনসিংহ' }
]
```

Output 2:

```
[
  { name: 'Narsingdi', banglaName: 'নরসিংদী' },
  { name: 'Gazipur', banglaName: 'গাজীপুর' },
  { name: 'Shariatpur', banglaName: 'শরীয়তপুর' },
  { name: 'Narayanganj', banglaName: 'নারায়ণগঞ্জ' },
  { name: 'Tangail', banglaName: 'টাঙ্গাইল' },
  { name: 'Kishoreganj', banglaName: 'কিশোরগঞ্জ' },
  { name: 'Manikganj', banglaName: 'মানিকগঞ্জ' },
  { name: 'Dhaka', banglaName: 'ঢাকা' },
  { name: 'Munshiganj', banglaName: 'মুন্সিগঞ্জ' },
  { name: 'Rajbari', banglaName: 'রাজবাড়ী' },
  { name: 'Madaripur', banglaName: 'মাদারীপুর' },
  { name: 'Gopalganj', banglaName: 'গোপালগঞ্জ' },
  { name: 'Faridpur', banglaName: 'ফরিদপুর' }
]
```

Output 3:

```
[
  { name: 'Madaripur Sadar', banglaName: 'মাদারীপুর সদর' },
  { name: 'Shibchar', banglaName: 'শিবচর' },
  { name: 'Kalkini', banglaName: 'কালকিনি' },
  { name: 'Rajoir', banglaName: 'রাজৈর' }
]
```

Also Added 3 Models for TypeScript support they are: `Division`, `District` and `Upozila`
