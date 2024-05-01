<script setup lang="ts">
import PrButton from '@c/core/button.vue'
import PrIcon from '@c/core/icon.vue'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const password = ref('')
const repeatPassword = ref('')
const repeatPasswordRef = ref('')
const passwordRef = ref<HTMLElement>(null)
const loader = ref(false)
const router = useRouter()
</script>

<template>
  <div
    class="uk-height-1-1 uk-tile uk-tile-default uk-flex uk-flex-left uk-flex-top"
    style="background-color: #f5f6f9; padding-top: 88px; padding-bottom: 10px"
  >
    <div class="anim-in">
      <div>
        <h3
          class="uk-h5"
          style="font-weight: 700; color: #464964; font-size: 20px; margin-bottom: 0"
        >
          نوع کسب و کارت رو انتخاب کن
        </h3>
        <p style="font-size: 13px; color: #909096; margin-top: 10px">
          ثبت نام و شروع فعالیت در ایفا فقط در چند مرحله ساده,<br />برای شروع شماره تماس رو وارد کن.
        </p>
      </div>
      <div style="margin-top: 40px">
        <div class="uk-flex-middle uk-grid-collapse" uk-grid>
          <div class="uk-width-expand">
            <div
              uk-grid
              class="uk-grid-small uk-flex-bottom"
              style="margin-top: 4px; margin-bottom: 6px"
            >
              <div class="uk-width-expand">
                <div
                  style="
                    width: 310px;
                    padding: 20px 25px;
                    background-color: #edf4ff;
                    border: 2px solid #576cb5;
                    border-radius: 8px;
                  "
                >
                  <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div>
                      <div
                        class="type"
                        style="
                          border-radius: 8px;
                          background-color: #045dff;
                          width: 22px;
                          height: 22px;
                          border: 2px solid #045dff;
                          padding: 9px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        "
                      >
                        <pr-icon icon="home-alt" ratio="1.1"></pr-icon>
                      </div>
                    </div>
                    <div>
                      <h6
                        class="uk-margin-remove-bottom"
                        style="margin-left: 5px; font-weight: 700"
                      >
                        انبار داری
                      </h6>
                      <p
                        class="uk-margin-remove-top"
                        style="
                          margin-left: 5px;
                          font-size: 13px;
                          color: #868d9a;
                          font-weight: 600;
                          margin-top: 3px !important;
                        "
                      >
                        متعلق به E-Commerce
                      </p>
                    </div>
                    <div class="uk-width-expand uk-text-left">
                      <pr-icon icon="line-arrow-right" style="color: #045cfa"></pr-icon>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    margin-top: 12px;
                    width: 310px;
                    padding: 20px 25px;
                    background-color: #fff;
                    border: 2px solid transparent;
                    border-radius: 8px;
                  "
                >
                  <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div>
                      <div
                        class="uk-light type"
                        style="
                          border-radius: 8px;
                          background-color: #fff;
                          width: 22px;
                          height: 22px;
                          border: 2px solid #bbc7dd;
                          padding: 9px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        "
                      >
                        <pr-icon icon="box" ratio="1.1"></pr-icon>
                      </div>
                    </div>
                    <div>
                      <h6
                        class="uk-margin-remove-bottom"
                        style="margin-left: 5px; font-weight: 700"
                      >
                        بسته بندی
                      </h6>
                      <p
                        class="uk-margin-remove-top"
                        style="
                          margin-left: 5px;
                          font-size: 13px;
                          color: #868d9a;
                          font-weight: 600;
                          margin-top: 3px !important;
                        "
                      >
                        برای کسب و کار های کوچک
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.type {
  .pr-icon-primary {
    color: #045dff;
  }

  .pr-icon-secondary {
    color: #ccdeff;
  }

  .pr-icon-tertiary {
    color: #ffffff;
  }

  .pr-icon-quaternary {
    color: #b3cdff;
  }
}
.type.uk-light {
  .pr-icon-primary {
    color: rgba(4, 93, 255, 0.13);
  }

  .pr-icon-secondary {
    color: rgba(4, 93, 255, 0.19);
  }

  .pr-icon-tertiary {
    color: rgba(4, 93, 255, 0.24);
  }

  .pr-icon-quaternary {
    color: rgba(4, 93, 255, 0.15);
  }
}
</style>
