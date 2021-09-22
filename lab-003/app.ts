


const person: {
    name: string;
    age: number;
} = {
    name: 'Nadav',
    age: 24
}


//Let's say you have this JavaScript object:
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

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

let factory_prodoct:{
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  };


factory_prodoct = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }



//creatte an array of prodoc_factory :
let factory_product_array: {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  }[];

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
  ]

// ad array with any types :
let any_array: any[];
any_array = [1,'r']

console.log('fuck this sheet');

for (let i = 0;i < factory_product_array.length;i++){
  console.log(factory_product_array[i]);
  for(const prod of factory_product_array[i].tags){
    console.log(prod.toUpperCase());
  }
}




//declare a Tuple ,  a typescript ytpe :
 let server_crd:[string,string,number,number];
 server_crd = ["sfdetd","ddt",12,33]
 console.log(server_crd);

 //only push is alawd to overide the tuple 
 server_crd.push('new data');
 console.log(server_crd);



 //a coustom type with enum


enum rangers {low = 0, middle = 30 ,high =  70}

 
let state:rangers ;
state = -2;
console.log(state);


