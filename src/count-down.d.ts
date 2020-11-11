import Vue, {VueConstructor} from 'vue'

declare module '@femessage/count-down' {
  class FemessageComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type CountDownData = {}

  type CountDownMethods = {
    start: () => void
    pause: () => void
    reset: () => void
  }

  type CountDownComputed = {}

  type CountDownProps = {
    days: number
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
    autoplay: boolean
    format: string
  }

  type CountDown = Combined<
    CountDownData,
    CountDownMethods,
    CountDownComputed,
    CountDownProps
  >

  export interface CountDownType extends FemessageComponent, CountDown {}

  const CountDownConstruction: ExtendedVue<
    Vue,
    CountDownData,
    CountDownMethods,
    CountDownComputed,
    CountDownProps
  >

  export default CountDownConstruction
}
