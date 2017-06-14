/* tslint:disable: no-unused-variable */
import * as reactstrap from 'reactstrap';
/* tslint:enable: no-unused-variable */

// Add 'style' to accepted prop list
interface Props {
  tag?: React.ReactType;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

declare module 'reactstrap' {
  var InputGroup: React.StatelessComponent<Props>;
}
