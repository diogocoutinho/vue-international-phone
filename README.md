# Vue International Phone Component

## Description

The Vue International Phone Component is a reusable Vue.js component that provides an integrated country selector and phone number input field. It enables users to select a country and input a formatted phone number based on the selected country's mask.

## Features

- Integrated country selector with flags and country codes.
- Automatic formatting of phone numbers according to the mask of the selected country.
- Phone number validation to ensure only digits are input.

## Installation

You can easily install the Vue International Phone Component using npm:

For Vue.js 2:
```bash
npm install @diogoccoutinho/vue-international-phone
```
For Vue.js 3:
```bash
npm install @diogoccoutinho/vue-international-phone
```

## Usage

```vue
<template>
  <div>
    <VueInputPhone
        :selectedItem="selectedCountry"
        :phoneNumber="phoneNumber"
    />
  </div>
</template>

<script>
import VueInputPhone from "@diogoccoutinho/vue-international-phone"; // Import the component

export default {
  components: {
    VueInputPhone,
  },
  data() {
    return {
      selectedCountry: {
        // Default country object
      },
      phoneNumber: "",
    };
  },
};
</script>
```
## Props
- selectedItem: Object defining the selected country (optional).
- phoneNumber: Phone number (optional).
## Events
- update:selectedItem: Emitted when the selected country is changed.
- update:phoneNumber: Emitted when the phone number is changed.
## Notes
Be sure to add the provided CSS styles in the component to achieve the desired layout.

## Contribution
Contributions are welcome! Feel free to submit pull requests or report issues.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
