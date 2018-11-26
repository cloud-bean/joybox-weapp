export default {
  appid: 'wxb3762a929cf9e070',
  // appid: 'wxf8e294c011cd47e1',//dev
  server: {
    midServer: 'https://joywill.cc', // for wechat auth server end point, tinyServer
    bigServer: 'https://joywill.cc/api', // for kf-admin api end point, api v1  /api/base
    // bigServer: 'http://localhost:7000/api/base', // for kf-admin api end point, api v1  /api/base
    bigServerV2: 'https://joywill.cc/v2', // for kf-admin api end point, api v2  /api/v2
    // bigServerV2: 'http://localhost:7000/api/v2', // for kf-admin api end point, api v2  /api/v2; local test
    uploadServer: 'https://joywill.cc/api/tool/files'
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123'
  },
  secret: {
    accessToken: 'b8a94cfea5924d9650d4a72e8b10137f8a609c87d477f11ebe04b006ba427672',
    //  userid: '58306c044238e8014a52ce05',
    userid: '583a8905bb1a619b3b2b1d34' // 张彦云
    //  userid:'581717002a2d3adc2032206e',//崔
    // userid: '58cf339913a9ca10230e1d25',
    // userid: '58306c044238e8014a52ce05',
    // userid: '581c96e5a5c363bc28af1a69',
  },
  task: {
    limit: 30
  },
  rank: {
    limit: 20
  }
}
