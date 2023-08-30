<template>
  <div :class="[customClass, 'combined-input']">
    <div class="select-wrapper">
      <div class="select-container" @focus="activeModal = true">
        <input
            v-model="selectedCountryCode"
            @input="filterCountries"
            class="search-input"
            :class="{ active: activeModal, 'input-auto-width': selectedCountryCode  }"
            @click="toggleModal"
            placeholder="Search..."
            ref="countryCodeInput"
        />
        <span @click="toggleModal" class="search-icon">{{ modalIcon }}</span>
        <ul v-if="activeModal" class="country-list">
          <li class="input-search fixed-search-input">
            <input
                v-model="searchQuery"
                @input="filterCountries"
                class="search-input input-search fixed-search-input"
                :class="{ active: activeModal, 'input-auto-width': selectedCountryCode }"
                placeholder="Search..."
                ref="searchInput"
            />
          </li>
          <li
              v-for="(country) in filteredCountries"
              :key="country.code"
              :class="{ 'country-item': true}"
              @click="selectCountry(country)"
          >
            <span v-if="showFlag">
              {{ getFlag(country.emoji) }}
            </span>
            <span v-if="showCountryCode">
              {{ getCountryCode(country.COUNTRY_CODE) }}
            </span>
            <span v-if="showCode">
              {{ getCode(country.code) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="input-wrapper">
      <input
          v-model="internalPhoneNumber"
          @input="formatPhoneNumber"
          @keydown="handleKeyDown"
          :placeholder="placeholder"
          ref="phoneNumberInput"
      >
    </div>
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
    openIcon: {
      type: String,
      default: "▲", // Default icon for open modal
    },
    closedIcon: {
      type: String,
      default: "▼", // Default icon for closed modal
    },
    showFlag: {
      type: Boolean,
      default: true,
    },
    showCountryCode: {
      type: Boolean,
      default: true,
    },
    showCode: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      internalSelectedItem: {},
      internalPhoneNumber: this.phoneNumber,
      phoneNumberInvalid: false,
      searchQuery: "",
      activeModal: false,
      searchInputWidth: 150,
      selectedCountryCode: "",
    };
  },
  created() {
    document.addEventListener("click", this.handleClickOutside);
    this.setDefaultCountry();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  computed: {
    modalIcon() {
      return this.activeModal ? this.openIcon : this.closedIcon;
    },
    countries() {
      return countries;
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
      return this.getCountries().find((country) => country.code === "55") || {};
    },
    setDefaultCountry() {
      this.internalSelectedItem = this.getDefaultCountry() || {};
      this.selectedCountryCode = `${this.getFlag(this.internalSelectedItem.emoji)} ${this.getCountryCode(this.internalSelectedItem.COUNTRY_CODE)} ${this.getCode(this.internalSelectedItem.code)}`;
      this.searchQuery = this.selectedCountryCode;
    },
    getCountries() {
      return countries;
    },
    formatPhoneNumber() {
      if (this.internalPhoneNumber === "") {
        return;
      }

      const numericInput = this.internalPhoneNumber.replace(/\D/g, "");
      const numericMask = this.internalSelectedItem.mask.replace(/\D/g, ""); // Remove caracteres não numéricos da máscara
      let formattedNumber = "";
      let currentPosition = 0;

      for (const char of this.internalSelectedItem.mask) {
        if (char === "#") {
          if (currentPosition < numericInput.length) {
            formattedNumber += numericInput[currentPosition];
            currentPosition++;
          } else {
            break;
          }
        } else if (/\d/.test(char)) {
          formattedNumber += char;
          if (currentPosition < numericMask.length && numericMask[currentPosition] === char) {
            currentPosition++;
          }
        } else {
          formattedNumber += char;
        }
      }

      this.internalPhoneNumber = formattedNumber;

      this.phoneNumberInvalid = !/^\d+$/.test(numericInput);
    },
    handleClickOutside(event) {
      const isClickedInsideComponent = this.$el.contains(event.target);
      if (!isClickedInsideComponent) {
        this.activeModal = false;
      }
    },
    handleKeyDown(event) {
      const specialCharacters = ["-", " ", ")", "(", "0"];

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
      this.selectedCountryCode = `${this.getFlag(country.emoji)} ${this.getCountryCode(country.COUNTRY_CODE)} ${this.getCode(country.code)}`;
      this.activeModal = false;
      this.focusPhoneNumberInput();
    },
    toggleModal() {
      if (!this.activeModal) {
        this.searchQuery = "";
      }
      this.activeModal = !this.activeModal;
      this.calculateSearchInputWidth();
      if (this.activeModal) {
        this.focusSearchInput();
      }
    },
    focusSearchInput() {
      this.$nextTick(() => {
        this.$refs.searchInput.focus();
      });
    },
    focusPhoneNumberInput() {
      this.$nextTick(() => {
        this.$refs.phoneNumberInput.focus();
      });
    },
    calculateSearchInputWidth() {
      const longestCountry = this.filteredCountries.reduce((prev, current) =>
          prev.name.length > current.name.length ? prev : current ? current : []
      );
      this.searchInputWidth = longestCountry.name.length * 10 + 30;
    },
    getFlag(emoji) {
      return this.showFlag ? emoji : '';
    },
    getCountryCode(countryCode) {
      return this.showCountryCode ? countryCode : '';
    },
    getCode(code) {
      return this.showCode ? `+${code}` : '';
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
