<template>
  <div>
    <button type="button" @click="click">reCAPTCHA実行する</button>
    <div>token:{{token}}</div>
    <div>結果:{{result}}</div>
    <div>error:{{error}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { load } from "recaptcha-v3";
import firebase from "firebase";

interface IReCAPTCHAResult {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;

  "error-codes": [];
  [key: string]: any;
}

@Component
export default class reCAPTCHAUI extends Vue {
  private token: string = "";
  private result: IReCAPTCHAResult = {
    success: false,
    score: 0,
    action: "",
    challenge_ts: "",
    hostname: "",
    "error-codes": []
  };

  // ここに発行したsite keyを設定
  private siteKey = "site-key";

  // ここでreCAPTHCAのチェックレベルを設定
  private action = "homepage";
  private error = {};

  private async click() {
    const recaptcha = await load(this.siteKey);
    this.token = await recaptcha.execute(this.action);

    const func = firebase.functions().httpsCallable("checkRecaptcha");
    await func({ token: this.token })
      .then(async response => {
        this.result = (await response.data) as IReCAPTCHAResult;
      })
      .catch(error => {
        this.error = error;
      });
  }
}
</script>

<style scoped lang="scss">
</style>
