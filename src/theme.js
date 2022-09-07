const font = "'Qwitcher Grypen'"
const font2= "'Qwitcher Grypen', cursive"


// Color palette
const black = '#000000'
const white = '#ffffff'
const grey = '#DCDCDC'
const darkGrey = '#696969'
const dark = '#2b2b2b'
const snow = '#FFFAFA'
const violet = '#9370DB'
const gold = '#FFD700'
const green = '#32CD32'
const red = '#DC143C'
const pink = 'pink'
const MediumSlateBlue = '#fefbf1'
const  whiteOt = '#faf2d5'
const whiteOttenok = '#f3e5ab'
const brownOttenok = '#9b926f'
const brown = '#4b4738'
const gradientWhite = `linear-gradient(
  90deg,
  rgba(242, 242, 245, 1) 0%,
  rgba(212, 212, 224, 0.29175420168067223) 51%,
  rgba(232, 249, 252, 1) 100%
)`

const boxShadow = ['0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%)']

const length = [
  50, 300, 30, 15, 35, 70, 420, 600, 150, 580, 120, 360,
]

const transition = [0.2, 500]

const zIndex = [500, 1000, 10]

export default {
  font,
  font2,
  length,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 40, 56, 72, 80, 17, 18,
  ],
  top: [5],
  right: [5],
  borderRadius: [5, 10, 15],
  fontWeight: [500, 400],
  padding: [20, 10, 25, 30, 40],
  letterSpacing: [0.3],
  opacity: [1, 0.5],
  gap: [10],
  border: [1, 2, 3],
  margin: [10, 5],
  transition,
  colors: {
    violet,
    white,
    gold,
    green,
    red,
    pink,
    MediumSlateBlue,
    whiteOt,
    whiteOttenok,
    brownOttenok,
    brown,
  },
  zIndex,
  boxShadow,
}
