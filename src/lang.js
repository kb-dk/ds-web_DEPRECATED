import Vue from 'vue'
import VueI18n from 'vue-i18n'
import './filters'
import da from '../public/locale/da.json'

Vue.use(VueI18n)

const locale = 'da'

const messages = {
  da
}

const i18n = new VueI18n({
  locale,
  messages // set locale messages
})

export default i18n
