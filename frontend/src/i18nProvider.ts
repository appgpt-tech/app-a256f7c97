//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Restaurants: {
      name: 'Restaurants',
      fields: {
        Name: 'Name',
        City: 'City',
        Address: 'Address',
        MenuItems: 'Menu Items',
        Ratings: 'Ratings',
        ContactInformation: 'Contact Information',
        id: 'id',
      },
    },
    Menus: {
      name: 'Menus',
      fields: {
        ItemName: 'Item Name',
        Description: 'Description',
        Price: 'Price',
        Category: 'Category',
        Availability: 'Availability',
        id: 'id',
      },
    },
    Orders: {
      name: 'Orders',
      fields: {
        OrderID: 'Order Id',
        UserID: 'User Id',
        RestaurantID: 'Restaurant Id',
        ItemsOrdered: 'Items Ordered',
        TotalPrice: 'Total Price',
        OrderStatus: 'Order Status',
        DeliveryAddress: 'Delivery Address',
        OrderDateTime: 'Order Date Time',
        id: 'id',
      },
    },
    Users: {
      name: 'Users',
      fields: {
        UserID: 'User Id',
        Name: 'Name',
        EmailAddress: 'Email Address',
        PhoneNumber: 'Phone Number',
        DeliveryAddresses: 'Delivery Addresses',
        Password: 'Password',
        id: 'id',
      },
    },
    Cities: {
      name: 'Cities',
      fields: {
        CityID: 'City Id',
        CityName: 'City Name',
        RegionOrProvince: 'Region Or Province',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Restaurants: {
      name: 'Restaurants (fr)',
      fields: {
        Name: 'Name (fr)',
        City: 'City (fr)',
        Address: 'Address (fr)',
        MenuItems: 'Menu Items (fr)',
        Ratings: 'Ratings (fr)',
        ContactInformation: 'Contact Information (fr)',
        id: 'id',
      },
    },
    Menus: {
      name: 'Menus (fr)',
      fields: {
        ItemName: 'Item Name (fr)',
        Description: 'Description (fr)',
        Price: 'Price (fr)',
        Category: 'Category (fr)',
        Availability: 'Availability (fr)',
        id: 'id',
      },
    },
    Orders: {
      name: 'Orders (fr)',
      fields: {
        OrderID: 'Order Id (fr)',
        UserID: 'User Id (fr)',
        RestaurantID: 'Restaurant Id (fr)',
        ItemsOrdered: 'Items Ordered (fr)',
        TotalPrice: 'Total Price (fr)',
        OrderStatus: 'Order Status (fr)',
        DeliveryAddress: 'Delivery Address (fr)',
        OrderDateTime: 'Order Date Time (fr)',
        id: 'id',
      },
    },
    Users: {
      name: 'Users (fr)',
      fields: {
        UserID: 'User Id (fr)',
        Name: 'Name (fr)',
        EmailAddress: 'Email Address (fr)',
        PhoneNumber: 'Phone Number (fr)',
        DeliveryAddresses: 'Delivery Addresses (fr)',
        Password: 'Password (fr)',
        id: 'id',
      },
    },
    Cities: {
      name: 'Cities (fr)',
      fields: {
        CityID: 'City Id (fr)',
        CityName: 'City Name (fr)',
        RegionOrProvince: 'Region Or Province (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
