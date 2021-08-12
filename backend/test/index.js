require('@warpjs/engine');
const MicroService = require('backend');

const { hello } = new MicroService({
  env: 'emulator',
});

// call the warp function
hello().then((message) => {
  console.log(message);
});
