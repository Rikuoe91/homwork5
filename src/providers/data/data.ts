import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists:any = [
      {
         "listHeader": "Anime",
          Items: [
              {
                  itemName: "Sword Art Online",
                  Info: {
                   price: "$30.99",
                   type: "Discs",
                   kind: "Box Set"
                  }
              },
              {
                  itemName: "Flames of Recca",
                  Info: {
                      price: "$59.99",
                      type: "blue-Ray",
                      kind: "Box Set"
                  }
              },

        ]
      },
      {
          "listHeader": "Movies",
          Items: [
              {itemName: "Thor Ragnarok",
                  Info: {
                      price: "$59.99",
                      type: "blue-Ray",
                      kind: "Box Set"
                  }
              },
              {itemName: "Pitch Black",
                  Info: {
                      price: "$29.99",
                      type: "blue-Ray",
                      kind: "Box Set"
                  }
              },
              {itemName: "Fast and the Furious",
                  Info: {
                      price: "$89.99",
                      type: "blue-Ray",
                      kind: "Box Set"
                  }
              }
          ]
      }
  ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
