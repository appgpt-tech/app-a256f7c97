//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { RestaurantsEntity } from './db/Restaurants.entity';
import { MenusEntity } from './db/Menus.entity';
import { OrdersEntity } from './db/Orders.entity';
import { UsersEntity } from './db/Users.entity';
import { CitiesEntity } from './db/Cities.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      RestaurantsEntity,
      MenusEntity,
      OrdersEntity,
      UsersEntity,
      CitiesEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Restaurants: [
        {
          Name: 'Name 1',
          City: 1,
          Address: 'Address 1',
          MenuItems: 1,
          Ratings: 0.68,
          ContactInformation: 'ContactInformation 1',
          id: 75,
        },
        {
          Name: 'Name 2',
          City: 2,
          Address: 'Address 2',
          MenuItems: 2,
          Ratings: 0.36,
          ContactInformation: 'ContactInformation 2',
          id: 0,
        },
        {
          Name: 'Name 3',
          City: 3,
          Address: 'Address 3',
          MenuItems: 3,
          Ratings: 0.57,
          ContactInformation: 'ContactInformation 3',
          id: 63,
        },
        {
          Name: 'Name 4',
          City: 4,
          Address: 'Address 4',
          MenuItems: 4,
          Ratings: 0.51,
          ContactInformation: 'ContactInformation 4',
          id: 73,
        },
        {
          Name: 'Name 5',
          City: 5,
          Address: 'Address 5',
          MenuItems: 5,
          Ratings: 0.38,
          ContactInformation: 'ContactInformation 5',
          id: 25,
        },
      ],
      Menus: [
        {
          ItemName: 'ItemName 1',
          Description: 'Description 1',
          Price: 0.71,
          Category: 'Category 1',
          Availability: 'Availability 1',
          id: 74,
        },
        {
          ItemName: 'ItemName 2',
          Description: 'Description 2',
          Price: 0.64,
          Category: 'Category 2',
          Availability: 'Availability 2',
          id: 51,
        },
        {
          ItemName: 'ItemName 3',
          Description: 'Description 3',
          Price: 0.62,
          Category: 'Category 3',
          Availability: 'Availability 3',
          id: 61,
        },
        {
          ItemName: 'ItemName 4',
          Description: 'Description 4',
          Price: 0.64,
          Category: 'Category 4',
          Availability: 'Availability 4',
          id: 56,
        },
        {
          ItemName: 'ItemName 5',
          Description: 'Description 5',
          Price: 0.18,
          Category: 'Category 5',
          Availability: 'Availability 5',
          id: 27,
        },
      ],
      Orders: [
        {
          OrderID: 'OrderID 1',
          UserID: 1,
          RestaurantID: 1,
          ItemsOrdered: 1,
          TotalPrice: 0.81,
          OrderStatus: 'OrderStatus 1',
          DeliveryAddress: 'DeliveryAddress 1',
          OrderDateTime: '2024-12-07T13:22:26.260Z',
          id: 51,
        },
        {
          OrderID: 'OrderID 2',
          UserID: 2,
          RestaurantID: 2,
          ItemsOrdered: 2,
          TotalPrice: 0.67,
          OrderStatus: 'OrderStatus 2',
          DeliveryAddress: 'DeliveryAddress 2',
          OrderDateTime: '2023-08-29T09:20:18.725Z',
          id: 33,
        },
        {
          OrderID: 'OrderID 3',
          UserID: 3,
          RestaurantID: 3,
          ItemsOrdered: 3,
          TotalPrice: 0.4,
          OrderStatus: 'OrderStatus 3',
          DeliveryAddress: 'DeliveryAddress 3',
          OrderDateTime: '2023-07-10T16:38:47.353Z',
          id: 14,
        },
        {
          OrderID: 'OrderID 4',
          UserID: 4,
          RestaurantID: 4,
          ItemsOrdered: 4,
          TotalPrice: 0.49,
          OrderStatus: 'OrderStatus 4',
          DeliveryAddress: 'DeliveryAddress 4',
          OrderDateTime: '2023-07-08T16:35:25.972Z',
          id: 60,
        },
        {
          OrderID: 'OrderID 5',
          UserID: 5,
          RestaurantID: 5,
          ItemsOrdered: 5,
          TotalPrice: 0.77,
          OrderStatus: 'OrderStatus 5',
          DeliveryAddress: 'DeliveryAddress 5',
          OrderDateTime: '2024-02-12T02:17:24.528Z',
          id: 32,
        },
      ],
      Users: [
        {
          UserID: 'UserID 1',
          Name: 'Name 1',
          EmailAddress: 'EmailAddress 1',
          PhoneNumber: 'PhoneNumber 1',
          DeliveryAddresses: 'DeliveryAddresses 1',
          Password: 'Password 1',
          id: 45,
        },
        {
          UserID: 'UserID 2',
          Name: 'Name 2',
          EmailAddress: 'EmailAddress 2',
          PhoneNumber: 'PhoneNumber 2',
          DeliveryAddresses: 'DeliveryAddresses 2',
          Password: 'Password 2',
          id: 72,
        },
        {
          UserID: 'UserID 3',
          Name: 'Name 3',
          EmailAddress: 'EmailAddress 3',
          PhoneNumber: 'PhoneNumber 3',
          DeliveryAddresses: 'DeliveryAddresses 3',
          Password: 'Password 3',
          id: 29,
        },
        {
          UserID: 'UserID 4',
          Name: 'Name 4',
          EmailAddress: 'EmailAddress 4',
          PhoneNumber: 'PhoneNumber 4',
          DeliveryAddresses: 'DeliveryAddresses 4',
          Password: 'Password 4',
          id: 66,
        },
        {
          UserID: 'UserID 5',
          Name: 'Name 5',
          EmailAddress: 'EmailAddress 5',
          PhoneNumber: 'PhoneNumber 5',
          DeliveryAddresses: 'DeliveryAddresses 5',
          Password: 'Password 5',
          id: 63,
        },
      ],
      Cities: [
        {
          CityID: 'CityID 1',
          CityName: 'CityName 1',
          RegionOrProvince: 'RegionOrProvince 1',
          id: 69,
        },
        {
          CityID: 'CityID 2',
          CityName: 'CityName 2',
          RegionOrProvince: 'RegionOrProvince 2',
          id: 80,
        },
        {
          CityID: 'CityID 3',
          CityName: 'CityName 3',
          RegionOrProvince: 'RegionOrProvince 3',
          id: 16,
        },
        {
          CityID: 'CityID 4',
          CityName: 'CityName 4',
          RegionOrProvince: 'RegionOrProvince 4',
          id: 43,
        },
        {
          CityID: 'CityID 5',
          CityName: 'CityName 5',
          RegionOrProvince: 'RegionOrProvince 5',
          id: 64,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('RestaurantsEntity', data.Restaurants);
      await this.SeedResource('MenusEntity', data.Menus);
      await this.SeedResource('OrdersEntity', data.Orders);
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('CitiesEntity', data.Cities);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}