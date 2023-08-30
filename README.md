# Vue International Phone Input Component

This is a Vue.js component that provides an international phone input with a country selector and mask.

<p align="center">
  <img src="https://media.licdn.com/dms/image/D4D22AQGohnpnldDduw/feedshare-shrink_2048_1536/0/1693367734357?e=1696464000&v=beta&t=op-KEocFEHs28iC5bFBdwecvFAlAtOQlFWkvq-NwdQE" alt="Funcionando 100%">
</p>

<details>
<summary>
Getting Started
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
<summary>Register the component</summary> 

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

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details.

<footer>
  <p align="center">
    Made with ❤️ by <a href="https://github.com/diogocoutinho">Diogo Coutinho</a>
  </p>
</footer>