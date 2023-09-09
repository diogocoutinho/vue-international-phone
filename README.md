
# 📞 [Vue International Phone Input Component](https://www.npmjs.com/package/@diogoccoutinho/vue-international-phone) 📞

<span align="center">

[![npm version](https://badge.fury.io/js/%40diogoccoutinho%2Fvue-international-phone.svg)](https://badge.fury.io/js/%40diogoccoutinho%2Fvue-international-phone)
[![GitHub version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&r=r&ts=1683906897&type=6e&v=0.0.32&x2=0)](https://badge.fury.io/gh/diogocoutinho%2Fvue-international-phone)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Issues](https://img.shields.io/github/issues/diogocoutinho/vue-international-phone.svg)](https://github.com/diogocoutinho/vue-international-phone/issues)
[![Stars](https://img.shields.io/github/stars/diogocoutinho/vue-international-phone.svg)](https://github.com/diogocoutinho/vue-international-phone/stargazers)
[![Forks](https://img.shields.io/github/forks/diogocoutinho/vue-international-phone.svg)](https://githhub.com/diogocoutinho/vue-international-phone/network/members)
[![Github Package Registry](https://img.shields.io/badge/Github%20Package%20Registry-0.0.32-default)](https://github.com/diogocoutinho/vue-international-phone/pkgs/npm/vue-international-phone)
![Downloads](https://img.shields.io/npm/dt/@diogoccoutinho/vue-international-phone)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![Last commit](https://img.shields.io/github/last-commit/diogocoutinho/vue-international-phone.svg)
![Contributors](https://img.shields.io/github/contributors/diogocoutinho/vue-international-phone.svg)
![Size](https://img.shields.io/github/repo-size/diogocoutinho/vue-international-phone.svg)
![Languages](https://img.shields.io/github/languages/count/diogocoutinho/vue-international-phone.svg)
![Top language](https://img.shields.io/github/languages/top/diogocoutinho/vue-international-phone.svg)
![Code size](https://img.shields.io/github/languages/code-size/diogocoutinho/vue-international-phone.svg)
[![Code Pen](https://img.shields.io/badge/Codepen-View%20Demo-blue)](https://codepen.io/diogocoutinho/pen/ZEVpBWz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-View%20Profile-blue)](https://www.linkedin.com/in/diogoccoutinho/)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-blue)](https://twitter.com/diogoccoutinho)
![GitHub followers](https://img.shields.io/github/followers/diogocoutinho.svg?style=social&label=Follow)

</span>

This is a Vue.js component that provides an international phone input with a country selector and mask. 


<p align="center">
  <img src="https://media.licdn.com/dms/image/D4D22AQGohnpnldDduw/feedshare-shrink_2048_1536/0/1693367734357?e=1696464000&v=beta&t=op-KEocFEHs28iC5bFBdwecvFAlAtOQlFWkvq-NwdQE" alt="Funcionando 100%">
</p>

<details>
<summary>
    <strong>Getting Started</strong>
</summary>

### Installation

You can install the component via Yarn:

```bash
yarn add @diogoccoutinho/vue-international-phone
```

You can install the component via npm:

```bash
npm install @diogoccoutinho/vue-international-phone
```
</details>

<details>
<summary>
<strong>Register the component</strong>
</summary> 

#### Global Registration
```js
import Vue from 'vue'
import VueInputPhone from '@diogoccoutinho/vue-international-phone'
import '@diogoccoutinho/vue-international-phone/dist/VueInternationalPhone.css'

Vue.use(VueInputPhone)

new Vue({
  // ...
}).$mount('#app')
```

#### Local Registration
```js
import VueInputPhone from '@diogoccoutinho/vue-international-phone'
import '@diogoccoutinho/vue-international-phone/dist/VueInternationalPhone.css'

export default {
  // ...
  components: {
    VueInputPhone
  }
}
```
</details>

## Usage
To use the Vue International Phone Input Component, import and register it in your Vue application:

```vue
<VueInputPhone
    :selectedItem="selectedCountry"
    :phoneNumber="phoneNumber"
    :placeholder="placeholder"
    :custom-class="customClass"
    @update:selectedItem="updateSelectedItem"
    @update:phoneNumber="updatePhoneNumber"
/>
```

## Props

- `selectedItem`: Object defining the selected country (optional).
```json
{
      "code": "55",
      "name": "Brazil",
      "flag": "br",
      "COUNTRY_CODE": "BR",
      "mask": "(##) #####-####",
      "emoji": "🇧🇷"
}
```

- `phoneNumber`: The default phone number.
- `placeholder`: Placeholder text for the phone number input. Default: "Phone Number" (optional).
- `customClass`: Custom class to style the component. It replaces the default class (optional).
- `openIcon`: Icon to open the country selector. Default: "▾" (optional).
- `closeIcon`: Icon to close the country selector. Default: "▴" (optional).
- `showFlag`: Boolean to control the visibility of the flags in the country selector. Default: true (optional).
- `showCountryCode`: Boolean to control the visibility of the country code in the country selector. Default: true (optional).
- `showCode`: Boolean to control the visibility of the country code in the phone number input. Default: true (optional).
- `inputIconClass`: Custom class to style the input icon. Default: "" (optional).
-
## Events
- `update:selectedItem`: Emitted when the selected country is changed.
- `update:phoneNumber`: Emitted when the phone number is changed.

## Examples
You can customize the appearance of the component by passing the customClass prop:

```vue
<template>
  <div>
    <VueInputPhone
        :selectedItem="selectedCountry"
        :phoneNumber="phoneNumber"
        :placeholder="placeholder"
        :custom-class="customClass"
        @update:selectedItem="updateSelectedItem"
        @update:phoneNumber="updatePhoneNumber"
    />
  </div>
</template>

<script>
  import VueInputPhone from '@diogoccoutinho/vue-international-phone';
  import '@diogoccoutinho/vue-international-phone/dist/vueInternationalPhone.css';
  export default {
    components: {
      VueInputPhone,
    },
    data() {
      return {
        selectedCountry: {},
        phoneNumber: "", // Phone Number
        placeholder: "Phone Number",
        customClass: "my-custom-phone-input",
      };
    },
    methods: {
      updateSelectedItem(item) {
        this.selectedCountry = item;
      },
      updatePhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
      },
    },
  };
</script>

<style>
  .my-custom-phone-input {
    /* Your custom styles here */
  }
</style>
```

## Notes
Be sure to add the provided CSS styles in the component to achieve the desired layout.

## Contribution
Contributions are welcome! Feel free to submit pull requests or report issues.

## Authors

* **Diogo Coutinho** - *Initial work* - [diogoccoutinho](http://github.com.br/diogoccoutinho)

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.

<footer>
  <p align="center">
    Made with ❤️ by <a href="https://github.com/diogocoutinho">Diogo Coutinho</a>
  </p>
</footer>