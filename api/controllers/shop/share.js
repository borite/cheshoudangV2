module.exports = {


  friendlyName: 'Share',


  description: 'Share shop.',


  inputs: {
      id:{type:'string'}
  },


  exits: {
      success:{
        outputDescription:'this is a test',
        outputType:[{}]
      }
  },


  fn: async function (inputs) {

    // All done.
    return [{id:inputs.id}];

  }


};
