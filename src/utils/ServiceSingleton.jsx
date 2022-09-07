import {v4 as uuidv4} from 'uuid'

export class SirviceSingleton {
  static #toasts = []
  static #ref = {add: () => {}, delete: () => {}}
  static #instance = SirviceSingleton

  static refElement(ref) {
    this.#ref = ref
  }

  static getInstance() {
    if (!SirviceSingleton.instance) {
      SirviceSingleton.instance = new SirviceSingleton()
    }

    return SirviceSingleton.instance
  }

  static addToast = (newToast) => {
    if (this.#toasts.length < 3) {
      this.#toasts.push(newToast)
      this.#ref.add(newToast)  
    }
  }

  static deleteToast = (toastId) => {
    console.log('ToastSingleton', this.#toasts)

    return this.#toasts.filter(toast => toastId !== toast.id)
  }

  static createToast = ({theme, type, position}) => {
    const createToast = {
      position,
      id: uuidv4(),
      type,
      theme,
    }
    this.addToast(createToast)
   
  }

  static showHistory = () => {
    return this.#toasts
  }

  static deleteToasts = () => {
     this.#toasts = []
     console.log('ToastSingleton', this.#toasts)

  }
}
