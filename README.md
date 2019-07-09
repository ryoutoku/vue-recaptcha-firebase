# vue-recaptcha-firebase

## Require edit files
* functions/src/index.ts

```typescript
    const secret = "secret";    // set your reCAPTCHA secret key
```

* src/main.ts
```typescript
firebase.initializeApp({
    // set your firebase project settings
})
```

* src/components/reCAPTCHAUI.vue
```typescript
  private siteKey = "site-key";     // set your reCAPTCHA site key
```

## deploy Firebase Cloud Functions
```
cd functions
yarn install
firebase deploy --only functions
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
