// filepath: /e:/ft_projekt/src/plugins/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faGamepad, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faGamepad, faShoppingCart);

export default FontAwesomeIcon;