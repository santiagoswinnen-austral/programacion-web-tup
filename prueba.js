
// function httpGet(theUrl) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//   xmlHttp.send( null );
//   return xmlHttp.responseText;
// }

function resolveAfter5Seconds() {
  return new Promise(resolve => {
    // throw new Error('Se produjo un error')
    setTimeout(() => {
      resolve(9);
    }, 5000);
  });
}

async function f1() {
  const res = await resolveAfter5Seconds()
  console.log('Despues de la promesa');
  console.log('Haciendo tiempo');
  console.log('Haciendo maas tiempo');
  console.log('Todavia no termina');
  console.log('-------------------------');
}

f1()

