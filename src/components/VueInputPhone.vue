<template>
  <div>
    <select name="countries" id="countries" v-model="selectedItem">
      <option
          v-for="country in countries()"
          :key="country.code"
          :value="country"
          :selected="selectedItem"
      >
        <div class="flight-destination-item-country">
          <span>{{ country.emoji }} {{ country.COUNTRY_CODE }} (+{{ country.code }})</span>
        </div>
      </option>
    </select>
    <input
        v-model="phoneNumber"
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
  mounted() {
  },
  data() {
    return {
      selectedItem: {
        code: '55',
        name: 'Brazil',
        flag: 'br',
        COUNTRY_CODE: 'BR',
        mask: '(##) #####-####',
        emoji: '🇧🇷'
      },
      phoneNumber: '',
      formattedPhoneNumber: '',
      phoneNumberInvalid: false
    };
  },
  methods: {
    countries() {
      return countries
    },
    formatPhoneNumber() {
      if (this.phoneNumber === "") {
        return;
      }
      let numericInput = this.phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
      let formattedNumber = "";
      let currentPosition = 0;

      for (const char of this.selectedItem.mask) {
        if (char === "#") {
          if (currentPosition < numericInput.length) {
            formattedNumber += numericInput[currentPosition];
            currentPosition++;
          }
        } else {
          formattedNumber += char;
        }
      }

      this.phoneNumber = formattedNumber;

      if (
          !/^\d+$/.test(numericInput)
      ) {
        this.phoneNumberInvalid = true;
      } else {
        this.phoneNumberInvalid = false;
      }
    },
    handleKeyDown(event) {
      if (event.key === "Backspace") {
        // Allow deletion even if cursor is on a mask character
        if (this.phoneNumber[this.phoneNumber.length - 1] === "-") {
          this.phoneNumber = this.phoneNumber.slice(0, -1);
          event.preventDefault();
        }
        if (this.phoneNumber[this.phoneNumber.length - 1] === " ") {
          this.phoneNumber = this.phoneNumber.slice(0, -1);
          event.preventDefault();
        }
        if (this.phoneNumber[this.phoneNumber.length - 1] === ")") {
          this.phoneNumber = this.phoneNumber.slice(0, -1);
          event.preventDefault();
        }
        if (this.phoneNumber[this.phoneNumber.length - 1] === "(") {
          this.phoneNumber = this.phoneNumber.slice(0, -1);
          event.preventDefault();
        }
      }
    }
  },
  computed: {
    selectedCountryFlag () {
      console.log(this.selectedItem.flag)
      return this.selectedItem.flag;
    }
  },
  watch: {
    selectedItem: {
      handler: function (val) {
        this.formatPhoneNumber();
        this.$emit("input", val);
      },
      deep: true
    }
  }
};
</script>

