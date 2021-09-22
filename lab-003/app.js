var person = {
    name: 'Nadav',
    age: 24
};
//Let's say you have this JavaScript object:
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
/*
This would be the type of such an object:
{
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  }
  */
var factory_prodoct;
factory_prodoct = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
//creatte an array of prodoc_factory :
var factory_product_array;
factory_product_array = [
    {
        id: 'abc1',
        price: 12.99,
        tags: ['great-offer', 'hot-and-new'],
        details: {
            title: 'Red Carpet',
            description: 'A great carpet - almost brand-new!'
        }
    },
    {
        id: 'qsf2',
        price: 12.99,
        tags: ['great-erwerw', 'sdfgsdfgsdfgsdfw'],
        details: {
            title: 'Red Carpet',
            description: 'A great carpet - almost brand-new!'
        }
    }
];
// ad array with any types :
var any_array;
any_array = [1, 'r'];
console.log('fuck this sheet');
for (var i = 0; i < factory_product_array.length; i++) {
    console.log(factory_product_array[i]);
    for (var _i = 0, _a = factory_product_array[i].tags; _i < _a.length; _i++) {
        var prod = _a[_i];
        console.log(prod.toUpperCase());
    }
}
//declare a Tuple ,  a typescript ytpe :
var server_crd;
server_crd = ["sfdetd", "ddt", 12, 33];
console.log(server_crd);
//only push is alawd to overide the tuple 
server_crd.push('new data');
console.log(server_crd);
//a coustom type with enum
var rangers;
(function (rangers) {
    rangers[rangers["low"] = 0] = "low";
    rangers[rangers["middle"] = 30] = "middle";
    rangers[rangers["high"] = 70] = "high";
})(rangers || (rangers = {}));
var state;
state = -2;
console.log(state);
