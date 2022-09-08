import { v4 as uuidv4 } from 'uuid'

export class SirviceSingleton {
  static #toasts = []
  static #ref = { add: () => {}, onDelete: () => {} }
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
    this.#toasts = this.#toasts.filter(
      (toast) => toast.id !== toastId,
    )
    // this.#ref.onDelete(this.#toasts)
    return this.#toasts
  }

  static createToast = ({ theme, type, position }) => {
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
    return this.#toasts
  }
}
