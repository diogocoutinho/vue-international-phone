<template>
  <div style="border: 1px #2c3e50 !important;">
    <select name="countries" id="countries" v-model="internalSelectedItem">
      <option
          v-for="country in countries"
          :key="country.code"
          :value="country"
      >
        <div class="flight-destination-item-country">
          <span>{{ country.emoji }} {{ country.COUNTRY_CODE }} (+{{ country.code }})</span>
        </div>
      </option>
    </select>
    <input
        v-model="internalPhoneNumber"
        @input="formatPhoneNumber"
        @keydown="handleKeyDown"
        placeholder="Phone Number"
    >
    <p v-if="phoneNumberInvalid" style="color: red;">Invalid phone number</p>
  </div>
</template>

<script>
import { countries } from "@/assets/countries";

export default {
  name: "VueInputPhone",
  props: {
    selectedItem: {
      type: Object,
      default: () => {
        return {
          "code": "55",
          "name": "Brazil",
          "flag": "br",
          "COUNTRY_CODE": "BR",
          "mask": "(##) #####-####",
          "emoji": "🇧🇷"
        };
      }
    },
    phoneNumber: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      internalSelectedItem: Object.keys(this.selectedItem).length !== 0 ? this.selectedItem : this.getDefaultCountry(),
      internalPhoneNumber: this.phoneNumber,
      formattedPhoneNumber: '',
      phoneNumberInvalid: false
    };
  },
  computed: {
    countries() {
      return this.getCountries();
    },
  },
  methods: {
    getDefaultCountry() {
      return this.getCountries().find(country => country.code === "55");
    },
    getCountries() {
      return countries;
    },
    formatPhoneNumber() {
      if (this.internalPhoneNumber === "") {
        return;
      }
      let numericInput = this.internalPhoneNumber.replace(/\D/g, '');
      let formattedNumber = "";
      let currentPosition = 0;

      for (const char of this.internalSelectedItem.mask) {
        if (char === "#") {
          if (currentPosition < numericInput.length) {
            formattedNumber += numericInput[currentPosition];
            currentPosition++;
          }
        } else {
          formattedNumber += char;
        }
      }

      this.internalPhoneNumber = formattedNumber;

      if (!/^\d+$/.test(numericInput)) {
        this.phoneNumberInvalid = true;
      } else {
        this.phoneNumberInvalid = false;
      }
    },
    handleKeyDown(event) {
      const specialCharacters = ["-", " ", ")", "("];

      if (event.key === "Backspace") {
        if (specialCharacters.includes(this.internalPhoneNumber[this.internalPhoneNumber.length - 1])) {
          this.internalPhoneNumber = this.internalPhoneNumber.slice(0, -1);
          event.preventDefault();
        }
      }
    }
  },
  watch: {
    internalSelectedItem: {
      handler: function (val) {
        this.formatPhoneNumber();
        this.$emit("update:selectedItem", val);
      },
      deep: true
    },
    internalPhoneNumber: {
      handler: function (val) {
        this.$emit("update:phoneNumber", val);
      },
      deep: true
    }
  }
};
</script>
