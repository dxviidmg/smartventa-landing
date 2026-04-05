import { motion } from 'framer-motion';
import { cardGridItem } from '../../constants';

const CardGridItem = ({ children, delay = 0, ...props }) => (
  <motion.div {...cardGridItem} transition={{ delay }} {...props}>
    {children}
  </motion.div>
);

export default CardGridItem;
