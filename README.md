# Vue International Phone Input Component

This is a Vue.js component that provides an international phone input with a country selector.

## Installation

You can install the component via npm:

```bash
npm install @diogoccoutinho/vue-international-phone
```


## Usage
To use the Vue International Phone Input Component, import and register it in your Vue application:

```vue

<template>
  <div>
    <VueInputPhone
        :selectedItem="selectedCountry"
        :phoneNumber="phoneNumber"
        :placeholder="placeholder"
        :custom-class="customClass"></VueInputPhone>
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
        customClass: "custom-input-phone",
      };
    },
  };
</script>
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
- `placeholder`: Placeholder text for the phone number input. Default: "Phone Number"
- `customClass`: Custom class to style the component. It replaces the default class.
- 
## Events
- `update:selectedItem`: Emitted when the selected country is changed.
- `update:phoneNumber`: Emitted when the phone number is changed.
- `update:customClass`: Emitted when the custom class is changed.
- 
## Examples
You can customize the appearance of the component by passing the customClass prop:

```vue

<template>
  <div>
    <VueInputPhone
        :selectedItem="selectedCountry"
        :phoneNumber="phoneNumber"
        :placeholder="placeholder"
        :custom-class="customClass"></VueInputPhone>
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
        phoneNumber: '',
        myCustomClass: 'my-custom-phone-input',
      };
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

