module.exports = {
  /*
  ** Headers of the page
  */
  server: { port: 3001 },
  head: {
    title: 'guide',
    meta: [
      { charset: 'utf-8' },
      //pc
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //반응형
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",},
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content:
          "사이트 내용",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "사이트 이름",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:"사이트 내용",
      },
      // {
      //   hid: "og:image",
      //   property: "og:image",
      //   content: "",//사이트 이미지 url
      // },
      // {
      //   hid: "og:url",
      //   property: "og:url",
      //   content: "", //메인 url
      // },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet ", href: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/animate.min.css" },
      { rel: "stylesheet ", href: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/swiper.min.css" },
      { rel: "stylesheet ", href: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/common/css/common.css" },
    ]
  },
  // css: ["~/static/scss/style.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
    extractCSS: process.env.NODE_ENV === 'production' ? true : false,
    postcss: {
      plugins: {
        autoprefixer: {
          grid: process.env.NODE_ENV === 'production' ? true : false,
          flexbox: process.env.NODE_ENV === 'production' ? true : false,
        },
      },
    },
  },
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
    "@nuxt/postcss8",
  ],
}

