
import Carousels from './carousel'

const images = [
  'https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/slider_1.jpg?1704276438486',
  'https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/slider_2.jpg?1704276438486',
  'https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/slider_3.jpg?1704276438486',
  'https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/slider_4.jpg?1704276438486',
]
const Baners = () => {
    return (<div>
        <Carousels image={images} />
    </div>)
}
export default Baners