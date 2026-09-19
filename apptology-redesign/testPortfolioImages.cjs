const https = require('https');

async function getPage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(404));
  });
}

async function run() {
  const html = await getPage('https://apptology.com/portfolio.html');
  console.log('--- PORTFOLIO HTML CONTENT ---');
  console.log(html);

  // Let's also check a list of common app icon paths on apptology.com
  const candidates = [
    'https://apptology.com/images/portfolio/environmental-logo.png',
    'https://apptology.com/images/portfolio/ibleed-icon.png',
    'https://apptology.com/images/portfolio/WingZone_icon.png',
    'https://apptology.com/images/portfolio/vSOS-anroid.png',
    'https://apptology.com/images/portfolio/i-vision-logo.png',
    'https://apptology.com/images/portfolio/hp-icon.png',
    'https://apptology.com/images/portfolio/dignity_health_icon.png',
    'https://apptology.com/images/portfolio/logo-palm-springs.png',
    'https://apptology.com/images/portfolio/swint_blackberry.png',
    'https://apptology.com/images/portfolio/SquareCoins-icon.png',
    'https://apptology.com/images/portfolio/ng-icon-blackberry.png',
    'https://apptology.com/images/portfolio/docreferral-icon.png',
    'https://apptology.com/images/portfolio/docreferral-logo.png',
    'https://apptology.com/images/portfolio/jama-icon.png',
    'https://apptology.com/images/portfolio/dreammoods-icon.png'
  ];

  for (const url of candidates) {
    const status = await checkUrl(url);
    console.log(url, '=>', status);
  }
}

run();
