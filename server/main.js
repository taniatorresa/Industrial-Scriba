import { Meteor } from 'meteor/meteor';
import { Batchs } from '../imports/collections/batchs';



Meteor.startup(() => {
  if (Batchs.find().count() == 0) {
      console.log("Importing private/ejemplos.json to db")

      var data = JSON.parse(Assets.getText("ejemplos.json"));

      data.forEach(function (item, index, array) {
          Batchs.insert(item);
          console.log(item);
      });
  }else{
    var info= Batchs.find().count();
    console.log(info);
  }

  Meteor.publish('batchs', function() {
    return Batchs.find({});

  });

});




