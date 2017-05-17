# green-music-frontend

> green-music-frontend

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `app.js`: entrance of the Weex page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `weex.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8080 port
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`.


- 我的                  √
- 个人主页              √
  - 用户名
  - 头像
  - 全部歌单
- 歌单详情                
  - 名称/简介
  - 创建者
  - 全部歌曲
- 歌手页                 
  - 头像/名字/简介
  - 全部歌曲
  - 热门歌曲
  - 热门专辑
- 专辑页
  - 类似于歌单详情