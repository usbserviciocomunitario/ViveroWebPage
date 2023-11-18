import { 
    IconLayoutNavbarExpand, 
    IconLayoutNavbarCollapse, 
} from "@tabler/icons-react";

import { white } from "../../styles/colors.module.scss";

export default ({ mode, callback }) => {
    return (
      (mode) ?
      <IconLayoutNavbarCollapse color={white} stroke={1} onClick={callback} /> :
      <IconLayoutNavbarExpand color={white} stroke={1} onClick={callback} />
    );
}