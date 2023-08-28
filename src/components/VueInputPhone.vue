<template>
  <div>
    <div :class="[customClass, defaultClass]">
      <div class="select-wrapper">
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
      </div>
      <div class="input-wrapper">
        <input
            id="phone-number"
            v-model="internalPhoneNumber"
            @input="formatPhoneNumber"
            @keydown="handleKeyDown"
            :placeholder="placeholder"
        >
      </div>
    </div>
    <p v-if="phoneNumberInvalid" class="vue-international-phone-error">
      Invalid phone number
    </p>
  </div>
</template>

<script>
import { countries } from "@/assets/countries";
import "@/assets/component.css";

export default {
  name: "VueInputPhone",
  props: {
    selectedItem: {
      type: Object,
      default: () => {
        return this.getDefaultCountry();
      }
    },
    phoneNumber: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: "Phone Number",
    },
    customClass: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      internalSelectedItem:
          Object.keys(this.selectedItem).length !== 0
              ? this.selectedItem
              : this.getDefaultCountry(),
      internalPhoneNumber: this.phoneNumber,
      formattedPhoneNumber: "",
      phoneNumberInvalid: false
    };
  },
  computed: {
    countries() {
      return this.getCountries();
    },
    defaultClass() {
      return 'combined-input';
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

      this.phoneNumberInvalid = !/^\d+$/.test(numericInput);
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
        this.$emit("input", val);
        this.$emit("update:phoneNumber", val);
        console.log(this.phoneNumber)
      },
      deep: true
    }
  }
};
</script>
