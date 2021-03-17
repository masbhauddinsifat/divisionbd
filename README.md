# Divisionbd

## Description

The Divisionbd is a `npm package` that helps you to develop your **Frontend Applications** where you will need All Divison and All District of _Bangladesh_ without any **API Call**. You can also use the package in your **Backend Applications** (if _Require_). This package will support **JavaScript** and **TypeScript** both.

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


// or Js destructuring import
const { getDivision, getDistrict } = require('divisionbd');

const allDivision = getDivision();
const allDistrict = getDistrict('dhaka');

```

### TypeScript:

```
// importing
import { getDistrict, getDivision } from 'divisionbd';

const allDivision = getDivision();
const allDistrict = getDistrict('sylhet');

```

Divison name `dhaka` or `sylhet` can be Dhaka, DHAKA, sYlhet or ony other case it will work until the name is valid else it will return an empty array. Also throw an error if divisionName is not `string`

Outputs:

```
//showing output 1:
console.log(allDivision)

// showing output 2
console.log(allDistrict);
)

```

```
output 1:

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

```
// output 2:

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
