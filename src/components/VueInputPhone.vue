<template>
  <div>
    <div :class="[customClass, defaultClass]">
      <div class="select-wrapper">
        <div class="select-container">
          <input
              v-model="searchQuery"
              @input="filterCountries"
              class="search-input"
              :style="{ width: searchInputWidth + 'px' }"
              @click="toggleModal"
          />
          <span class="search-icon">{{activeModal ? '▲' : '▼'}}</span>
          <ul v-if="activeModal" class="country-list">
            <li class="fixed-list-item">
              <input
                  v-model="searchQuery"
                  @input="filterCountries"
                  placeholder="Search..."
                  class="input-search country-item"
              />
            </li>
            <li
                v-for="country in filteredCountries"
                :key="country.code"
                class="country-item"
                @click="selectCountry(country)"
            >
              {{ country.emoji }} {{ country.COUNTRY_CODE }} (+{{ country.code }})
            </li>
          </ul>
        </div>
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
      default: () => this.getDefaultCountry(),
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Phone Number",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      internalSelectedItem: this.selectedItem,
      internalPhoneNumber: this.phoneNumber,
      formattedPhoneNumber: "",
      phoneNumberInvalid: false,
      searchQuery: "",
      activeModal: false,
      searchInputWidth: 150,
    };
  },
  mounted() {
    this.searchQuery = `${this.getDefaultCountry()['emoji']} ${this.getDefaultCountry()['COUNTRY_CODE']} (+${this.getDefaultCountry()['code']})`;
  },
  computed: {
    countries() {
      return this.getCountries();
    },
    defaultClass() {
      return "combined-input";
    },
    filteredCountries() {
      if (this.searchQuery) {
        const lowercaseQuery = this.searchQuery.toLowerCase();
        return this.countries.filter(
            (country) =>
                country.code.includes(lowercaseQuery) ||
                country.name.toLowerCase().includes(lowercaseQuery) ||
                country.COUNTRY_CODE.toLowerCase().includes(lowercaseQuery)
        );
      }
      return this.countries;
    },
  },
  methods: {
    getDefaultCountry() {
      console.log("getDefaultCountry: " + this.getCountries().find((country) => country.code === "55"));
      return this.getCountries().find((country) => country.code === "55");
    },
    getCountries() {
      return countries;
    },
    formatPhoneNumber() {
      if (this.internalPhoneNumber === "") {
        return;
      }
      const numericInput = this.internalPhoneNumber.replace(/\D/g, "");
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
        if (
            specialCharacters.includes(
                this.internalPhoneNumber[this.internalPhoneNumber.length - 1]
            )
        ) {
          this.internalPhoneNumber = this.internalPhoneNumber.slice(0, -1);
          event.preventDefault();
        }
      }
    },
    filterCountries() {
      this.calculateSearchInputWidth();
    },
    selectCountry(country) {
      this.internalSelectedItem = country;
      this.searchQuery = `${country.emoji} ${country.COUNTRY_CODE} (+${country.code})`;
      this.activeModal = false;
    },
    toggleModal() {
      if (!this.activeModal) {
        this.searchQuery = "";
      }
      this.activeModal = !this.activeModal;
      this.calculateSearchInputWidth();
    },
    calculateSearchInputWidth() {
      const longestCountry = this.filteredCountries.reduce((prev, current) =>
          prev.name.length > current.name.length ? prev : current
      );
      this.searchInputWidth = longestCountry.name.length * 10 + 30;
    },
  },
  watch: {
    internalSelectedItem: {
      handler: function (val) {
        this.formatPhoneNumber();
        this.$emit("update:selectedItem", val);
      },
      deep: true,
    },
    internalPhoneNumber: {
      handler: function (val) {
        this.$emit("update:phoneNumber", val);
      },
      deep: true,
    },
  },
};
</script>
